import './Menu.css';
import {Link} from 'react-router-dom'

function Menu() {
  return (
    <div className="MenuRow">
    <nav className='Menu'>
      <ul className='flex'>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/delivery">DELIVERY</Link>
        </li>
        <li>
          <Link to="/contacts">CONTACTS</Link>
        </li>
      </ul>
    </nav>
    </div>
  );
}

export default Menu;