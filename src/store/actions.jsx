import { Maximize } from '@mui/icons-material'
import axios from 'axios'
import {setPagePhotos, setPhotos} from "./photosReducer"

export const getPhotos = () => {
    return async (dispatch) => {
        const responce = await axios.get("http://jsonplaceholder.typicode.com/photos")
        const perPage = responce.data.reduce((prev, current) => prev.albumId > current.albumId ? prev.albumId : current.albumId)
        console.log("perPage", perPage);
        dispatch(setPhotos(responce.data, perPage))
    }
}

export const getPagePhotos = (page) => {
    return async (dispatch) => {
        const responce = await axios.get("http://jsonplaceholder.typicode.com/photos").then(responce => responce.data.filter(item => item.albumId == page)) 
        console.log("responce", responce);
        dispatch(setPagePhotos(responce, page))
    }
}