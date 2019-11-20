import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'

import config from './router/router.config'
import RouterView from './router/routerView'

import store from './store/store'

function App() {
  return (
    <Provider store={store}>
     <BrowserRouter>
        <RouterView routes={config.routes} ></RouterView>
     </BrowserRouter>
    </Provider>
  );
}

export default App;
