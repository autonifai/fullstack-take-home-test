import { InvoiceStatus } from '@src/Invoice/domain'
import getStatusLabel from './getStatusLabel'
import './StatusBadge.sass'

export default function StatusBadge({ className, status }: StatusBadgeProps) {
  return (
    <div className={`status-badge status-badge--${status} ${className}`}>
      <p className="status-badge__label">{getStatusLabel(status)}</p>
    </div>
  )
}

type StatusBadgeProps = {
  className?: string,
  status?: InvoiceStatus
}

