import { Container, LoginContainer, GroupButton, Logo } from './login.styles';
import { useForm } from 'react-hook-form';
import { Button, InputGroup, Input, InputRightElement } from '@chakra-ui/react';
import logo from '../../assets/logo.png';
import { requestLogin } from '../../services';
import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../contexts/contextProvider';
import { useNavigate } from 'react-router-dom';
import { useCustomToast } from '../../util';

function Login() {
  const customToast = useCustomToast();
  const { login, isUserAuthenticated } = useContext(AppContext);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isUserAuthenticated) {
      navigate('/');
    }
  }, [isUserAuthenticated, navigate]);

  const onSubmit = async (data) => {
    try {
      const loginResponse = await requestLogin('/login', data);

      if (!loginResponse.email || !loginResponse.token) {
        customToast('Email e/ou senha inválidos.', 'error');
        return;
      }

      login(loginResponse);
      navigate('/');
    } catch (error) {
      console.error('Erro durante o login:', error);

      if (error.response?.status === 400 && error.response?.data?.message === 'incorrect login') {
        customToast('Email e/ou senha incorretos.', 'error');
      } else {
        customToast('Erro interno do servidor. Tente novamente.', 'error');
      }
    }
  };

  return (
    <Container>
      <LoginContainer onSubmit={handleSubmit(onSubmit)}>
        <Logo>
          <img src={logo} alt="logo de uma barbearia" />
          <h1>CLICK BEARD</h1>
        </Logo>
        <Input
          focusBorderColor="#18382d"
          width={'80%'}
          {...register('email', {
            required: 'Email é obrigatório',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Endereço de email inválido',
            },
          })}
          placeholder="email"
        />
        {errors.email && <p>{errors.email.message}</p>}
        <InputGroup size="md" width={'80%'}>
          <Input
            focusBorderColor="#18382d"
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            {...register('password', { required: 'Senha obrigatória' })}
            placeholder="senha"
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              onClick={handleClick}
              color="white"
              backgroundColor="#18382d"
              marginRight={'4px'}
            >
              {show ? 'Esconder' : 'Mostrar'}
            </Button>
          </InputRightElement>
        </InputGroup>
        {errors.password && <p>{errors.password.message}</p>}
        <GroupButton>
          <Button colorScheme="#18382d" variant="link" onClick={() => navigate('/singup')}>
            Criar conta
          </Button>
          <Button backgroundColor="#18382d" color="white" type="submit" width={'100px'}>
            Entrar
          </Button>
        </GroupButton>
      </LoginContainer>
    </Container>
  );
}

export default Login;