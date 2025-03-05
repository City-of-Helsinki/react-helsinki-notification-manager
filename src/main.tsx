
import React, { StrictMode } from 'react'
import App from './App.tsx'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1>My test app</h1>
    <App />
  </StrictMode>,
)