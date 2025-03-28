import ReactDOM from 'react-dom/client'
import App from './App'
import { StrictMode } from 'react'
import './global.css'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
