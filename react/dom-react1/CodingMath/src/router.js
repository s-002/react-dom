import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './views/IndexPage';
import AntdPage from './views/AntdPage'
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={AntdPage} />
        <Route path='/home' exact component={IndexPage}/>
        
      </Switch>
    </Router>
  );
}

export default RouterConfig;
