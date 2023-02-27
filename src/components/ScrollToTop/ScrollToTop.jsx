import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * When the pathname changes, scroll to the top of the page.
 * @returns null
 */

export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollToTop
