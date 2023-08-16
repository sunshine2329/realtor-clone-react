import { useState } from 'react'
import { Input } from '../components/inputs'
import { getAuth } from 'firebase/auth'
import AskAction from '../components/AskAction'
import { useNavigate } from 'react-router-dom'

type FormData = {
  name: string
  email: string
}

export default function Profile() {
  const auth = getAuth()
  const navigate = useNavigate()
  const [formData, setFormData] = useState<FormData>({
    name: auth.currentUser?.displayName ?? '',
    email: auth.currentUser?.email ?? ''
  })
  const { name, email } = formData

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prevState => ({ ...prevState, [e.target.id]: e.target.value }))
  }

  const handleEdit = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault()
  }
  const handleSignOut = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault()
    auth.signOut()
    navigate('/')
  }
  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col px-6">
        <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
        <div className="w-full md:w-[50%] mt-6">
          <form>
            <Input
              type="text"
              id="name"
              value={name}
              disabled
              className="mb-6"
              onChange={handleChange}
            />
            <Input
              type="email"
              id="email"
              value={email}
              disabled
              className="mb-6"
              onChange={handleChange}
            />
            <AskAction
              ask={{
                description: 'Do you want to change your name?',
                onClick: handleEdit,
                actionName: 'Edit'
              }}
              other={{ onClick: handleSignOut, actionName: 'Sign out' }}
            />
          </form>
        </div>
      </section>
    </>
  )
}
