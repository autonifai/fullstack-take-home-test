import { ReactNode } from 'react'
import './DetailsRow.sass'

export default function DetailsRow({ children }: DetailsRowProps) {
  return (
    <div className="details-row">
      { children }
    </div>
  )
}

type DetailsRowProps = {
  children?: ReactNode
}