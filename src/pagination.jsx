import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import { getPagePhotos } from './store/photosReducer';
import { useDispatch } from 'react-redux';

export default function PaginationPictures(props) {
    const dispatch = useDispatch()
    // const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        console.log("event", event);
        console.log("value", value);
    dispatch(getPagePhotos(value))    
    //   setPage(value);
    };
    const page = props.page
  
    return (
        <Pagination count={10} page={page} onChange={handleChange}/>
    )
}