import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config()

const baseURLBooks = axios.create({
    baseURL: process.env.BASEURL_BOOKS
});

const baseURLCovers = axios.create({
    baseURL: process.env.BASEURL_COVERS
});

export default { baseURLBooks, baseURLCovers }
