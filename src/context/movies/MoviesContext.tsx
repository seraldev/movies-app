import { createContext } from 'react';
import { Movie, Filters, RatingData } from '../../models';

interface ContextProps {
    movies: Movie[];
    movieSelected:Movie;
    myListMovies: Movie[];
    filters: Filters;
    getAll: () => Promise<void>;
    setMovieSelected: ({ movie }: { movie: Movie }) => void;
    searchMovies: ({ filters }: { filters: Filters }) => Promise<void>;
    setRatingMovie: ({ rating }: { rating: RatingData }) => Promise<void>;
}

export const MoviesContext = createContext({} as ContextProps);