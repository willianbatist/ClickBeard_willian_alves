/* eslint-disable react-hooks/exhaustive-deps */
import {
  ContainerSchedules,
  Container,
  ContainerCardSchedules,
} from "./schedules.styles";
import HeaderCustomer from "../../components/header/HeaderCustomer";
import CardSchedules from "../../components/cardSchedules/CardSchedules";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../contexts/contextProvider";
import { requestToken, sendRequest } from "../../services";
import { useNavigate } from "react-router-dom";
import { findBarberNameById, sortAppointments } from "../../util";
import { useCustomToast } from "../../util";

function Schedules() {
  const { user } = useContext(AppContext);
  const customToast = useCustomToast();
  const [schedules, setSchedules] = useState();
  const [barbers, setBarbers] = useState();
  const [isDelete, setIsDelete] = useState(false);
  const navigate = useNavigate();

  const handleRequestSchedules = async () => {
    requestToken(user?.token);
    const res = await sendRequest(
      "get",
      `/scheduledAppointment/customer/${user?.id}`
    );
    setSchedules(res);
  };

  const handleRequestBarbers = async () => {
    requestToken(user?.token);
    const res = await sendRequest("get", "/barber");
    setBarbers(res);
  };

  const handleRequestDelete = async (id, onClose) => {
    requestToken(user?.token);
    await sendRequest("delete", `/scheduledAppointment/customer/delete/${id}`);
    onClose();
    setIsDelete(!isDelete);
    customToast("Deletado com Sucesso", "success");
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    handleRequestSchedules();
    handleRequestBarbers();
  }, []);

  useEffect(() => {
    handleRequestSchedules();
  }, [isDelete]);

  return (
    <>
      <HeaderCustomer />
      <ContainerSchedules>
        <Container>
          <h1>Meus agendamentos</h1>
          <h2>Cancelamento até 2 horas antes do agendamento</h2>
          <ContainerCardSchedules>
            {schedules &&
              barbers &&
              sortAppointments(schedules).map((item) => (
                <CardSchedules
                  key={item.id}
                  date={item.date}
                  name={findBarberNameById(item.barber_id, barbers)}
                  id={item.id}
                  delete={handleRequestDelete}
                />
              ))}
          </ContainerCardSchedules>
        </Container>
      </ContainerSchedules>
    </>
  );
}

export default Schedules;
