import axios from 'axios'


const BASE_URL = "http://192.168.1.118:1337/api" 
// const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL
const API_KEY = process.env.EXPO_PUBLIC_API_KEY


const AxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Authorization': "Bearer " + API_KEY
    }
})


const getSlider = () => AxiosInstance.get("/sliders?populate=*")

const getCategories = () => AxiosInstance.get("/categories?populate=*")

const getPremiumHospital = () => AxiosInstance.get('hospitals?filters[Premium][$eq]=true&populate=*')

const getHospitalByCategory = (category) => AxiosInstance.get(`/hospitals?filters[categories][Name][$in]=${category}&populate=*`);


const getDoctorsByCategory = (category) => AxiosInstance.get(`/doctors?filters[categories][Name][$in]=${category}&populate=*`);


const createAppointement = (data) => AxiosInstance.post('/appointements', data)

const getUserAppointements = (email) => AxiosInstance.get('/appointements?filters[email][$eq]=' + email + "&populate=*")


export default {
    getSlider,
    getCategories,
    getPremiumHospital,
    getHospitalByCategory,
    getDoctorsByCategory,
    createAppointement,
    getUserAppointements

}