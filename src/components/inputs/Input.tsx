import classNames from 'classnames'

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  const { className, ...rest } = props
  const inputClass = classNames(
    'w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded translation ease-in-out',
    className
  )
  return <input className={inputClass} {...rest} />
}

export default Input
