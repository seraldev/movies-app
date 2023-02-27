import { useContext, useEffect } from 'react';
import { FiltersList, List } from '../../components';
import { MoviesContext } from '../../context';

const Home = () => {

    const { movies, setMovieSelected } = useContext(MoviesContext);

    useEffect(() => {
        setMovieSelected({ movie: null });
    }, [])

    return (
        <>
            <FiltersList />
            <List list={movies} />
        </>
    )
}

export default Home;