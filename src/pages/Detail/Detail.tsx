import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert, Badge, Snackbar } from '@mui/material';
import { HoverRating } from '../../components';
import { MoviesContext } from '../../context';
import { RatingData } from '../../models';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';

const Detail = () => {

    const navigate = useNavigate();

    const { guest } = useSelector((state: RootState) => state.guest);
    const { guest_session_id } = guest;
    
    const { movieSelected, setRatingMovie } = useContext(MoviesContext);

    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleCloseSnackbar = () => setOpenSnackbar(false);

    const handlerClick = (value: number) => {
        const rating: RatingData = { movieId: movieSelected.id, value, guestId: guest_session_id };

        setRatingMovie({ rating });
        setOpenSnackbar(true);
    };

    useEffect(() => {
        if (!movieSelected) navigate('/');
    }, [movieSelected])

    return (
        movieSelected &&
        <>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={openSnackbar}
                autoHideDuration={2000}
                onClose={handleCloseSnackbar}
            >
                <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                    Correctly scored movie!!
                </Alert>
            </Snackbar>

            <section className="bg-section-primary min-h-main-section py-8 flex flex-row gap-16 text-primary px-5">

                <aside>
                    {
                        movieSelected.rating ?
                            <Badge badgeContent={movieSelected.rating} color="success">
                                <img src={movieSelected.poster_path} alt={movieSelected.original_title} />
                            </Badge>
                            : <img src={movieSelected.poster_path} alt={movieSelected.original_title} />
                    }
                </aside>

                <article>
                    <div className="flex flex-row items-baseline gap-8">
                        <h2 className="text-2xl font-extrabold">
                            {movieSelected.original_title}
                        </h2>
                        <p>{movieSelected.release_date}</p>
                    </div>

                    <p>{movieSelected.overview}</p>

                    <div className="flex flex-row gap-4 mb-4">
                        <p>Language: {movieSelected.original_language}</p>
                        <p>Count: {movieSelected.vote_count}</p>
                        <p>Average: {movieSelected.vote_average}</p>
                        <p>Popularity: {movieSelected.popularity}</p>
                    </div>

                    <div className="flex flex-col">
                        <h3 className="text-lg">Rating</h3>
                        <HoverRating rating={movieSelected.rating} handlerClick={handlerClick} />
                    </div>
                </article>
            </section>
        </>

    )
}

export default Detail;