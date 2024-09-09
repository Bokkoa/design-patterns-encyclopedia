import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ScrollProvider from './utils/ScrollContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ScrollProvider>
      <App />
    </ScrollProvider>
  </StrictMode>,
)
