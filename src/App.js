import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducers from './redux/reducers'
import Container from './components/container'
import ButtonAppBar from './components/navbar.js'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import storage from "redux-persist/lib/storage"
function App() {
  const persistConfig = {
    key: "root",
    storage
  }
  const persistedReducer = persistReducer(persistConfig, reducers)
  const Store = createStore(persistedReducer);
  const persistor = persistStore(Store);
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <ButtonAppBar />
          <Container />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
