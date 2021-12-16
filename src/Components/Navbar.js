import { NavLink } from "react-router-dom";
import '../index.css';

function NavBar() {
    return (
      <div className='flex items-end relative bg-white text-black z-20'>
        <p className='mx-5'>
          Matthew's McArdle GitHub Pages
        </p>
        <NavLink exact="true" to="/" className="mx-5">
          Home
        </NavLink>
        <NavLink exact="true" to="/MagnetPage" className="mx-5">
          Magnet Forensics
        </NavLink>
        <NavLink exact="true" to="/ResumePage" className="mx-5">
          Resume
        </NavLink>
        <NavLink exact="true" to="/TierLists" className="mx-5">
          Tier Lists
        </NavLink>
      </div>
    );
}

export default NavBar;