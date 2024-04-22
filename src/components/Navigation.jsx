import { Link, useNavigate } from 'react-router-dom';

export default function Navigation() {
  const navigate = useNavigate();

  return (
    <ul>
      <li>
        <Link to='/'> Home </Link>
      </li>
      <li>
        <Link to='/create-movie'> Create Movie </Link>
      </li>
    </ul>
  );
}
