import axios from 'axios'

import { type Operator, type OperatorAddon } from '../types'

const instance = axios.create({
  baseURL: 'https://66a7f07b53c13f22a3d17fb1.mockapi.io/api',
})

export default {
  getOperators() {
    return instance.get<Operator[]>('/operator')
  },

  getOperatorAddon() {
    return instance.get<OperatorAddon[]>('/operatorAddon')
  },
}
