import {Box, CircularProgress} from "@mui/material";
import {useEffect, useState, useRef} from "react";
import {GifApi} from "../api/GifApi";
import type {Gif} from "../Interfaces";
import {GifStructure} from "../components/GifStructure";

interface Props {
  searchValue: string;
}

export const GifList = ({searchValue}: Props) => {
  const [GifsArray, setGifsArray] = useState<Gif[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);

  const MAX_GIFS = 50;

  // Reset cuando cambia la búsqueda
  useEffect(() => {
    setGifsArray([]);
    setPage(0);
  }, [searchValue]);

  // Cargar GIFs (el caché se maneja en GifApi)
  useEffect(() => {
    const loadGifs = async () => {
      if (GifsArray.length >= MAX_GIFS) return;

      setLoading(true);
      try {
        const response = await GifApi.get(`/${searchValue === "" ? "trending" : "search"}`, {
          params: {q: searchValue, limit: 20, offset: page * 20},
        });
        const newGifs = response.data.data;
        setGifsArray((prev) => (page === 0 ? newGifs : [...prev, ...newGifs].slice(0, MAX_GIFS)));
      } catch (error) {
        console.error("Error loading GIFs:", error);
      }
      setLoading(false);
    };

    loadGifs();
  }, [searchValue, page]);

  // Observer para lazy load
  useEffect(() => {
    if (GifsArray.length >= MAX_GIFS) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading && GifsArray.length < MAX_GIFS) {
          setPage((prev) => prev + 1);
        }
      },
      {threshold: 0.5},
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [loading, GifsArray.length]);

  return (
    <>
      <Box sx={{display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center", my: 3}}>
        {GifsArray.map((gif: Gif) => (
          <GifStructure key={gif.id} gif={gif} />
        ))}
      </Box>

      {/* Loader */}
      {GifsArray.length < MAX_GIFS && (
        <Box ref={loaderRef} sx={{display: "flex", justifyContent: "center", py: 4}}>
          {loading && <CircularProgress />}
        </Box>
      )}
    </>
  );
};
