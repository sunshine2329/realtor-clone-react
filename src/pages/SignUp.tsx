import { useState } from 'react'
import { Input, PasswordInput } from '../components/inputs'
import { AuthSection } from '../components/auth'
import { Button } from '../components/buttons'

type FormData = {
  name: string
  email: string
  password: string
}
export default function SignUp() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', password: '' })
  const { name, email, password } = formData
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prevState => ({ ...prevState, [e.target.id]: e.target.value }))
  }
  const signUpForm = () => (
    <>
      <Input
        type="text"
        id="name"
        value={name}
        onChange={handleChange}
        placeholder="Email address"
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
    />
  )
}
