import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter,HashRouter} from 'react-router-dom';
import {store} from './redux/storeRedux';
import { Provider } from 'react-redux'


ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
);


// const rerenderEntireTree = () => {
//     ReactDOM.render(
//         <React.StrictMode>
//             <HashRouter>
//                 <Provider store={store}>
//                     <App/>
//                 </Provider>
//             </HashRouter>
//         </React.StrictMode>,
//         document.getElementById('root')
//     );
// }
// store.subscribe(rerenderEntireTree);
// rerenderEntireTree();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();