import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { MetaMaskProvider } from "metamask-react"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MetaMaskProvider>
      <App />
    </MetaMaskProvider>
  </React.StrictMode>,
)
