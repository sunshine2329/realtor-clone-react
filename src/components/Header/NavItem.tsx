import { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router'

type Props = {
  label: string
  route: string
}

const NavItem = (props: Props) => {
  const { label, route } = props
  const location = useLocation()
  const navigate = useNavigate()
  const isActive = useMemo(() => route === location.pathname, [route, location])
  return (
    <li
      className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px] ${
        isActive ? 'border-b-red-500 text-black' : 'border-b-transparent text-gray-400'
      }`}
      onClick={() => navigate(route)}
    >
      {label}
    </li>
  )
}

export default NavItem
