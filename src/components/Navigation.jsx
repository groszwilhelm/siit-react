import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export default function Navigation() {
  const navigate = useNavigate();
  const { auth, setAuth } = useContext(AuthContext);

  function logout() {
    localStorage.removeItem('accessToken');
    setAuth(null);
    navigate('/login');
  }

  if (!auth) {
    return (
      <ul>
        <li>
          <Link to="/login"> Login </Link>
        </li>
        <li>
          <Link to="/register"> Register </Link>
        </li>
      </ul>
    );
  }

  return (
    <ul>
      <li>
        <Link to="/"> Home </Link>
      </li>
      <li>
        <Link to="/create-movie"> Create Movie </Link>
      </li>
      <li>
        <span onClick={logout}>Logout</span>
      </li>
    </ul>
  );
}
