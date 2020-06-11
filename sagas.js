import { put, takeEvery, all } from "redux-saga/effects";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* helloSaga() {
  console.log("Hello world!");
}

function* incrementAsync() {
  yield delay(1000);
  yield put({ type: "INCREMENT", payload: 2 });
}

function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync)
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}