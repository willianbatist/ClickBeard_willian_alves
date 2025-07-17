/* eslint-disable react-hooks/exhaustive-deps */
import HeaderAdmin from '../../components/header/HeaderAdmin';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../contexts/contextProvider';
import { sendRequest, requestToken } from '../../services';
import { useNavigate } from 'react-router-dom';
import { HomeAdminContainer, Container, ContainerCardBarber } from './homeAdmin.styles';
import CardBarber from '../../components/cardBarber/CardBarber';
import { useCustomToast } from '../../util';

function HomeAdmin() {
  const { setBarbers, user, barbers } = useContext(AppContext);
  const [isDelete, setIsDelete] = useState(false);
  const [updateTrigger, setUpdateTrigger] = useState(0);
  const navigate = useNavigate();
  const customToast = useCustomToast();

  const handleRequestBarbers = async () => {
    const res = await sendRequest('get', '/barber');
    setBarbers(res);
  };

  const handleRequestDelete = async (id, onClose) => {
    await sendRequest('delete', `/barber/delete/${id}`);
    onClose();
    setIsDelete(!isDelete);
    customToast('Colaborador removido', 'success');
  };

  const handleUpdateBarbers = () => {
    setUpdateTrigger((prev) => prev + 1);
  };

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
    requestToken(user?.token);
    handleRequestBarbers();
  }, [isDelete, updateTrigger]);

  return (
    <>
      <HeaderAdmin />
      <HomeAdminContainer>
        <Container>
          <h1>Colaboradores</h1>
          <ContainerCardBarber>
            {barbers &&
              barbers.map((barber) => (
                <CardBarber
                  key={barber.id}
                  name={barber.name}
                  age={barber.age}
                  specialties={barber.specialties}
                  id={barber.id}
                  delete={handleRequestDelete}
                  onUpdate={handleUpdateBarbers}
                />
              ))}
          </ContainerCardBarber>
        </Container>
      </HomeAdminContainer>
    </>
  );
}

export default HomeAdmin;
