import { Navigate } from 'react-router'
import { useAuthStatus } from '../../hooks'

type PrivateRouteProps = {
  component: React.ReactElement
}
const PrivateRoute = (props: PrivateRouteProps) => {
  const { component } = props
  const { loggedIn, checkingStatus } = useAuthStatus()
  if (checkingStatus) {
    return <h3>Loading...</h3>
  }

  return loggedIn ? component : <Navigate to="/sign-in" />
}

export default PrivateRoute
