import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import App from './App';
import GetJobs from './components/Home/GetJobs'
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunkMiddleware, promiseMiddleware()));


ReactDOM.render(
  <Provider store={store}>
   <div className='container'>
    <BrowserRouter>
     <div>
      <Route exact path='/' component={App} />
       <Route exact path='/jobs' component={GetJobs}/>
     </div>
    </BrowserRouter>
   </div>

  </Provider>,
  document.querySelector('#root')
 );
