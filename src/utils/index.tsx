/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { connect } from 'react-redux';
import { init } from '@rematch/core';
import * as _ from 'lodash';

export const isDev = window.location.hostname === 'localhost';

/**
 * @description:用以connect组件和model的装饰器函数
 */
export const connectModel = (
  stateFunc?: def.models.IConnectFn,
  dispatchFunc?: def.models.IConnectFn,
): any => {
  const mapState: def.models.IConnectFn = stateFunc || ((state: any) => ({}));
  const mapDispatch: def.models.IConnectFn =
    dispatchFunc || ((dispatch: any) => ({}));
  return (WrapperComponent: any) => {
    class App extends React.Component<any, any> {
      public static displayName = `@connect${
        WrapperComponent.displayName ? `(${WrapperComponent.displayName})` : ''
      }`;

      public render() {
        return <WrapperComponent {...this.props} />;
      }
    }
    const connected: any = connect(
      mapState,
      mapDispatch,
    )(App);

    return connected;
  };
};

/**
 * @description:获取store
 */
export const store: any = (() => {
  const context: any = (require as any).context('../models', true, /\.ts$/);
  const keys: string[] = context.keys();
  let models: any = {};
  keys.forEach((key: string) => {
    const name: string = key.replace(/^\.\//, '').replace(/\.ts$/, '');
    const mdl: any = context(key);
    mdl[name] = _.cloneDeep(mdl.default);
    delete mdl.default;
    models = {
      ...models,
      ...mdl,
    };
  });

  const rStore = init({
    models,
  });

  return rStore;
})();
