import axios from 'axios';

const OPEN_WEATHER_KEY = 'cf08a2efa91fc578a815f915f2ff6187' // don't steal my key D:
const OPEN_WEATHER_URL = `http://api.openweathermap.org/data/2.5/forecast?`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
    const url= `${OPEN_WEATHER_URL}q=${city},us&appid=${OPEN_WEATHER_KEY}`
    const request = axios.get(url)

    
    return {        // action creators return actions!
        type: FETCH_WEATHER,
        payload: {
            promise: request
        }
    }
}