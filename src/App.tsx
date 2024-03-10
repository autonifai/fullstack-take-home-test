import './App.sass';
import { TableHeader } from './TableHeader';


function App() {
  return (
      <ul className='invoice-table'>
        <TableHeader className='invoice-table__header'/>
        <li className='invoice-table__invoice'>
          <p></p>
        </li>
      </ul>
  );
}

export default App;
