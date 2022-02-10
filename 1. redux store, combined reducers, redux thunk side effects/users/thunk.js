const fetch = require('cross-fetch')

const { fetchUsers, fetchUsersProgress, fetchUsersFailure, fetchUsersSuccess } = require('./actionCreators');

// this outer function getUsers is required inorder to avail dynamic arguments passed wherever thunk triggered
const getUsers = (arguments) => {
	return (dispatch, getState) => {
		dispatch(fetchUsers());
		dispatch(fetchUsersProgress());

		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => dispatch(fetchUsersSuccess(users)))
			.catch((error) => dispatch(fetchUsersFailure(error.message)))
	}
};

module.exports = {
	getUsers: getUsers
}
