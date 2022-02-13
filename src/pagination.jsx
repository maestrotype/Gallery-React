import * as React from "react";
import Pagination from "@mui/material/Pagination";
import { useDispatch } from "react-redux";
import { getPagePhotos } from "./store/actions";

export default function PaginationPictures(props) {
  const dispatch = useDispatch();
  const pages = props.pages;
  const page = props.page;
  const handleChange = (event, value) => {
    dispatch(getPagePhotos(value));
  };

  return <Pagination count={pages} page={page} onChange={handleChange} />;
}
