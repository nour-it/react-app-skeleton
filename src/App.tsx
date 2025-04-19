import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import {redux} from './store'
import AppRoutes from './routes'
import './index.css'

function App() {
  return (
    <Provider store={redux}>
      <BrowserRouter>
          <AppRoutes />
      </BrowserRouter>
    </Provider>
  )
}

export default App
