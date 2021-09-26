import React, { Suspense } from 'react';
import {Route, Switch} from 'react-router-dom';
import { Main } from '../Main';

const Swap = React.lazy(() => import("../Swap"));
const Crafting = React.lazy(() => import("../Crafting"));

const Routes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact={true} path="/" component={Main} />
        <Route exact={true} path="/swap" component={Swap} />
        <Route exact={true} path="/crafting" component={Crafting} />
      </Switch>
    </Suspense>
  )
}

export default Routes;