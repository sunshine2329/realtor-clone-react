import classNames from 'classnames'

const TextArea = (props: React.InputHTMLAttributes<HTMLTextAreaElement>) => {
  const { className, ...rest } = props
  const inputClass = classNames(
    'w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded translation ease-in-out focus:text-gray-700 focus:bg-white',
    className
  )
  return <textarea className={inputClass} {...rest} />
}

export default TextArea
