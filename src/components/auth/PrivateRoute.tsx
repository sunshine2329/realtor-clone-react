import { Navigate } from 'react-router'
import { useAuthStatus } from '../../hooks'
import Spinner from '../Spinner'

type PrivateRouteProps = {
  component: React.ReactElement
}
const PrivateRoute = (props: PrivateRouteProps) => {
  const { component } = props
  const { loggedIn, checkingStatus } = useAuthStatus()
  if (checkingStatus) {
    return <Spinner />
  }

  return loggedIn ? component : <Navigate to="/sign-in" />
}

export default PrivateRoute
