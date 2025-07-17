/* eslint-disable react-hooks/exhaustive-deps */
import { Container, RegisterForm } from "./registerBarber.styles";
import Header from "../../components/header";
import { Input, Button } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../contexts/contextProvider';
import { requestToken, sendRequest } from '../../services';
import { useCustomToast } from '../../util';
import { useNavigate } from 'react-router-dom';

function RegisterBarber() {
  const { user } = useContext(AppContext);
  const [token, setToken] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const customToast = useCustomToast();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const date = new Date(data.dateHire);
    const body = {
      name: data.name,
      age: Number(data.age),
      dateHire: date.toISOString(),
    };
    requestToken(token);
    const responseData = await sendRequest('post', '/barber', body);
    if (!responseData.id) {
      customToast('Cadastro falhou', 'error');
    } else if (responseData.id) {
      customToast('Cadastrado com sucesso', 'success');
      navigate('/');
    }
  };
  useEffect(() => {
    if (user) {
      setToken(user?.token);
    }
  }, []);

  return (
    <>
      <Header />
      <Container>
        <RegisterForm>
          <h1>Cadastrar Barbeiro</h1>
          <span>Nome:</span>
          <Input
            _placeholder={{ color: '#18382d' }}
            focusBorderColor="#18382d"
            width={'80%'}
            {...register('name', { required: 'Nome é obrigatório' })}
            placeholder="Nome"
          />
          {errors.name && <p>{errors.name.message}</p>}
          <span>Idade:</span>
          <Input
            focusBorderColor="#18382d"
            type="number"
            width={'80%'}
            {...register('age', { required: 'Idade é obrigatória' })}
            _placeholder={{ color: '#18382d' }}
            placeholder="Idade"
          />
          {errors.age && <p>{errors.age.message}</p>}
          <span>Data da contratação:</span>
          <Input
            focusBorderColor="#18382d"
            type="date"
            width={'80%'}
            {...register('dateHire', {
              required: 'Data da contratação é obrigatória',
            })}
            _placeholder={{ color: '#18382d' }}
            placeholder="Data da contratação"
          />
          {errors.dateHire && <p>{errors.dateHire.message}</p>}
          <Button
            type="submit"
            backgroundColor="#18382d"
            color="white"
            width={'100px'}
            onClick={handleSubmit(onSubmit)}
          >
            Cadastrar
          </Button>
        </RegisterForm>
      </Container>
    </>
  );
}

export default RegisterBarber;
