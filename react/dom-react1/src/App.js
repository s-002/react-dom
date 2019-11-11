import React from 'react';
import Routers from './router/router'
import {Provider} from 'react-redux'
import store from './store/store'
function App() {
  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  );
}

export default App;
