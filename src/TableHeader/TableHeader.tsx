import { TableRow } from '../TableRow';
import './TableHeader.sass'

export default function TableHeader({ className }: TableHeaderPros) {
  return (
    <TableRow className={`table-header ${className}`}>
      <p className='table-header__column-label'>Invoice name</p>
      <p className='table-header__column-label'>Vendor name</p>
      <p className='table-header__column-label'>Invoice description</p>
      <p className='table-header__column-label'>Due date</p>
      <p className='table-header__column-label'>Amount</p>
    </TableRow>
  )
}

type TableHeaderPros = {
  className?: string,
}