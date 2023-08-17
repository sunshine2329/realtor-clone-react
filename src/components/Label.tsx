import classNames from 'classnames'
import React from 'react'

type LabelProps = {
  className?: string
  title: string
}

const Label: React.FC<LabelProps> = (props: LabelProps) => {
  const { title, className } = props
  return <p className={classNames('text-lg mt-6 font-semibold', className)}>{title}</p>
}
export default Label
