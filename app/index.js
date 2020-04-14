import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import CustomerList from './components/customers/CustomerList';

import './index.less';

const App = () => {
  document.title = 'hasura-challenge';

  return (
    <div className = 'app-container'>
      <Switch>
        <Redirect exact from='/' to='/customer' />
        {/* <Route exact path='/' component={CustomerList} /> */}
        <Route exact path='/customer' component={CustomerList} />
      </Switch>
      
    </div>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root'),
);