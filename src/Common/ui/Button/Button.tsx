import './Button.sass'
import BUTTON_VARIANTS from './ButtonVariants.enum'

export default function Button({ className, title, onClick, variant = BUTTON_VARIANTS.PRIMARY, ...props }: ButtonProps) {
  return (
    <button className={`button button--${variant} ${className}`}
      onClick={() => onClick()}
      {...props}
    >
      <p className='button__title'>{title}</p>
    </button>
  )
}

type ButtonProps = {
  className?: string,
  title: string,
  onClick: () => void 
  variant?: BUTTON_VARIANTS,
}
