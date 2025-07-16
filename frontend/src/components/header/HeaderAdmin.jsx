import { HeaderContainer, NavContainer } from "./headerAdmin.styles";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function HeaderAdmin() {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <NavContainer>
        <ul>
          <li>
            <Link onClick={ () => navigate("/") }>Barbeiros</Link>
          </li>
          <li>
            <Link onClick={ () => navigate("/schedules") }>Agendamentos</Link>
          </li>
          <li>
            <Link onClick={ () => navigate("/register-barber") }>Cadastrar</Link>
          </li>
          <li>
            <Link onClick={ () => navigate("/login") }>Sair</Link>
          </li>
        </ul>
      </NavContainer>
    </HeaderContainer>
  );
}

export default HeaderAdmin;
