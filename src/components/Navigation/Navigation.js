import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <>
      <nav>
        <NavLink
          to="/"
          className={navData => (navData.isActive ? s.activeLink : s.link)}
        >
          Home page
        </NavLink>

        <NavLink
          to="/contacts"
          className={navData => (navData.isActive ? s.activeLink : s.link)}
        >
          Contacts
        </NavLink>
      </nav>
    </>
  );
};
export default Navigation;
