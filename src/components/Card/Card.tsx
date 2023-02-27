import { FC, ReactNode, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MoviesContext } from '../../context';
import { Movie } from '../../models';
import { CardSection } from './components';

interface Props {
    children?: ReactNode;
    movie: Movie;
}

export const Card: FC<Props> = ({ movie }) => {

    const navigate = useNavigate();

    const { setMovieSelected } = useContext(MoviesContext);

    const { original_title, release_date, poster_path } = movie;

    const handleMovieSelected = () => {
        setMovieSelected({ movie });
        navigate('/movie-detail');
    }

    return (
        <article className="h-56 bg-section-secondary flex overflow-hidden rounded-lg m-3 shadow-md text-primary">
            <div className="w-full flex-2-1 cursor-pointer" onClick={handleMovieSelected}>
                <img
                    src={poster_path}
                    alt={original_title}
                    className="w-full h-full m-0 opacity-100 transition-opacity object-center-center object-cover"
                />
            </div>

            <div className="flex flex-col flex-3-1 relative p-3 text-primary">
                <CardSection>
                    <h2 className="text-2xl font-extrabold m-0 p-0 hover:text-primary-hover cursor-pointer"
                        onClick={handleMovieSelected}
                    >
                        {original_title}
                    </h2>
                </CardSection>

                <CardSection>
                    <p className="m-0 p-0 hover:text-primary-hover">
                        {release_date}
                    </p>
                </CardSection>
            </div>
        </article>
    )
}
