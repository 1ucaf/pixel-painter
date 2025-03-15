import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Providers } from './providers/index.tsx'

createRoot(document.getElementById('root')!).render(
  <Providers>
    <App />
  </Providers>,
)
