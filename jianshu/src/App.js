import React from 'react';
import './assets/less/App.less';

import Index from './components/pages/index'
import Detail from './components/pages/detail'

import {Switch,Route,Redirect} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/index' component={Index}></Route>
        <Route path='/detail' component={Detail}></Route>
        <Redirect to='/index'></Redirect>
      </Switch>
    </div>
  );
}

export default App;
