/* eslint-disable react-hooks/exhaustive-deps */
import HeaderAdmin from "../../components/header/HeaderAdmin";
import { ContainerSchedulesAdmin, Container, CardContainer, CardsContainer } from "./SchedulesAdmin.styles";
import { Select } from "@chakra-ui/react";
import { requestToken, sendRequest } from "../../services";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../contexts/contextProvider";
import { useNavigate } from "react-router-dom";
import {
  getUniqueDates,
  formatDateNotHours,
  formatDate,
  findBarberNameById,
  filterDates,
} from "../../util";

function SchedulesAdmin() {
  const [schedules, setSchedules] = useState();
  const [date, setDate] = useState();
  const [optionFilter, setOptionFilter] = useState("all");
  const { user, barbers } = useContext(AppContext);
  const navigate = useNavigate();

  const handleRequestSchedules = async () => {
    const res = await sendRequest("get", "/scheduledAppointment");
    setSchedules(res);
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    requestToken(user?.token);
    handleRequestSchedules();
  }, []);

  useEffect(() => {
    if (schedules !== undefined) {
      const dat = getUniqueDates(schedules);
      setDate(dat);
    }
  }, [schedules]);

  return (
    <>
      <HeaderAdmin />
      <ContainerSchedulesAdmin>
        <Container>
          <h1>Meus agendamentos</h1>
          <Select
          _placeholder={{ color: "#18382d" }}
          width={"80%"} 
          placeholder="Selecione a opção"
          onClick={(e) => {
            if (e.target.value !== "") {
              setOptionFilter(e.target.value)
            }
          }}>
            <option value="all">Todos</option>
            {date &&
              date?.map((item, index) => (
                <option value={item} key={index}>
                  {formatDateNotHours(item)}
                </option>
              ))}
          </Select>
          <CardsContainer>
            {barbers && schedules &&
              filterDates(schedules, optionFilter).map((item) => (
                <CardContainer key={item.id}>
                  <p>
                    <span>Data e hora:</span>
                    {` ${formatDate(item.date)}`}
                  </p>
                  <p>
                    <span>Barbeiro:</span>
                    {` ${findBarberNameById(item.barber_id, barbers)}`}
                  </p>
                </CardContainer>
              ))}
          </CardsContainer>
        </Container>
      </ContainerSchedulesAdmin>
    </>
  );
}

export default SchedulesAdmin;
