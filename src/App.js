import { BrowserRouter } from 'react-router-dom';
import './App.css';
import "./css/product.css"
import "./css/mainMenu.css"

import Main from './components/MainComponent';
import { Provider } from 'react-redux';
import {ConfigureStore} from "./redux/configureStore"
function App() {
  const store = ConfigureStore()
  return (
    <Provider store={store}>
      <BrowserRouter>
         <Main/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
