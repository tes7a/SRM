import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material'

import store from './store'
import theme from './assets/theme'
import Operators from './screens/OperatorsScreen'
import ToastProvider from './components/Toast'

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ToastProvider>
          <Operators />
        </ToastProvider>
      </ThemeProvider>
    </Provider>
  )
}

export default App
