import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import DevTools from './DevTools ';
import { Router, hashHistory } from 'react-router';
import routes from './routes';
import { createGlobalStyle  } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt, faInfo, faHeart } from '@fortawesome/free-solid-svg-icons';

library.add(faTrashAlt, faInfo, faHeart)

 const GlobalStyle = createGlobalStyle `
    * {
        outline: none;
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 0;
        outline: 0;
        background: #eee;
        height: 100vh;
    }
`

render(
    <Provider store={store}>
        <div>
            <Router history={hashHistory} routes={routes}/>
            <DevTools/>
            <GlobalStyle />
        </div>
    </Provider>,
    document.getElementById('root')
);