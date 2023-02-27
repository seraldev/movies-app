import { axiosApi } from '../api';
import { Guest } from '../models';

const API_KEY: string = '8f781d70654b5a6f2fa69770d1d115a3';

const getGuest = async (): Promise<Guest> => {
    try {

        const { data } = await axiosApi.get<Guest>(`/authentication/guest_session/new`, { params: { api_key: API_KEY } });

        return data

    } catch (error) {
        return null;
    }
}

export {
    getGuest
}