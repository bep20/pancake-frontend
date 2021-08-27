import { useState, useEffect } from 'react'
import WrappedApp from '../WrappedApp'

function App() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return <WrappedApp />
}

export default App
