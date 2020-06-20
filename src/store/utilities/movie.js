import axios from "axios";

const BASE_URL = process.env.BASE_URL;

// Action Types
const FETCH_MOVIE = "FETCH_MOVIE";

// Action Creators

const fetchMovie = (movie) => {
  return {
    type: FETCH_MOVIE,
    payload: movie,
  };
};

// Thunk Creators
export const fetchMovieThunk = (id) => (dispatch) => {
  return axios
    .get(`${BASE_URL}/api/movies/${id}`)
    .then((res) => res.data)
    .then((movie) => dispatch(fetchMovie(movie)))
    .catch((err) => console.log(err));
};

// Reducer
const reducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_MOVIE:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
