import classNames from 'classnames'
import { IconType } from 'react-icons'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: React.ReactElement<IconType>
  color?: 'primary' | 'secondary' | 'default' | 'selected'
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  icon,
  className,
  color = 'primary',
  children,
  ...rest
}: ButtonProps) => {
  const btnClass =
    'flex items-center justify-center w-full px-7 py-3 text-sm font-medium uppercase rounded transition duration-150 ease-in-out shadow-md hover:shadow-lg active:shadow-lg'

  const primaryClass = 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800'
  const secondaryClass = 'bg-red-700 text-white hover:bg-red-800 active:bg-red-900'
  const defaultClass =
    'bg-white text-black hover:bg-gray-50 active:bg-gray-100 shadow hover:shadow-md active:shadow-md'
  const selectedClass = 'bg-slate-600 hover:bg-slate-700 active:bg-slate-800 text-white '
  return (
    <button
      type={type}
      className={classNames(
        btnClass,
        { [primaryClass]: color === 'primary' },
        { [secondaryClass]: color === 'secondary' },
        { [defaultClass]: color === 'default' },
        { [selectedClass]: color === 'selected' },
        className
      )}
      {...rest}
    >
      {icon}
      {children}
    </button>
  )
}

export default Button
