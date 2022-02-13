import React from "react";
import { useDispatch } from "react-redux";
import { getPagePhotos } from "./store/actions";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function BasicSelect(props) {
  const dispatch = useDispatch();
  let albumId = 1;
  const handleChange = (event) => {
    albumId = event.target.value;
    console.log("albumId", albumId);
    dispatch(getPagePhotos(albumId));
  };

  return (
    <Box sx={{ minWidth: 120, p: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="albumId-label">album Id</InputLabel>
        <Select
          labelId="albumId"
          id="albumId"
          label="album Id"
          onChange={handleChange}
        >
          {Array(props.pages)
            .fill(null)
            .map((el, index) => (
              <MenuItem key={index} value={index + 1}>
                {index + 1}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
}
