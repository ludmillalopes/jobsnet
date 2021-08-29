import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import AddCurriculo from '../src/components/FormCurriculo/index';
import Home from '../src/components/Home/index';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/register' component={AddCurriculo} />
      </Switch>
    </BrowserRouter>
  )
}