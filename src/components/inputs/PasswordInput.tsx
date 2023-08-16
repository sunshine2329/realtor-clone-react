import { Dispatch, SetStateAction, useState } from 'react'
import Input from './Input'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import classNames from 'classnames'

type ShowIconProps = {
  isShow: boolean
  onToggle: Dispatch<SetStateAction<boolean>>
}
const ShowIcon = (props: ShowIconProps) => {
  const { isShow, onToggle } = props
  const IconComponent = isShow ? AiFillEye : AiFillEyeInvisible
  return (
    <IconComponent
      className="absolute right-3 top-3 text-xl cursor-pointer"
      onClick={() => onToggle(prevState => !prevState)}
    />
  )
}

type PasswordInputProps = {
  className?: string
  inputProps: React.InputHTMLAttributes<HTMLInputElement>
}
const PasswordInput = (props: PasswordInputProps) => {
  const { className, inputProps } = props
  const [showPassword, setShowPassword] = useState<boolean>(false)
  return (
    <div className={classNames('relative', className)}>
      <Input {...inputProps} type={showPassword ? 'text' : 'password'} />
      <ShowIcon isShow={showPassword} onToggle={setShowPassword} />
    </div>
  )
}

export default PasswordInput
