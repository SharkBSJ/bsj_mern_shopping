import './Navbar.css';
import {Link} from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="navbar">
        {/* logo */}
        <div className="navbar_logo">
            <h2>MERN Shopping Cart</h2>
        </div>
        {/* links */}
        <div className="navbar_links">
            <li>
                <Link to="/cart">
                  { /* Icon */}
                  <i className="fas fa-shopping-cart"></i>
                  Cart
                  <span className="cartlogo_badge">0</span>
                </Link>
            </li>
            <li>
                <Link to="/">
                  Shop
                </Link>
            </li>
        </div>
        {/* hamburger menu */}
        <div className="hamburger_menu">
          <div></div>
          <div></div>
          <div></div>
        </div>
    </div>
  );
}

export default Navbar;
