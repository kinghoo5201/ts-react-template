import * as React from 'react';
import { Provider } from 'react-redux';
import Router from './router';
import { store } from './utils';
import './App.scss';

export default class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
