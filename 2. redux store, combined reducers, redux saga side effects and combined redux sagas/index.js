const redux = require('redux');
const reduxSaga = require('redux-saga');

const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const createSagaMiddleware = reduxSaga.default;
const reduxSagaMiddleware = createSagaMiddleware();

const rootReducer = require('./rootReducer');
const rootSaga = require('./rootSaga');

const store = createStore(rootReducer, applyMiddleware(reduxSagaMiddleware));
reduxSagaMiddleware.run(rootSaga);

const { fetchUsers } = require('./users/actionCreators');

console.log('initial state of the application: ', store.getState());

const listener = () => {
  console.log('update state of the application: ', store.getState());
}
const unsubscribe = store.subscribe(listener);

store.dispatch(fetchUsers());
