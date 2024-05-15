import './Header.css';
import Menu from '../Menu/Menu';
import Button from '../Button/Button';
import {Link} from 'react-router-dom'
import Logo from '../Logo/Logo';

function Header() {
  return (
    <header className="Header">
      <div className="container">
        <div className="Head flex">
          <Logo/>
          <Menu />
          <div className="Buttons flex">
            <Button>Log in</Button>
            <Button>Sign in</Button>
          </div>
          <Link to="/cart" className="Cart_ic">
            <span>10</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;