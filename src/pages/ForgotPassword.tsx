import { useState } from 'react'
import { Input } from '../components/inputs'
import { AuthSection } from '../components/auth'
import { Button } from '../components/buttons'
import { toast } from 'react-toastify'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'

export default function ForgotPassword() {
  const [email, setEmail] = useState<string>('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth, email)
      toast.success('Email was sent.')
    } catch (error) {
      toast.error('Could not send reset password.')
      console.log(error)
    }
  }
  const forgotPasswordForm = () => (
    <Input
      type="email"
      id="email"
      value={email}
      onChange={handleChange}
      placeholder="Email address"
      className="mb-6"
    />
  )
  const forgotPasswordButton = () => <Button type="submit" title="Send reset password" />
  return (
    <AuthSection
      title="Forgot Password"
      askProps={{
        ask: { description: "Don't you have an account?", actionName: 'Register', to: '/sign-up' },
        other: { to: '/sign-in', actionName: 'Sign in instead' }
      }}
      form={forgotPasswordForm()}
      actionButton={forgotPasswordButton()}
      onSubmit={handleSubmit}
    />
  )
}
