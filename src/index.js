import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserHistory} from 'history';
import {HashRouter} from "react-router-dom";

const history = createBrowserHistory();

ReactDOM.render(
    <React.StrictMode>
        {/* Use HashRouter instead of Router so that the app works when deployed to Github Pages */}
        <HashRouter history={history}>
            <App/>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();