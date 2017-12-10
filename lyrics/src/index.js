import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
// import SearchNav from './containers/search_nav';
import Lyrics from './containers/lyrics';
import SongDetails from './containers/song_details';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <Switch>
                <Route path="/song/:track&:artist&:id" component={SongDetails} />
                <Route exact path="/" component={Lyrics} />
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);
registerServiceWorker();
