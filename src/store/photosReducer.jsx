const GET_PHOTOS = "GET_PHOTOS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const GET_PAGE_PHOTOS = "GET_PAGE_PHOTOS";

const defaultState = {
  photos: [],
  isFetching: true,
  currentPage: 1,
  perPage: 100,
};

export const photosReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_PHOTOS:
      return { ...state, photos: action.payload };
    case GET_PAGE_PHOTOS:
      return { ...state, photos: action.payload };
    case "SELECT_ALBUM_ID":
      return { ...state, photos: state + action.payload };
    case SET_IS_FETCHING:
      return { ...state, isFetching: action.payload };
    case SET_CURRENT_PAGE:
      return { ...state, photos: state + action.payload };
    default:
      return state;
  }
};

export const getPagePhotos = (repos) => ({
  type: GET_PAGE_PHOTOS,
  payload: repos,
});
export const setPhotos = (repos) => ({ type: GET_PHOTOS, payload: repos });
export const setIsFetching = (bool) => ({
  type: SET_IS_FETCHING,
  payload: bool,
});
export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});
