import './Detail.sass'

export default function Detail({ className, label, value }: DetailProps) {
  return (
    <div className={`detail ${className}`}>
      <p className="detail__label">{label}</p>
      <p className="detail__value">{value}</p>
    </div>
  )
}

type DetailProps = {
  className?: string,
  label: string,
  value: string | number,
}
