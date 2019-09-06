import * as React from 'react';
import { Props, State } from './typed';
import { connectModel } from '../../utils';
import './index.scss';

@connectModel(state => ({
  test: state.index.test,
}))
export default class Home extends React.Component<Props, State> {
  public static defaultProps = new Props();
  public state = new State();
  
  public render() {
    window.console.log(this.props.test);
    return <div>dd</div>;
  }
}
