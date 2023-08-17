import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore'
import { FcGoogle } from 'react-icons/fc'
import { toast } from 'react-toastify'
import { db } from '../../firebase'
import { useNavigate } from 'react-router-dom'
import Button from './Button'

const OAuth = () => {
  const navigate = useNavigate()
  const handleWithGoogle = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    try {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      const user = result.user

      // check for the user
      const docRef = doc(db, 'users', user.uid)
      const docSnap = await getDoc(docRef)

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp()
        })
      }
      navigate('/')
    } catch (error) {
      toast.error('Could not authorize with Google.')
      console.log(error)
    }
  }
  return (
    <Button
      type="button"
      onClick={handleWithGoogle}
      color="secondary"
      icon={<FcGoogle className="text-2xl rounded-full mr-2 bg-white" />}
    >
      Continue with Google
    </Button>
  )
}

export default OAuth
