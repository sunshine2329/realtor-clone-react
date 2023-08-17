import Label from '../Label'
import Button from './Button'

type RadioButtonGroupProps = {
  className?: string
  label?: string
  id: string
  value: string
  values: string[]
  onChange: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = (props: RadioButtonGroupProps) => {
  const { className, label, id, value, values, onChange } = props
  return (
    <div className={className}>
      {label && <Label title={label} />}
      <div className="flex space-x-3">
        {values.map((btnValue, index) => (
          <Button
            key={`${btnValue}-${index}`}
            type="button"
            id={id}
            value={btnValue}
            onClick={onChange}
            color={value === btnValue ? 'selected' : 'default'}
          >
            {btnValue}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default RadioButtonGroup
