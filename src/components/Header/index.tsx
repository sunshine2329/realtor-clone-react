import { useNavigate } from 'react-router-dom'
import NavItem from './NavItem'
import { useAuthStatus } from '../../hooks'

const Header = () => {
  const navigate = useNavigate()
  const { loggedIn } = useAuthStatus()
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
            className="h-5 cursor-pointer"
            onClick={() => navigate('/')}
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <NavItem label="Home" route="/" />
            <NavItem label="Offers" route="/offers" />
            {!loggedIn && <NavItem label="Sign in" route="/sign-in" />}
            {loggedIn && <NavItem label="Profile" route="/profile" />}
          </ul>
        </div>
      </header>
    </div>
  )
}

export default Header
