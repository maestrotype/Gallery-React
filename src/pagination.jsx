import * as React from 'react';
import Pagination from '@mui/material/Pagination';

export default function PaginationPictures(props) {
    // const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        console.log("event", event);
        console.log("value", value);
        
    //   setPage(value);
    };
    const page = props.page
  
    return (
        <Pagination count={10} page={page} onChange={handleChange}/>
    )
}