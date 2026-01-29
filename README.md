# 🎬 GIFs Expert App

A modern and feature-rich GIF search application built with React, TypeScript, and Material-UI. This project showcases advanced React patterns, API integration with caching, and a polished user interface.

> 🌐 **Live Demo**: Once deployed, visit `https://charry07.github.io/gif-browser/` | 📖 [Deployment Guide](./DEPLOYMENT.md)

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=flat&logo=typescript)
![Material-UI](https://img.shields.io/badge/MUI-7.3.7-007FFF?style=flat&logo=mui)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=flat&logo=vite)

## ✨ Features

### 🔍 Search & Discovery
- **Real-time GIF Search** - Search millions of GIFs from Giphy API
- **Trending GIFs** - Browse trending GIFs when no search term is entered
- **Search History Tags** - Quick access to your last 8 searches (persisted in localStorage)
- **Infinite Scroll** - Lazy loading with a maximum of 50 GIFs per search

### 💾 Performance & Optimization
- **Smart Caching System** - 1-hour cache for API responses using localStorage
- **Reduced API Calls** - Automatic cache management to minimize network requests
- **Lazy Loading** - Progressive image loading as you scroll
- **Optimized Rendering** - Efficient React patterns and memoization

### 🎨 User Interface
- **Material-UI Components** - Modern, accessible, and responsive design
- **Dark Theme Support** - Eye-friendly dark mode interface
- **Smooth Animations** - Polished hover states and transitions
- **Responsive Layout** - Works perfectly on desktop, tablet, and mobile

### 🎯 GIF Cards
- **Rich Information Display** - Title, username, and avatar
- **Interactive Actions** - Open in Giphy, Sticker badges
- **Hover Effects** - Scale, shadow, and border animations
- **Optimized Images** - Uses appropriate image sizes from Giphy

## 🚀 Technologies

### Core
- **React 19.2.0** - Latest React with modern hooks and strict mode
- **TypeScript 5.9.3** - Full type safety and developer experience
- **Vite 7.2.4** - Lightning-fast development and build tool

### UI Library
- **Material-UI 7.3.7** - Complete Material Design component library
- **@emotion/react & @emotion/styled** - CSS-in-JS styling solution
- **@mui/icons-material** - Material Design icons

### HTTP & API
- **Axios 1.13.4** - Promise-based HTTP client with custom caching layer
- **Giphy API** - Access to millions of GIFs and stickers

### Dev Tools
- **ESLint** - Code quality and consistency
- **pnpm** - Fast, disk space efficient package manager

## 📁 Project Structure

```
gifs-expert-app/
├── src/
│   ├── api/              # API client with caching
│   │   └── GifApi.ts     # Centralized Axios instance with 1-hour cache
│   ├── components/       # Reusable components
│   │   ├── Footer.tsx    # App footer with social links
│   │   ├── GifStructure.tsx  # Individual GIF card
│   │   ├── Header.tsx    # App header
│   │   ├── SearchBar.tsx # Search input with MUI styling
│   │   └── Tags.tsx      # Search history tags
│   ├── lists/            # List components
│   │   ├── GifList.tsx   # Infinite scroll GIF grid
│   │   └── TagsList.tsx  # Search history list
│   ├── Interfaces/       # TypeScript type definitions
│   │   └── index.ts      # Giphy API response types
│   ├── utils/            # Utility functions
│   ├── GifsApp.tsx       # Main app component
│   └── main.tsx          # App entry point
├── public/               # Static assets
├── .env                  # Environment variables (VITE_GIF_API_KEY)
└── package.json          # Dependencies and scripts
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/charry07/gifs-expert-app.git
   cd gifs-expert-app
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_GIF_API_KEY=your_giphy_api_key_here
   ```
   Get your API key from [Giphy Developers](https://developers.giphy.com/)

4. **Run the development server**
   ```bash
   pnpm dev
   ```

5. **Open in browser**
   Navigate to [http://localhost:5173](http://localhost:5173)

## 🏗️ Build for Production

```bash
pnpm build
```

The optimized production build will be generated in the `dist/` directory.

## 🚀 Deploy to GitHub Pages

This project is configured to automatically deploy to GitHub Pages using GitHub Actions. 

📖 **For detailed step-by-step instructions in Spanish, see [DEPLOYMENT.md](./DEPLOYMENT.md)**

### Quick Start

1. **Enable GitHub Pages**: Settings → Pages → Source: "GitHub Actions"
2. **Add API Secret**: Settings → Secrets → New secret `VITE_GIF_API_KEY`
3. **Deploy**: Push to `master` branch or manually trigger via Actions tab
4. **Access**: `https://[your-username].github.io/gif-browser/`

### Prerequisites
- A Giphy API key from [Giphy Developers](https://developers.giphy.com/)
- Admin access to the GitHub repository

### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. In the left sidebar, click on **Pages**
4. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
5. Save the changes

### Step 2: Add API Key Secret

The application requires a Giphy API key to function. Add it as a repository secret:

1. In your repository, go to **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Name: `VITE_GIF_API_KEY`
4. Value: Your Giphy API key
5. Click **Add secret**

### Step 3: Deploy

The deployment happens automatically when you push to the `master` branch:

```bash
git push origin master
```

You can also manually trigger a deployment:

1. Go to the **Actions** tab in your repository
2. Select the **Deploy to GitHub Pages** workflow
3. Click **Run workflow**
4. Select the branch and click **Run workflow**

### Step 4: Access Your Site

After successful deployment, your site will be available at:
```
https://[your-username].github.io/gif-browser/
```

### Deployment Configuration

The deployment is configured in:
- **`.github/workflows/deploy.yml`** - GitHub Actions workflow for automated deployment
- **`vite.config.ts`** - Contains the `base: '/gif-browser/'` configuration for proper asset paths

### Troubleshooting

**Workflow not running?**
- Make sure GitHub Pages is enabled with "GitHub Actions" as the source
- Check that you're pushing to the `master` branch
- Verify the workflow file exists at `.github/workflows/deploy.yml`

**Build failing?**
- Ensure `VITE_GIF_API_KEY` secret is properly set
- Check the Actions tab for detailed error logs
- Verify all dependencies are properly listed in `package.json`

**Site not loading properly?**
- Verify the `base` path in `vite.config.ts` matches your repository name
- Clear your browser cache and try again
- Check browser console for any errors

**API not working on deployed site?**
- Confirm the `VITE_GIF_API_KEY` secret is set correctly
- Verify your API key is valid at [Giphy Developers](https://developers.giphy.com/)
- Check if your API key has rate limits or restrictions

## 📝 Key Implementation Details

### Cache System
- **Duration**: 1 hour (3600000ms)
- **Storage**: localStorage with structured cache keys
- **Strategy**: Check cache first, fetch from API if expired or missing
- **Location**: Centralized in `src/api/GifApi.ts`
- **Benefits**: Reduces API calls, improves performance, works offline for cached searches

### Infinite Scroll
- **Implementation**: IntersectionObserver API
- **Page Size**: 20 GIFs per page
- **Maximum**: 50 GIFs per search
- **Threshold**: 0.5 (triggers when 50% of sentinel is visible)
- **Auto Reset**: Clears results when search term changes

### Search History
- **Storage**: localStorage under 'gif-tags-history' key
- **Limit**: Last 8 searches
- **Features**: Click to search again, prevents duplicates
- **Persistence**: Survives page refreshes

## 🎯 Features Showcase for Portfolio

This project demonstrates:

✅ **Modern React Patterns** - Hooks, custom hooks, component composition
✅ **TypeScript Mastery** - Full type safety with interfaces and strict mode
✅ **API Integration** - RESTful API consumption with error handling
✅ **Performance Optimization** - Caching, lazy loading, memoization
✅ **State Management** - Effective use of React state and localStorage
✅ **UI/UX Design** - Material-UI components with custom styling
✅ **Responsive Design** - Mobile-first approach with flexible layouts
✅ **Clean Architecture** - Organized folder structure and separation of concerns
✅ **Developer Experience** - Fast builds with Vite, type safety with TypeScript

## 📄 License

MIT License - feel free to use this project for learning or your own portfolio!

## 👨‍💻 Author

**Anderson Charry**

- LinkedIn: [charry07](https://www.linkedin.com/in/charry07)
- GitHub: [charry07](https://github.com/charry07)
- Stack Overflow: [charry07](https://stackoverflow.com/users/15453981/charry07)
- Portfolio: [anderson-charry.dev](https://www.anderson-charry.dev/)



## 🙏 Acknowledgments

- [Giphy API](https://developers.giphy.com/) for providing the GIF data
- [Material-UI](https://mui.com/) for the amazing component library
- [Vite](https://vitejs.dev/) for the blazing fast development experience

---

⭐ **Star this repo if you find it useful!**
