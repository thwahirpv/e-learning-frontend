import axios from "axios";
import { BASE_URL, USER_BASE_URL, TUTOR_BASE_URL, ADMIN_BASE_URL } from "../constants/constants";

export const baseAPI = axios.create({
        baseURL: BASE_URL,
        withCredentials: true
})
export const userAPI = axios.create({
        baseURL: USER_BASE_URL,
        withCredentials: true
})
export const tutorAPI = axios.create({
        baseURL: TUTOR_BASE_URL,
        withCredentials: true
})
export const adminAPI = axios.create({
        baseURL: ADMIN_BASE_URL,
        withCredentials: true
})

