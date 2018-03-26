import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-1327f.firebaseio.com/'
});

export default instance;
