import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function BasicSelect(pages) {
  const [albums, setAlbums] = useState([]);
  const [albumId, setAlbumId] = useState("");
  let albumsId = [];

  const handleChange = (event) => {
    setAlbumId(event.target.value);
  };

  albumsId = albums.map((elem) => elem["albumId"]);

  let uniqueAlbums = albumsId.reduce(
    (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
    []
  );

  return (
    <Box sx={{ minWidth: 120, p: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="albumId-label">Age</InputLabel>
        <Select
          labelId="albumId"
          id="albumId"
          value={albumId}
          label="album Id"
          onChange={handleChange}
        >
          {
         Array.prototype.map.call(pages, (value, index) =>
              <MenuItem value={index}>{index}</MenuItem>
            
           )
          }
        </Select>
      </FormControl>
    </Box>
  );
}
