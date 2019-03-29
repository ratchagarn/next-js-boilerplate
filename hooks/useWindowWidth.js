import { useState, useEffect } from 'react'

function useWindowWidth(delay = 250) {
  const [windowWidth, setWindowWidth] = useState()

  useEffect(() => {
    const timer = null

    setWindowWidth(window.innerWidth)

    const handleOnWindowResize = () => {
      clearTimeout(timer)

      setTimeout(() => {
        setWindowWidth(window.innerWidth)
      }, delay)
    }

    window.addEventListener('resize', handleOnWindowResize)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', handleOnWindowResize)
    }
  }, [])

  return windowWidth
}

export default useWindowWidth
