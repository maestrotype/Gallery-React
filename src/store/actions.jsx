import axios from 'axios'
import {setPhotos} from "./photosReducer"

export const getPhotos = () => {
    return async (dispatch) => {
        const responce = await axios.get("http://jsonplaceholder.typicode.com/photos")
        console.log("responce", responce);
        dispatch(setPhotos(responce.data))
    }
}