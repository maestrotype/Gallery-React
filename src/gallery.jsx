import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "@mui/material/Modal";
import { deletePhoto } from "./store/actions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const btn = {
  position: "absolute",
  bottom: "5px",
  right: "5px",
}

export default function Gallery(props) {
  const dispatch = useDispatch()

  let [url, setUrl] = useState("3434")
  const photos = props.repos.photos
  
  let [selectId, setSelectId] = useState(0)

  const [open, setOpen] = React.useState(false)
  const handleOpen = function (item) {
    setOpen(true);
    setSelectId(item.id)
    setUrl(item.url);
  };
  const deleteImg = () => { 
    dispatch(deletePhoto(photos, selectId))
    setOpen(false)
  }
  const handleClose = () => setOpen(false);
  
  return (
    <ImageList sx={{ width: "100%", height: "100%" }} cols={6} rowHeight={164}>
      {photos &&
        photos.map((item, id) => (
          <ImageListItem key={id} onClick={() => handleOpen(item)}>
            <img
              src={`${item.thumbnailUrl}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.thumbnailUrl}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src={url} srcSet={url} alt={"test"} loading="lazy" />
          <Button sx={btn} variant="outlined" startIcon={<DeleteIcon />} onClick={() => deleteImg()}>
            Delete
          </Button>
        </Box>
      </Modal>
    </ImageList>
  );
}
