import {Box, Button, IconButton, InputAdornment, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {useState} from "react";

interface Props {
  handleSearch: (value: string) => void;
  placeholder?: string;
}

export const SearchBar = ({placeholder = "Search gifs...", handleSearch}: Props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleAfterSearch = () => {
    handleSearch && handleSearch(searchValue);
    setSearchValue("");
  };

  return (
    <Box sx={{display: "flex", gap: 2, mb: 2}}>
      <TextField
        label='Search'
        fullWidth
        placeholder={placeholder}
        value={searchValue}
        onChange={({target}) => setSearchValue(target.value)}
        onKeyDown={({key}) => key === "Enter" && handleAfterSearch()}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position='start'>
                <IconButton onClick={handleAfterSearch}>
                  <SearchIcon color='primary' />
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
      <Button variant='contained' color='primary' onClick={handleAfterSearch}>
        Search
      </Button>
    </Box>
  );
};
