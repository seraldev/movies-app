import { FC, ReactNode, useEffect, useReducer } from 'react';
import { MoviesContext, moviesReducer } from '.';
import { Movie, Filters, RatingData, Status } from '../../models';
import { moviesService } from '../../services';

export interface MoviesState {
    movies: Movie[];
    movieSelected: Movie;
    myListMovies: Movie[];
    filters: Filters;
    status: Status;
}

const MOVIES_INITIAL_STATE: MoviesState = {
    movies: [],
    movieSelected: null,
    myListMovies: [],
    filters: null,
    status: null
}

interface UIProviderProps {
    children?: ReactNode;
}

export const MoviesProvider: FC<UIProviderProps> = ({ children }) => {

    const [state, dispatch] = useReducer(moviesReducer, MOVIES_INITIAL_STATE);

    const getAll = async () => {
        const movies: Movie[] = await moviesService.getAll();
        dispatch({ type: '[Movies] Get-All', payload: movies });
    }

    const setMovieSelected = ({ movie }: { movie: Movie }) => {
        dispatch({ type: '[Movies] Set-Movie-Selected', payload: movie });
    }

    const searchMovies = async ({ filters }: { filters: Filters }) => {
        const movies: Movie[] = await moviesService.searchMovies({ filters });
        dispatch({ type: '[Movies] Get-All', payload: movies });
    }

    const setRatingMovie = async ({ rating }: { rating: RatingData }) => {
        const status: Status = await moviesService.setRatingMovie({ rating });
        dispatch({ type: '[Movies] Set-Rating-Movie', payload: { movieId: rating.movieId, rating: rating.value } });
        dispatch({ type: '[Movies] Set-My-List-Movie', payload: rating.movieId });
        dispatch({ type: '[Movies] Set-Status', payload: status });
    }

    useEffect(() => {
        getAll();
    }, [])

    return (
        <MoviesContext.Provider value={{
            ...state,
            getAll,
            setMovieSelected,
            searchMovies,
            setRatingMovie
        }}>
            {children}
        </MoviesContext.Provider>
    )
};  