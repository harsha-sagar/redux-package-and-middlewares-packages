const redux = require('redux');
const reduxThunk = require('redux-thunk');

const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const reduxThunkMiddleware = reduxThunk.default;

const rootReducer = require('./rootReducer');

const usersSideEffects = require('./users/thunkSideEffects')

const store = createStore(rootReducer, applyMiddleware(reduxThunkMiddleware));

console.log('initial state of the application: ', store.getState());

const listener = () => {
  console.log('update state of the application: ', store.getState());
}
const unsubscribe = store.subscribe(listener);

store.dispatch(usersSideEffects.getUsers());
