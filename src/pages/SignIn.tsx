import { useState } from 'react'
import { Input, PasswordInput } from '../components/inputs'
import { AuthSection } from '../components/auth'
import { Button } from '../components/buttons'
import { toast } from 'react-toastify'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

type FormData = {
  email: string
  password: string
}
export default function SignIn() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<FormData>({ email: '', password: '' })
  const { email, password } = formData
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prevState => ({ ...prevState, [e.target.id]: e.target.value }))
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const auth = getAuth()
      const userCredentials = await signInWithEmailAndPassword(auth, email, password)
      if (userCredentials.user) {
        navigate('/')
      }
    } catch (error) {
      toast.error('Bad user credentials.')
      console.log(error)
    }
  }
  const signInForm = () => (
    <>
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
  const signInButton = () => <Button type="submit">Sign in</Button>
  return (
    <AuthSection
      title="Sign In"
      askProps={{
        ask: { description: "Don't you have an account?", actionName: 'Register', to: '/sign-up' },
        other: { to: '/forgot-password', actionName: 'Forgot password?' }
      }}
      form={signInForm()}
      actionButton={signInButton()}
      onSubmit={handleSubmit}
    />
  )
}
