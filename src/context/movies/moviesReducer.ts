import { MoviesState } from '.';
import { Movie, Filters, Status } from '../../models';

type MoviesActionType =
    | { type: '[Movies] Get-All', payload: Movie[] }
    | { type: '[Movies] Set-Movie-Selected', payload: Movie }
    | { type: '[Movies] Set-Filters', payload: Filters }
    | { type: '[Movies] Set-Rating-Movie', payload: { movieId: number; rating: number } }
    | { type: '[Movies] Set-My-List-Movie', payload: number }
    | { type: '[Movies] Set-Status', payload: Status }

export const moviesReducer = (state: MoviesState, action: MoviesActionType): MoviesState => {

    switch (action.type) {
        case '[Movies] Get-All':
            return {
                ...state,
                movies: [...action.payload]
            };

        case '[Movies] Set-Movie-Selected':
            return {
                ...state,
                movieSelected: action.payload
            };

        case '[Movies] Set-Filters':
            return {
                ...state,
                filters: action.payload
            };

        case '[Movies] Set-Rating-Movie':
            return {
                ...state,
                movies: state.movies.map((movie: Movie) => movie.id === action.payload.movieId ? { ...movie, rating: action.payload.rating } : movie),
                movieSelected: {
                    ...state.movieSelected,
                    rating: action.payload.rating
                }
            };

        case '[Movies] Set-My-List-Movie':
            const selectedMovie: Movie = state.movies.find((movie: Movie) => movie.id === action.payload);

            return {
                ...state,
                myListMovies: selectedMovie ? [...state.myListMovies, selectedMovie] : state.myListMovies
            };

        case '[Movies] Set-Status':
            return {
                ...state,
                status: action.payload
            };

        default:
            return state;
    }

};