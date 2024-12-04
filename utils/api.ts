import axios from "axios";

export const api = axios.create({
    baseURL:'https://exam.elevateegy.com/api/v1/auth'
}) 