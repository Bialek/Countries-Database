import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import DevTools from './DevTools ';
import {Router, hashHistory} from 'react-router';
import './country.css'
import routes from './routes';
import { Root } from './styled/Root';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faTrashAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faTrashAlt)



render(
    <Provider store={store}>
        <Root>
            <Router history={hashHistory} routes={routes}/>
            <DevTools/>
        </Root>
    </Provider>,
    document.getElementById('root')
);