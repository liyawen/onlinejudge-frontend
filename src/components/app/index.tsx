import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Store } from 'redux';
import { History } from 'history';
import { Provider } from 'react-redux';
import AppRouter from '$components/router';
import Layout from '$components/layout';

const { Component } = React;

interface AppProps {
  store: Store;
  history: History;
}

export default class App extends Component<AppProps> {
  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <AppRouter history={history}>
          <Layout />
        </AppRouter>
      </Provider>
    );
  }
}
