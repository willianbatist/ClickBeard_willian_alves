/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { AppContext } from "../../contexts/contextProvider";
import HeaderAdmin from "./HeaderAdmin";
import HeaderCustomer from "./HeaderCustomer";

function Header() {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      {user?.role === "admin" ? (<HeaderAdmin/>): ""}
      {user?.role === "customer" ? <HeaderCustomer /> : ""}
    </>
  );
}

export default Header;
