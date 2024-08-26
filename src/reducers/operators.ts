import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { type SRMOperatorInfo } from '../types'

export interface InitialStateType {
  entries: undefined | SRMOperatorInfo[]
  error: string | null
  loading: boolean
}

const initialState: InitialStateType = {
  entries: undefined,
  error: undefined,
  loading: true,
}

const fetchOperatorsReducer = createSlice({
  name: 'fetch-operators',
  initialState,
  reducers: {
    fetchOperators: (state) => {
      state.error = undefined
    },
    fetchOperatorsSuccess: (
      state,
      action: PayloadAction<SRMOperatorInfo[]>,
    ) => {
      state.entries = action.payload
      state.loading = false
    },
    fetchOperatorsFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload
      state.loading = false
    },
  },
})

export const { fetchOperators, fetchOperatorsFailure, fetchOperatorsSuccess } =
  fetchOperatorsReducer.actions

export default fetchOperatorsReducer.reducer
