import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Index from '../pages/Index';

export default class PrimaryRouter extends React.Component<any, any> {
  public render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Index} />
        </Switch>
      </HashRouter>
    );
  }
}
