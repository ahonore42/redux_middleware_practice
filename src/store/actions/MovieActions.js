import { GetAllGenres, GetTrending, GetMoviesByGenre, GetSearchMovies, GetMovieDetails } from '../../services/MovieServices';
import { GET_ALL_MOVIE_GENRES, GET_ALL_MOVIES_BY_GENRE, GET_TRENDING_MOVIES, MOVIE_SEARCH, GET_SEARCH_MOVIES, GET_MOVIE_DETAILS, CLEAR_MOVIE } from '../types';

export const getAllGenres = () => async (dispatch) => {
    try {
      const genres = await GetAllGenres()
      // console.log(genres)
      dispatch({
        type: GET_ALL_MOVIE_GENRES,
        payload: genres
      })
    } catch(err) { throw err }
};

export const getTrending = () => async (dispatch) => {
    try {
      const trending = await GetTrending()
      // console.log(genres)
      dispatch({
        type: GET_TRENDING_MOVIES,
        payload: trending
      })
    } catch(err) { throw err }
};

export const updateSearch = (e) =>  (dispatch) => {
    dispatch({
        type: MOVIE_SEARCH,
        payload: e.target.value
    })
};

export const getAllMoviesByGenre = (id, page, name) => async (dispatch) => {
    try {
        const response = await GetMoviesByGenre(id, page, name)
        dispatch({
            type: GET_ALL_MOVIES_BY_GENRE,
            payload: {movies: response, name: name, page: page}
        })

    } catch(err) { throw err }
}

export const getSearchMovies = (query) => async (dispatch) => {
    try {
        const response = await GetSearchMovies(query)
        dispatch({
            type: GET_SEARCH_MOVIES,
            payload: response
        })
    } catch(err) { throw err }
}

export const getMovieDetails = (id) => async (dispatch) => {
    try {
        const response = await GetMovieDetails(id)
        dispatch({
            type: GET_MOVIE_DETAILS,
            payload: response
        })
    } catch(err) { throw err }
}

export const clearMovie = () => (dispatch) => dispatch({type: CLEAR_MOVIE, payload: null });
   
