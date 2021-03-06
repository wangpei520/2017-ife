import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Link, browserHistory } from 'react-router'
import store from './config/store'
import App from './container/App'
import Player from './container/Player'
import MyComponent from './container/MyComponent'
ReactDOM.render((
    <Provider store={store}>
      {/*<MyComponent></MyComponent>*/}
        <Router history={browserHistory}>
            <Route path="/" component={App}></Route>
            <Route path="player/:id" component={Player} />
        </Router>
    </Provider>
    ), document.getElementById('root')
);