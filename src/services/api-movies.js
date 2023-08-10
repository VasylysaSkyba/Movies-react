import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '2a69168ab09e504b4afd9410c733dd67',
        language: 'en-Us',
    },
});