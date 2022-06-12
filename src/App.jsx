import { Routes, Route } from 'react-router-dom';
import AppBar from './components/AppBar';
import HomePage from 'Views/HomePage';
import ContactsPage from './Views/ContactsPage';
import NotFoundPage from 'Views/NotFoundPage';
import Registration from 'Views/Registration';
import SignIn from 'Views/SignIn';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route index element={<HomePage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="register" element={<Registration />} />
        <Route path="login" element={<SignIn />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
