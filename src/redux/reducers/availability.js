
//import {  }                 from 'redux/types';
import bookings from               '../../data.js'
//import { BookSlot }              from '../actions/availability' 
let BOOK_SLOT = 'BOOK_SLOT'
const initialState = {
	data: bookings
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case BOOK_SLOT: {
             let obj = state.data.find(lawyer=>lawyer.id == action.data.id)
			 obj.availablity=obj.availablity.filter(time=>time!=action.data.time);
			 if(obj.booked){
               obj.booked=[...obj.booked,action.data.time];
			 }
			 else{
            obj.booked=[action.data.time];
			 }
             let n = [...state.data.filter(lawyer=>lawyer.id != action.data.id),obj]
			 n = n.sort(
				function compare(a, b) {
					if (a.id < b.id) {
						return -1;
					} else if (a.id > b.id) {
						return 1;
					} else {
						return 0;
					}
				}
			 )
			console.log(n)
			return { data: n };
    
		}
		default:
			return state;
	}
}

export default reducer;