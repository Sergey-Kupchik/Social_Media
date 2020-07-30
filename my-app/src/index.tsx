import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state, {StatePropsType,addMessage, addPost, showTextInTextArea, subscriber} from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


const rerenderEntireTree =()=>{
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addMessage={addMessage} addPost={addPost} showTextInTextArea={showTextInTextArea}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

subscriber(rerenderEntireTree)
rerenderEntireTree();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
