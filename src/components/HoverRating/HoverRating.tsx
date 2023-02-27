import { useState, ReactNode, FC, useContext } from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { RatingData } from '../../models';
import { MoviesContext } from '../../context';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';

const labels: { [index: string]: string } = {
    0.5: 'Very useless',
    1: 'Very useless+',
    1.5: 'Useless',
    2: 'Useless+',
    2.5: 'Very poor',
    3: 'Very poor+',
    3.5: 'Poor',
    4: 'Poor+',
    4.5: 'Ok',
    5: 'Ok+',
    5.5: 'Good',
    6: 'Good+',
    6.5: 'Very good',
    7: 'Very good+',
    7.5: 'Excellent',
    8: 'Excellent+',
    8.5: 'Very excellent',
    9: 'Very excellent+',
    9.5: 'Supreme',
    10: 'Supreme+',

}

function getLabelText(value: number) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

interface Props {
    children?: ReactNode;
    rating: number;
    handlerClick: (rating: number) => void;
}

export const HoverRating: FC<Props> = ({ rating, handlerClick }) => {

    const [value, setValue] = useState<number>(rating || 0);
    const [hover, setHover] = useState(-1);

    const handlerChange = (event, newValue) => {
        setValue(newValue);
        handlerClick(newValue);
    }

    const handlerChangeActive = (event, newHover) => {
        setHover(newHover);
    }

    return (
        <Box
            sx={{
                width: 400,
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                max={10}
                getLabelText={getLabelText}
                onChange={handlerChange}
                onChangeActive={handlerChangeActive}
                emptyIcon={<StarIcon style={{ opacity: 0.55, color: 'white' }} fontSize="inherit" />}
            />

            {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
        </Box>
    );
}