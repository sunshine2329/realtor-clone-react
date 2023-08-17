import { useState } from 'react'
import { Input } from '../components/inputs'
import { getAuth, updateProfile } from 'firebase/auth'
import AskAction from '../components/AskAction'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/buttons'
import { toast } from 'react-toastify'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase'

type FormData = {
  name: string
  email: string
}

export default function Profile() {
  const auth = getAuth()
  const navigate = useNavigate()
  const [changeDetail, setChangeDetail] = useState<boolean>(false)
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
    setChangeDetail(prevState => !prevState)
  }
  const handleCancelChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setChangeDetail(prevState => !prevState)
    setFormData({
      name: auth.currentUser?.displayName ?? '',
      email: auth.currentUser?.email ?? ''
    })
  }
  const handleSignOut = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault()
    auth.signOut()
    navigate('/')
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('submit')
    try {
      if (auth.currentUser && auth.currentUser?.displayName !== name) {
        await updateProfile(auth.currentUser, { displayName: name })

        const docRef = doc(db, 'users', auth.currentUser.uid)
        await updateDoc(docRef, { name })
      }
      toast.success('Profile details updated.')
      setChangeDetail(false)
    } catch (error) {
      toast.error('Could not update the profile details')
      console.log(error)
    }
  }
  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col px-6">
        <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
        <div className="w-full md:w-[50%] mt-6">
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              id="name"
              value={name}
              disabled={!changeDetail}
              className={`mb-6 ${changeDetail && 'bg-red-200 focus:bg-red-200'}`}
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
            {changeDetail ? (
              <div className="flex space-x-2">
                <Button title="Apply Change" type="submit" />
                <Button title="Cancel" onClick={handleCancelChange} color="default" />
              </div>
            ) : (
              <AskAction
                ask={{
                  description: 'Do you want to change your name?',
                  onClick: handleEdit,
                  actionName: 'Edit'
                }}
                other={{ onClick: handleSignOut, actionName: 'Sign out' }}
              />
            )}
          </form>
        </div>
      </section>
    </>
  )
}
