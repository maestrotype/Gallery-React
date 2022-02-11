import axios from 'axios'
import {setPagePhotos, setPhotos} from "./photosReducer"

export const getPhotos = () => {
    return async (dispatch) => {
        const responce = await axios.get("http://jsonplaceholder.typicode.com/photos")
        console.log("responce", responce);
        dispatch(setPhotos(responce.data))
    }
}

export const getPagePhotos = (value) => {
    return async (dispatch) => {
        const responce = await axios.get("http://jsonplaceholder.typicode.com/photos").then(responce => responce.data.filter(item => item.albumId == value)) 
        console.log("responce", responce);
        dispatch(setPagePhotos(responce))
    }
}