import { AppRouter } from './router';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { guestService } from './services';
import { setGuest } from './redux';
import { Guest } from './models';

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        guestService.getGuest().then((guest: Guest) => {
            dispatch(setGuest(guest));
        })
    }, [])

    return (
        <AppRouter />
    )
}

export default App;
