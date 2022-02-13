
import axios from 'axios'
import {setPagePhotos, setPhotos, delPhoto} from "./photosReducer"

export const getPhotos = () => {
    return async (dispatch) => {
        const responce = await axios.get("http://jsonplaceholder.typicode.com/photos")
        const perPage = responce.data.reduce((prev, current) => prev.albumId > current.albumId ? prev.albumId : current.albumId)
        dispatch(setPhotos(responce.data, perPage))
    }
}

export const getPagePhotos = (page) => {
    return async (dispatch) => {
        const responce = await axios.get("http://jsonplaceholder.typicode.com/photos").then(responce => responce.data.filter(item => item.albumId == page)) 
        dispatch(setPagePhotos(responce, page))
    }
}

export const deletePhoto = (photos, selectId) => {
    return (dispatch) =>
    dispatch(delPhoto(photos, selectId))
}