const { all, fork } = require("redux-saga/effects")

const UserSaga = require("./users/sagaSideEffects")

function* rootSaga() {
  yield all([fork(UserSaga)]);
}

module.exports = rootSaga
