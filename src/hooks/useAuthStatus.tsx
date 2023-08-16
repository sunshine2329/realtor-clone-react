import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'

const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false)
  const [checkingStatus, setCheckingStatus] = useState<boolean>(true)

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, user => {
      if (user) {
        setLoggedIn(true)
      } else {
        setLoggedIn(false)
      }
      setCheckingStatus(false)
    })
  }, [])
  return { loggedIn, checkingStatus }
}

export default useAuthStatus
