import FETCH_WEATHER from '../actions/index'

export default function(state = [], action){
    switch (action.type) {
    case 'FETCH_WEATHER_FULFILLED':
        return [ action.payload.data, ...state ] // es6 array concatenation!
    }
    
    return state;
}