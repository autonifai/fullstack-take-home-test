import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import './ListRow.sass'

export default function ListRow({ className, children }: ListRowProps)  {
  return (
    <div className={`list-row ${className}`}>
      <FontAwesomeIcon className='list-row__bullet' icon={faSquare} color='#E800EF' />
      {children}
    </div>
  )
}

type ListRowProps = {
  children: React.ReactNode,
  className?: string,
}