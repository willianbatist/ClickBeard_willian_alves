/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { AppContext } from "../../contexts/contextProvider";
import HomeAdmin from "./HomeAdmin";
import HomeCustomer from "./HomeCustomer.jsx";
import { useNavigate } from "react-router-dom";

function Home() {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);

  return(
    <>
    {user?.role === "admin" ? (<HomeAdmin/>): ""}
    {user?.role === "customer" ? (<HomeCustomer/>): ""}
    </>
  )
}

export default Home;
