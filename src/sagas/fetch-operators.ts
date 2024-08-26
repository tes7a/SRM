import axios from 'axios'
import { put, takeEvery } from 'redux-saga/effects'

import api from '../api'
import {
  fetchOperators as fetchOperatorsAction,
  fetchOperatorsSuccess,
  fetchOperatorsFailure,
} from '../reducers/operators'
import { type OperatorAddon, type Operator } from '../types'

function* fetchOperators() {
  try {
    const { data: operators }: { data: Operator[] } = yield api.getOperators()
    const { data: operatorsAddon }: { data: OperatorAddon[] } =
      yield api.getOperatorAddon()

    const mergedData = operators.map((operator) => {
      const match = operatorsAddon.find(
        (operatorAddon) => operator.id === operatorAddon.id,
      )

      return {
        ...operator,
        fieldName: match ? match.fieldName : '',
        text: match ? match.text : '',
      }
    })

    yield put(fetchOperatorsSuccess(mergedData))
  } catch (error) {
    if (axios.isAxiosError(error)) {
      yield put(fetchOperatorsFailure(error.message))
    }
    yield put(fetchOperatorsFailure(error))
  }
}

export default [takeEvery(fetchOperatorsAction.type, fetchOperators)]
