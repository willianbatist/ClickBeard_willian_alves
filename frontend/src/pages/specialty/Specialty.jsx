/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react';
import { Container, SpecialtyForm, SpecialtyList, SpecialtyItem } from './specialty.styles';
import Header from '../../components/header';
import { Input, Button, InputGroup, InputRightElement } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { useForm } from 'react-hook-form';
import { AppContext } from '../../contexts/contextProvider';
import { requestToken, sendRequest } from '../../services';
import { useCustomToast } from '../../util';

function Specialty() {
  const { user } = useContext(AppContext);
  const [token, setToken] = useState('');
  const [specialties, setSpecialties] = useState([]);
  const [specialtyName, setSpecialtyName] = useState('');
  const [loading, setLoading] = useState(false);
  const customToast = useCustomToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (user) {
      setToken(user?.token);
      fetchSpecialties();
    }
  }, [user]);

  const fetchSpecialties = async () => {
    try {
      setLoading(true);
      if (user?.token) {
        requestToken(user.token);
        const responseData = await sendRequest('get', '/specialties');
        setSpecialties(responseData || []);
      }
    } catch (error) {
      console.error('Erro ao buscar especialidades:', error);
      customToast('Erro ao carregar especialidades', 'error');
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const body = {
        name: data.name.trim(),
      };

      requestToken(token);
      const responseData = await sendRequest('post', '/specialty', body);

      if (responseData && responseData.id) {
        customToast('Especialidade criada com sucesso', 'success');
        reset();
        setSpecialtyName('');
        fetchSpecialties();
      } else {
        customToast('Erro ao criar especialidade', 'error');
      }
    } catch (error) {
      console.error('Erro ao criar especialidade:', error);
      customToast('Erro ao criar especialidade', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      requestToken(token);
      await sendRequest('delete', `/specialty/${id}`);

      customToast('Especialidade excluída com sucesso', 'success');

      setSpecialties(specialties.filter((specialty) => specialty.id !== id));
    } catch (error) {
      console.error('Erro ao excluir especialidade:', error);
      customToast('Erro ao excluir especialidade', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleAddSpecialty = () => {
    if (specialtyName.trim()) {
      handleSubmit(onSubmit)();
    }
  };

  return (
    <>
      <Header />
      <Container>
        <SpecialtyForm>
          <h1>Gerenciar Especialidades</h1>

          <span>Nova Especialidade:</span>
          <InputGroup size="md" width={'80%'}>
            <Input
              focusBorderColor="#18382d"
              pr="4.5rem"
              type="text"
              value={specialtyName}
              {...register('name', {
                required: 'Nome da especialidade é obrigatório',
                minLength: { value: 2, message: 'Nome deve ter pelo menos 2 caracteres' },
              })}
              onChange={(e) => {
                setSpecialtyName(e.target.value);
              }}
              _placeholder={{ color: '#18382d' }}
              placeholder="Digite o nome da especialidade"
              disabled={loading}
            />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                onClick={handleAddSpecialty}
                color="white"
                backgroundColor="#18382d"
                marginRight={'4px'}
                isLoading={loading}
                disabled={loading || !specialtyName.trim()}
              >
                Adicionar
              </Button>
            </InputRightElement>
          </InputGroup>
          {errors.name && <p>{errors.name.message}</p>}

          <SpecialtyList>
            <h2>Especialidades Cadastradas</h2>
            {loading && specialties.length === 0 ? (
              <p>Carregando especialidades...</p>
            ) : specialties.length === 0 ? (
              <p>Nenhuma especialidade cadastrada ainda.</p>
            ) : (
              specialties.map((specialty) => (
                <SpecialtyItem key={specialty.id}>
                  <span>{specialty.name}</span>
                  <DeleteIcon
                    color="red.500"
                    cursor="pointer"
                    onClick={() => handleDelete(specialty.id)}
                    _hover={{ color: 'red.700' }}
                  />
                </SpecialtyItem>
              ))
            )}
          </SpecialtyList>
        </SpecialtyForm>
      </Container>
    </>
  );
}

export default Specialty;
