import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { GiftApp } from './GiftApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GiftApp/>
  </StrictMode>,
)
