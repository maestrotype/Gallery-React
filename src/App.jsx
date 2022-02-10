import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import "./App.css";
import Gallery from "./gallery";
import Select from "./select";
import Pagination from "./pagination";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos } from "./store/actions";

function App() {

  const dispatch = useDispatch()
  const repos = useSelector(state => state.repos)
  const isFetching = useSelector(state => state.repos.isFetching)
  const currentPage = useSelector(state => state.repos.currentPage)
  const perPage = useSelector(state => state.repos.perPage)
  const [searchValue, setSearchValue] = useState("")

  const pages = [1,2,3,4,5]

  useEffect(() => {
    dispatch(getPhotos(currentPage, perPage))
  }, [currentPage])

  return (
    <div>
      <Pagination page = {currentPage} />
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="start"
      >
        <Grid item xs={9} md={9}>
          <Gallery repos = {repos} />
        </Grid>
        <Grid item xs={2} md={2}>
          <Select />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
