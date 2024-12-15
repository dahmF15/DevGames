import axios from 'axios'

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_API_URL;


//create default ver of axios
const apiClient = axios.create({
    baseURL: BASE_URL,
    params: {
        key: API_KEY,
    },
})
export const FetchGames = async() => {
    try {
       const { data } = await apiClient.get('/games');
        return data;
        } catch (err){
            const errMsg = err.response?.data?.message || 'Faild to fetch games';
            throw new Error(errMsg);
        };
};