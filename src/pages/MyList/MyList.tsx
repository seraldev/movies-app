import { useContext } from 'react';
import { List } from '../../components';
import { MoviesContext } from '../../context';

const MyList = () => {

    const { myListMovies } = useContext(MoviesContext);

    return (
        <List list={myListMovies} />
    )
}

export default MyList;
