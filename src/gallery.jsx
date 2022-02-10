import React, { useState, useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";


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

export default function Gallery(props) {
  let [url, setUrl] = useState("3434")
  const photos = props.repos.photos
  const isFething = props.isFething


  const [open, setOpen] = React.useState(false);
  const handleOpen = function (itemUrl) {
    setOpen(true);
    setUrl(itemUrl);
  };
  const handleClose = () => setOpen(false);
  //   const handleUrl = (i) => setUrl(i);
  return (
    <ImageList sx={{ width: "100%", height: "100%" }} cols={6} rowHeight={164}>
      {photos && photos.map((item) => (
        <ImageListItem key={item.thumbnailUrl} onClick= {() => handleOpen(item.url)} 
        >
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
        <img
            src={url}
            srcSet={url}
            alt={'test'}
            loading="lazy"
          />
        </Box>
      </Modal>
    </ImageList>
  );
}
