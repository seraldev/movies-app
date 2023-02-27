import { axiosApi } from '../api';
import { Movie, Filters, MoviesResponse, RatingData, Status } from '../models';

const API_KEY: string = '8f781d70654b5a6f2fa69770d1d115a3';
const BASE_URL_IMAGE: string = 'https://www.themoviedb.org/t/p/w440_and_h660_face';

const getAll = async (): Promise<Movie[]> => {
    try {

        const { data } = await axiosApi.get<MoviesResponse>(`/movie/popular`, { params: { api_key: API_KEY } });

        return data.results.map((movie: Movie) => ({ ...movie, poster_path: `${BASE_URL_IMAGE}${movie.poster_path}` }));

    } catch (error) {
        return [];
    }
}

const searchMovies = async ({ filters }: { filters: Filters }): Promise<Movie[]> => {
    try {

        const { data } = await axiosApi.get<MoviesResponse>(`/search/movie`, { params: { api_key: API_KEY, query: filters.name } });

        return data.results.map((movie: Movie) => ({ ...movie, poster_path: `${BASE_URL_IMAGE}${movie.poster_path}` }));

    } catch (error) {
        return [];
    }
}

const setRatingMovie = async ({ rating }: { rating: RatingData }): Promise<Status> => {
    try {

        const { data } = await axiosApi.post<Status>(`/movie/${rating.movieId}/rating?api_key=${API_KEY}&guest_session_id=${rating.guestId}`, { value: rating.value });

        return data;

    } catch (error) {
        return null;
    }
}

export {
    getAll,
    searchMovies,
    setRatingMovie
}