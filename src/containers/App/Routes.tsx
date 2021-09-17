import React, { Suspense } from 'react';
import {Route, Switch} from 'react-router-dom';

import { Main } from '../Main';
import { Swap } from '../Swap';

const Routes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact={true} path="/" component={Main} />
        <Route exact={true} path="/swap" component={Swap} />
      </Switch>
    </Suspense>
  )
}

export default Routes;