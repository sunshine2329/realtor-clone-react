import classNames from 'classnames'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string
  color?: 'primary' | 'secondary' | 'default'
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  title,
  className,
  color = 'primary',
  ...rest
}: ButtonProps) => {
  const btnClass =
    'w-full  px-7 py-3 text-sm font-medium uppercase rounded shadow-md  transition duration-150 ease-in-out'

  const primaryClass = 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800'
  const secondaryClass = 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800'
  const defaultClass = 'bg-gray-100 text-black hover:bg-gray-200 active:bg-gray-300'
  return (
    <button
      type={type}
      className={classNames(
        btnClass,
        { [primaryClass]: color === 'primary' },
        { [secondaryClass]: color === 'secondary' },
        { [defaultClass]: color === 'default' },
        className
      )}
      {...rest}
    >
      {title}
    </button>
  )
}

export default Button
