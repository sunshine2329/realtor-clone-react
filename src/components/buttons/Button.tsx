import classNames from 'classnames'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { title, className, ...rest } = props
  const btnClass = classNames(
    'w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800',
    className
  )
  return (
    <button className={btnClass} {...rest}>
      {title}
    </button>
  )
}

export default Button
