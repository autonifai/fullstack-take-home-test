import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import './TableRow.sass'

export default function TableRow({ className, children }: TableRowProps)  {
  return (
    <div className={`table-row ${className}`}>
      <FontAwesomeIcon className='table-row__bullet' icon={faSquare} color='#E800EF' />
      {children}
    </div>
  )
}

type TableRowProps = {
  children: React.ReactNode,
  className?: string,
}