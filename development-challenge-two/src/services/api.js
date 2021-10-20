import axios from 'axios';

const baseURL = process.env.REACT_APP_BACKEND_URL;
// const PostBaseURL = process.env.REACT_APP_BACKEND_POST_URL;

export const api = axios.create({
    baseURL: baseURL,
});

// export const apiPOST = axios.create({
//     baseURL: PostBaseURL,
// });
