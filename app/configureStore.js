import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router';
import reducers from './reducers';

const browserHistory = createBrowserHistory();

export default function configureStore(initialState = {}, history) {
  const middlewares = [
    thunk,
    routerMiddleware(history),
    routerMiddleware(browserHistory)
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
      })
      : compose;
  /* eslint-enable */

  const store = createStore(
    connectRouter(browserHistory)(reducers),
    initialState,
    composeEnhancers(...enhancers)
  );

  // Make reducers hot reloadable, see http://mxs.is/googmo
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(reducers)
    });
  }

  return store;
}
