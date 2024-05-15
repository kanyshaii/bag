import { Link } from 'react-router-dom';
import './Footer.css';
import Menu from '../Menu/Menu';
import Logo from '../Logo/Logo';
// import logo from '../../img/Icons/footer-ic.svg'
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="Foot flex">
          {/* <div className="Footer_img">
            <img src={logo} alt="" />
          </div> */}
          <Logo/>
          <div className="Foot_menu">
            <p className="Foot_tit">Company  </p>
            <div className="Foot_menu-in flex">
              <Menu/>
              <p>
                If you reside in the U.S. territories, please call Goldman Sachs
                at 877-255-5923 with questions about bags. 
              </p>
            </div>
          </div>
          <div className="Foot_links-wrap">
            <p className="Foot_tit">Links</p>
            <div className="Foot_links flex">
              <Link className="Foot_link Foot_link__inst" />
              <Link className="Foot_link Foot_link__fb" />
              <Link className="Foot_link Foot_link__tw" />
            </div>
          </div>
        </div>
        <div className="Foot_bot">
          <p>
          Complete your style with awesome clothes from us.
          </p>
          <p>Copyright © 2024 Fashion Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;