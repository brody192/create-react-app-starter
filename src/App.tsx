import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import Auth from './components/Auth';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Auth />
    </Provider>
  );
}

export default App;