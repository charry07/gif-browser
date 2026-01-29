import "./App.css";
import {Footer, Header, SearchBar} from "./components";
import logo from "./assets/react.svg";
import {useState} from "react";
import {GifList, TagsList} from "./lists";
import { Box } from "@mui/material";

function GifsApp() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <Box>
      <Header title='Gifs App' description='App to search Gifs' logo={logo} />
      <SearchBar handleSearch={setSearchValue} />
      <TagsList tags={searchValue} onTagClick={setSearchValue}/>
      <GifList searchValue={searchValue} />
      <Footer />
    </Box>
  );
}

export default GifsApp;
