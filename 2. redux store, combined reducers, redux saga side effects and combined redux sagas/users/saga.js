const fetch = require('cross-fetch')
const axios = require('axios');
const { call, put, takeLatest } = require('redux-saga/effects');

const { FETCH_USERS } = require('./actionConstants')
const { fetchUsersProgress, fetchUsersFailure, fetchUsersSuccess } = require('./actionCreators');

// const getUsers = (arguments) => {
// 	return (dispatch, getState) => {
// 		dispatch(fetchUsers());
// 		dispatch(fetchUsersProgress());

// 		fetch('https://jsonplaceholder.typicode.com/posts')
// 			.then((response) => response.json())
// 			.then((users) => dispatch(fetchUsersSuccess(users)))
// 			.catch((error) => dispatch(fetchUsersFailure(error.message)))
// 	}
// };

// module.exports = {
// 	getUsers: getUsers
// }

// watcher
function* userSaga() {
  yield takeLatest(FETCH_USERS, getUsers);
}

const apiCallFn = () => axios.get('https://jsonplaceholder.typicode.com/users')

// worker
function* getUsers(action) {
	// incase any arguments supplied, to be consumed as part of action payload

	yield put(fetchUsersProgress());

  try {
    const result = yield call(apiCallFn)
		// when using redux-saga as side effects middleware, it is recommended to make use of axios client for making calls

    const users = result.data;

    yield put(fetchUsersSuccess(users));   
  } catch(e) {
    yield put(fetchUsersFailure(e.message));   
  }
};

module.exports = userSaga
