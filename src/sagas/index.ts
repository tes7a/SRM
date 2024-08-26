import { all } from 'redux-saga/effects'
import fetchOperators from './fetch-operators'

export default function* rootSaga() {
  yield all([...fetchOperators])
}
