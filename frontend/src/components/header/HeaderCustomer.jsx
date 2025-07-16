import { HeaderCustomerContainer } from "./headerCustomer.styles";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { NavContainer } from "./headerCustomer.styles";

function HeaderCustomer() {
  const navigate = useNavigate();
  return (
    <HeaderCustomerContainer>
      <NavContainer>
        <ul>
          <li>
            <Link onClick={() => navigate("/")}>Agendar</Link>
          </li>
          <li>
            <Link onClick={() => navigate("/my-schedules")}>Meus agendamentos</Link>
          </li>
          <li>
            <Link onClick={() => navigate("/login")}>Sair</Link>
          </li>
        </ul>
      </NavContainer>
    </HeaderCustomerContainer>
  );
}

export default HeaderCustomer;
