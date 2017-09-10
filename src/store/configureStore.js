import {applyMiddleware, createStore, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const configureStore = (preloadedState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(sagaMiddleware),
      window && window.devToolsExtension ?
        window.devToolsExtension() :
        (passThrough) => passThrough
    )
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
