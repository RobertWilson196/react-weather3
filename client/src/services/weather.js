import axios from 'axios';

export const weather = (latitude, longitude) => {
    const url = `./forecast/${latitude},${longitude}`;
    return axios.get(url);
}