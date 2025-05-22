import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1>My test app</h1>
    <App />
  </StrictMode>,
);
