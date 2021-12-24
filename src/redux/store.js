
import {
  createStore,
  applyMiddleware,
  compose }            from 'redux';
import rootReducer        from './reducers/';
import  thunkMiddleware from 'redux-thunk';
// export default configureStore({
//   createStore(rootReducer,
// })
const configureStore = () => {
  return createStore (
      rootReducer
  );
};
export default configureStore