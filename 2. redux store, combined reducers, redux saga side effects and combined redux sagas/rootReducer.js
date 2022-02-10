const redux = require('redux')
const combineReducers = redux.combineReducers

const usersReducer = require('./users/reducer')

const rootReducer = combineReducers({
  usersState: usersReducer
})

module.exports = rootReducer
