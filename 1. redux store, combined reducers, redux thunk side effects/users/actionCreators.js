const { FETCH_USERS, USERS_FETCH_PROGRESS, USERS_FETCH_SUCCESS, USERS_FETCH_FAILURE } = require('./actionConstants')

const fetchUsers = () => {
	return {
		type: FETCH_USERS
	}
}

// actions raised from redux-thunk middleware
const fetchUsersProgress = () => {
	return {
		type: USERS_FETCH_PROGRESS
	}
}
const fetchUsersSuccess = (users) => {
	return {
		type: USERS_FETCH_SUCCESS,
		payload: users
	}
}
const fetchUsersFailure = (error) => {
	return {
		type: USERS_FETCH_FAILURE,
		payload: error
	}
}

module.exports = {
	fetchUsers: fetchUsers,
	fetchUsersProgress: fetchUsersProgress,
	fetchUsersSuccess: fetchUsersSuccess,
	fetchUsersFailure: fetchUsersFailure
}
