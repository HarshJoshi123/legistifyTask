
import './App.css';
import configureStore from './redux/store'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducers from './redux/reducers'
import Container from './components/container'
import ButtonAppBar from './components/navbar.js'
function App() {
  console.log(configureStore)
  const Store = createStore(reducers);
  return (
    <Provider store={Store}>
    <div className="App">
     <ButtonAppBar/>
     <Container />
    </div>
    </Provider>
  );
}

export default App;
