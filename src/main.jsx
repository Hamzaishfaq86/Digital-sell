
import '@shopify/polaris/build/esm/styles.css';

import { StrictMode } from 'react'
import { createRoot, } from 'react-dom/client'
import { AppProvider, } from '@shopify/polaris';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <AppProvider>
  <StrictMode>
    <App />
  </StrictMode>,
  </AppProvider>
)
