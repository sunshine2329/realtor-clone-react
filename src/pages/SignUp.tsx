import { useState } from 'react'
import { Input, PasswordInput } from '../components/inputs'
import { AuthSection } from '../components/auth'
import { Button } from '../components/buttons'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { db } from '../firebase'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'

type FormData = {
  name: string
  email: string
  password: string
}
export default function SignUp() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', password: '' })
  const { name, email, password } = formData
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prevState => ({ ...prevState, [e.target.id]: e.target.value }))
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const auth = getAuth()
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)

      auth.currentUser &&
        updateProfile(auth.currentUser, {
          displayName: name
        })
      const user = userCredential.user
      const formDataCopy = {
        name: formData.name,
        email: formData.email,
        timestamp: serverTimestamp()
      }
      await setDoc(doc(db, 'users', user.uid), formDataCopy)
      toast.success('Sign up was successful')
      navigate('/')
    } catch (error) {
      toast.error('Something went wrong with the registration.')
    }
  }
  const signUpForm = () => (
    <>
      <Input
        type="text"
        id="name"
        value={name}
        onChange={handleChange}
        placeholder="Full Name"
        className="mb-6"
      />
      <Input
        type="email"
        id="email"
        value={email}
        onChange={handleChange}
        placeholder="Email address"
        className="mb-6"
      />
      <PasswordInput
        inputProps={{
          id: 'password',
          value: password,
          onChange: handleChange,
          placeholder: 'Password'
        }}
        className="mb-6"
      />
    </>
  )
  const signUpButton = () => <Button type="submit" title="Sign up" />
  return (
    <AuthSection
      title="Sign Up"
      changeInfo={{ description: 'have an account?', title: 'Sign in', to: '/sign-in' }}
      insteadInfo={{ to: '/forgot-password', title: 'Forgot password?' }}
      form={signUpForm()}
      actionButton={signUpButton()}
      onSubmit={handleSubmit}
    />
  )
}
