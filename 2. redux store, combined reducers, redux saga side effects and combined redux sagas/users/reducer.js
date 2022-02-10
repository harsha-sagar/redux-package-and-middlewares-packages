const { FETCH_USERS, USERS_FETCH_PROGRESS, USERS_FETCH_SUCCESS, USERS_FETCH_FAILURE } = require('./actionConstants')

const initialUsersState = { loading: false, users: [], error: null }

const usersReducer = (state = initialUsersState, action) => {
	let users = []
  switch(action.type) {
    case FETCH_USERS:
      return { ...state, loading: false, users: [], error: null }
		case USERS_FETCH_PROGRESS:
			return { ...state, loading: true, users: [], error: null }
		case USERS_FETCH_SUCCESS:
			users = action.payload
			return { ...state, loading: false, users: users, error: null }
		case USERS_FETCH_FAILURE:
			return { ...state, loading: false, users: [], error: action.payload }

		default:
      return state
  }
}

module.exports = usersReducer
