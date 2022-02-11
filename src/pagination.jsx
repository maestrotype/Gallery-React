import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import { useDispatch } from 'react-redux';
import { getPagePhotos } from './store/actions';

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