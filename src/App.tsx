import './App.sass';
import { TableHeader } from './TableHeader';


function App() {
  return (
      <ul className='invoice-table'>
        <TableHeader className='test'/>
        <li className='invoice-list__invoice'>
          <p></p>
        </li>
      </ul>
  );
}

export default App;
