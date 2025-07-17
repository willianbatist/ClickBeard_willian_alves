// HeaderAdmin.jsx
import { HeaderContainer, NavContainer } from './headerAdmin.styles';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../contexts/contextProvider';

function HeaderAdmin() {
  const navigate = useNavigate();
  const { logout } = useContext(AppContext);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <HeaderContainer>
      <NavContainer>
        <ul>
          <li>
            <Link onClick={() => navigate('/')}>Colaboradores</Link>
          </li>
          <li>
            <Link onClick={() => navigate('/schedules')}>Agendamentos</Link>
          </li>
          <li>
            <Link onClick={() => navigate('/register-barber')}>Barbeiro</Link>
          </li>
          <li>
            <Link onClick={() => navigate('/specialty')}>Especialidade</Link>
          </li>
          <li>
            <Link onClick={handleLogout}>Sair</Link>
          </li>
        </ul>
      </NavContainer>
    </HeaderContainer>
  );
}

export default HeaderAdmin;
