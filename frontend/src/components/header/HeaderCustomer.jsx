import { HeaderCustomerContainer } from './headerCustomer.styles';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { NavContainer } from './headerCustomer.styles';
import { useContext } from 'react';
import { AppContext } from '../../contexts/contextProvider';

function HeaderCustomer() {
  const navigate = useNavigate();
  const { logout } = useContext(AppContext);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <HeaderCustomerContainer>
      <NavContainer>
        <ul>
          <li>
            <Link onClick={() => navigate('/')}>Agendar</Link>
          </li>
          <li>
            <Link onClick={() => navigate('/my-schedules')}>Meus agendamentos</Link>
          </li>
          <li>
            <Link onClick={handleLogout}>Sair</Link>
          </li>
        </ul>
      </NavContainer>
    </HeaderCustomerContainer>
  );
}

export default HeaderCustomer;
