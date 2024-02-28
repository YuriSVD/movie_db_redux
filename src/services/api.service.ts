import axios from "axios";

import {accessToken, movieURL, posterURL} from "../configs";

const apiService = axios.create({baseURL: movieURL});

apiService.interceptors.request.use(request => {
    request.headers.Authorization = `Bearer ${accessToken}`;
    return request;
})

const apiPosterService = axios.create({baseURL: posterURL});

export {apiService, apiPosterService};