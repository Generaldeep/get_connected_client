import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import App from './App';
import Login from './components/GoogleAuth/GoogleAuth';
import Logout from './components/GoogleAuth/Logout';
import Home from './views/Home/index';
import Profile from './views/Profile/index';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunkMiddleware, promiseMiddleware()));


ReactDOM.render(
  <Provider store={store}>
   <div className='container'>
    <BrowserRouter>
     <div>
      <Route  path='/' component={App} />
       <Route exact path='/Home' component={Home}/>
       <Route exact path='/Profile' component={Profile}/>
       <Route path="/Login" component={Login} />
       <Route path="/Logout" component={Logout} />
     </div>
    </BrowserRouter>
   </div>

  </Provider>,
  document.querySelector('#root')
 );
