
import './App.css';
import configureStore from './redux/store'
import { Provider,useSelector } from 'react-redux'
import { createStore } from 'redux';
import reducers from './redux/reducers'
import Container from './components/container'
function App() {
  console.log(configureStore)
  const Store = createStore(reducers);
  return (
    <Provider store={Store}>
    <div className="App">
     <Container  />
    </div>
    </Provider>
  );
}

export default App;
