import { useState } from 'react'
import { Input, PasswordInput } from '../components/inputs'
import { AuthSection } from '../components/auth'
import { Button } from '../components/buttons'

type FormData = {
  email: string
  password: string
}
export default function SignIn() {
  const [formData, setFormData] = useState<FormData>({ email: '', password: '' })
  const { email, password } = formData
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prevState => ({ ...prevState, [e.target.id]: e.target.value }))
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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
  const signInButton = () => <Button type="submit" title="Sign in" />
  return (
    <AuthSection
      title="Sign In"
      changeInfo={{ description: "Don't you have an account?", title: 'Register', to: '/sign-up' }}
      insteadInfo={{ to: '/forgot-password', title: 'Forgot password?' }}
      form={signInForm()}
      actionButton={signInButton()}
      onSubmit={handleSubmit}
    />
  )
}
