import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navigation from 'components/Navigation';
import Container from 'components/Container';
import UserMenu from 'components/UserMenu';
import s from './AppBar.module.css';
import AuthNav from 'components/authNav';
import authSelectors from '../../redux/auth/authSelectors';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <Container>
        <header className={s.header}>
          <Navigation />
          {isLoggedIn ? <UserMenu email={'baraban@admin.com'} /> : <AuthNav />}
        </header>
        <main>
          <Outlet />
        </main>
      </Container>
    </>
  );
}
