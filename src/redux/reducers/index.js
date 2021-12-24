import availablity from './availability.js'; //available lawyer data
import { combineReducers } from 'redux';
//import user        from './user';  

const rootReducer = combineReducers ({
	availability : availablity
});

export default rootReducer;