import axios, {type AxiosResponse} from "axios";

const ApiGifKey: string = import.meta.env.VITE_GIF_API_KEY;

const axiosInstance = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs",
  params: {
    api_key: ApiGifKey,
  },
});

// Cache configuration
interface CacheData {
  data: any;
  timestamp: number;
}

const CACHE_DURATION = 60 * 60 * 1000;
const getCacheKey = (url: string, params: any): string => {
  const paramString = JSON.stringify(params);
  return `gif_cache_${url}_${paramString}`;
};

const getFromCache = (key: string): any | null => {
  try {
    const cached = localStorage.getItem(key);
    if (!cached) return null;

    const cacheData: CacheData = JSON.parse(cached);
    const now = Date.now();

    // Verificar si expiró
    if (now - cacheData.timestamp > CACHE_DURATION) {
      localStorage.removeItem(key);
      return null;
    }

    return cacheData.data;
  } catch (error) {
    console.error("Error reading cache:", error);
    return null;
  }
};

const saveToCache = (key: string, data: any): void => {
  try {
    const cacheData: CacheData = {data, timestamp: Date.now()};
    localStorage.setItem(key, JSON.stringify(cacheData));
    console.log("💾 Saved to cache:", key);
  } catch (error) {
    console.error("Error saving cache:", error);
  }
};

// Custom get method with cache
const cachedGet = async (url: string, config?: any): Promise<AxiosResponse> => {
  const cacheKey = getCacheKey(url, config?.params || {});

  // Check cache first
  const cachedData = getFromCache(cacheKey);
  if (cachedData) {
    return {
      data: cachedData,
      status: 200,
      statusText: "OK",
      headers: {},
      config: config || {},
    } as AxiosResponse;
  }

  const response = await axiosInstance.get(url, config);

  // Save to cache
  saveToCache(cacheKey, response.data);

  return response;
};

// Export with cache methods
export const GifApi = {
  get: cachedGet,
  clearCache: () => {
    try {
      Object.keys(localStorage)
        .filter((key) => key.startsWith("gif_cache_"))
        .forEach((key) => localStorage.removeItem(key));
      console.log("🗑️ Cache cleared");
    } catch (error) {
      console.error("Error clearing cache:", error);
    }
  },
};
