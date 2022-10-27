import axios from "axios";
const API_KEY = '4c1081d23ec0123139ed5dd8633262bc'

export const apiTrendMovies = async (signal) => {
    const TREND_URL = 'https://api.themoviedb.org/3/trending/movie/day';
    const options = {
        params: {
            api_key: API_KEY,
            signal: signal
        }
    }

    const responce = await axios.get(TREND_URL, options)
    return await responce.data
}

export const apiByNameMovies = async (movie, signal) => {
    const SEARCH_URL = `https://api.themoviedb.org/3/search/movie`
    const options = {
        params: {
            api_key: API_KEY,
            query: movie ,
            signal: signal
        }
    }    
    const responce = await axios.get(SEARCH_URL, options)   
    return await responce.data
}

export const apiById = async (id, controller) => {
    

    const SEARCH_URL = `https://api.themoviedb.org/3/movie/${id}`
    const options = {
        params: {
            api_key: API_KEY,
            signal: controller.signal
        }
    }    
    const responce = await axios.get(SEARCH_URL, options)   
    return await responce.data
  
}

