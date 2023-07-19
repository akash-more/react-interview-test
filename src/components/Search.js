import { Button, TextField } from "@mui/material";
import { useState } from "react";

const Search = ({ fetchData }) => {
  const [searchText, setSearchText] = useState("");
  return (
    <div>
      <TextField
        id=""
        label="Search"
        size="small"
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <Button onClick={() => fetchData(searchText)}>Search</Button>
    </div>
  );
};

export default Search;
