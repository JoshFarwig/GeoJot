

import { ThemeProvider } from '@/components/theme-provider' 
import { LandingPage } from '@/components/pages/LandingPage'
import './App.css'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <LandingPage />
    </ThemeProvider>
  )
}

export default App
