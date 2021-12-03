import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Detail from './detail';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import configureStore from "./store/configureStore";
import { Route, Routes, BrowserRouter as Router} from 'react-router-dom'

const store = configureStore();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route exact path="/" element={<App/>}/>
                    <Route path="/detail" element={<Detail/>} />
                </Routes>
            </Router>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
