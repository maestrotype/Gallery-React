const GET_PHOTOS = "GET_PHOTOS";
const DELETE_PHOTO = "DELETE_PHOTO";
const GET_PAGE_PHOTOS = "GET_PAGE_PHOTOS";

const defaultState = {
  photos: [],
  currentPage: 1,
  pages: 0,
};

export const photosReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_PHOTOS:
      return { ...state, photos: action.payload, pages: action.pages };
    case GET_PAGE_PHOTOS:
      return { ...state, photos: action.payload, currentPage: action.currentPage };
    case DELETE_PHOTO:
      return { ...state, photos: action.payload };
    default:
      return state;
  }
};

export const setPagePhotos = (repos, page) => ({
  type: GET_PAGE_PHOTOS,
  payload: repos,
  currentPage: page
})

export const setPhotos = (repos, pages) => ({ type: GET_PHOTOS, payload: repos, pages: pages });

export const delPhoto = (photos, selectId) => ({
  type: DELETE_PHOTO,
  payload: photos.filter(item => item.id != selectId),
});