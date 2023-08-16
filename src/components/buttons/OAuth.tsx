import { FcGoogle } from 'react-icons/fc'
// React.ChangeEvent<HTMLInputElement>
const OAuth = () => {
  const handleWithGoogle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
  }
  return (
    <button
      type="button"
      onClick={handleWithGoogle}
      className="flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 uppercase rounded text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out"
    >
      <FcGoogle className="text-2xl bg-white rounded-full mr-2" />
      Continue with Google
    </button>
  )
}

export default OAuth
