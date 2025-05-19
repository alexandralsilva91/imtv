# 🎬 IMTV

IMTV is a desktop web application inspired by platforms like IMdB. It allows users to browse, search, and view detailed information about movies and TV shows using data fetched from the [TMDB API](https://www.themoviedb.org/documentation/api).

---

## 📚 About the Project

This project was built as the final project for the **React module** of the **Full Stack Development Course at EDIT.**  
The main purpose is to demonstrate understanding of React concepts, routing, state management, API integration, and user experience design. 

---

## 🚀 Features

- 🗂️ Organized into:
  - `Movies.tsx` – Movie listings (**homepage**)
  - `Tv.tsx` – TV show listings
  - `Movie.tsx` - Detailed movie page
  - `TvShow.tsx` - Detailed tv show page
  - `SearchPage.tsx` - Search results for movies or tv shows 
- 🔍 SearchBar in the center of the Navbar
    - You can also search by directly typing a query in the URL (e.g. `/search/spiderman`)
- 🧭 Navigation using **React Router**
- 💅 Styled using **SCSS Modules**

---

## Folder/ File Structure
```
  src/
    │
    ├── common/ # Reusable UI components and respective SCSS Modules or global styles
    ├── page_sections/ # Big UI components, some only used in one specific route-level page, some used │                    in several pages 
    ├── pages/ # Route-level pages (Movies, Tv, Movie, TvShow, SearchPage)
    ├── services/ # API calls to TMDB, and some useful functions
    ├── stles/ # SCSS Modules and global styles
    └── main.tsx # Entry point and routing
```

## 🛠️ Tech Stack

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [TMDB API](https://www.themoviedb.org/)
- [React Router](https://reactrouter.com/)
- [SCSS] (https://sass-lang.com/)

---

## 💻 Installation & Running Locally

```bash
git clone https://github.com/alexandralsilva91/imtv.git
cd imtv
npm install
npm run dev
```
