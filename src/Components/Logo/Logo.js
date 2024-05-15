import { Link } from 'react-router-dom';
import './Logo.css';
import logo from '../../img/Icons/logo.svg'

function Logo() {
  return (
    <Link to ='/' className='Logo'>
      <img src={logo} alt="" />
      <span>Fashion</span>
    </Link>
  );
}

export default Logo;