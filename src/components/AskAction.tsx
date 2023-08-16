import { Link } from 'react-router-dom'
import classNames from 'classnames'

export type AskActionProps = {
  className?: string
  ask: {
    to?: string
    actionName: string
    description: string
    onClick?: (e: React.MouseEvent<HTMLSpanElement>) => void
  }
  other: {
    to?: string
    actionName: string
    onClick?: (e: React.MouseEvent<HTMLSpanElement>) => void
  }
}

const AskAction: React.FC<AskActionProps> = (props: AskActionProps) => {
  const { className, ask, other } = props
  const askClass =
    'text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1 cursor-pointer'
  const otherClass =
    'text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer'
  return (
    <div
      className={classNames(
        'flex justify-between whitespace-nowrap text-sm sm:text-base',
        className
      )}
    >
      <p className="mb-6">
        {ask.description}
        {ask.to && (
          <Link to={ask.to} className={askClass}>
            {ask.actionName}
          </Link>
        )}
        {!ask.to && ask.onClick && (
          <span onClick={ask.onClick} className={askClass}>
            {ask.actionName}
          </span>
        )}
      </p>
      <p>
        {other.to && (
          <Link to={other.to} className={otherClass}>
            {other.actionName}
          </Link>
        )}
        {!other.to && other.onClick && (
          <span onClick={other.onClick} className={otherClass}>
            {other.actionName}
          </span>
        )}
      </p>
    </div>
  )
}

export default AskAction
