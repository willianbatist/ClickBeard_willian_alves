/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Checkbox,
  VStack,
  Text,
  Divider,
  useToast,
} from '@chakra-ui/react';
import { sendRequest } from '../../services';

function SpecialtiesModal({ isOpen, onClose, barberId, barberName, barberSpecialties, onUpdate }) {
  const [allSpecialties, setAllSpecialties] = useState([]);
  const [selectedSpecialties, setSelectedSpecialties] = useState([]);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  // Buscar todas as especialidades disponíveis
  const fetchAllSpecialties = async () => {
    try {
      const response = await sendRequest('get', '/specialties');
      setAllSpecialties(response);
    } catch (error) {
      console.error('Erro ao buscar especialidades:', error);
      toast({
        title: 'Erro',
        description: 'Erro ao carregar especialidades',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  // Configurar especialidades selecionadas quando o modal abrir
  useEffect(() => {
    if (isOpen) {
      fetchAllSpecialties();
      // Extrair IDs das especialidades do barbeiro
      const currentSpecialtyIds = barberSpecialties.map((item) => item.specialty.id);
      setSelectedSpecialties(currentSpecialtyIds);
    }
  }, [isOpen, barberSpecialties]);

  // Função para adicionar/remover especialidade
  const handleSpecialtyToggle = (specialtyId) => {
    setSelectedSpecialties((prev) => {
      if (prev.includes(specialtyId)) {
        return prev.filter((id) => id !== specialtyId);
      } else {
        return [...prev, specialtyId];
      }
    });
  };

  // Função para salvar as alterações
  const handleSave = async () => {
    setLoading(true);
    try {
      // Especialidades atuais do barbeiro
      const currentSpecialtyIds = barberSpecialties.map((item) => item.specialty.id);

      // Especialidades a serem removidas
      const specialtiesToRemove = currentSpecialtyIds.filter(
        (id) => !selectedSpecialties.includes(id)
      );

      // Especialidades a serem adicionadas
      const specialtiesToAdd = selectedSpecialties.filter(
        (id) => !currentSpecialtyIds.includes(id)
      );

      // Remover especialidades
      for (const specialtyId of specialtiesToRemove) {
        await sendRequest('delete', `/barber/${barberId}/specialty/${specialtyId}`);
      }

      // Adicionar especialidades
      for (const specialtyId of specialtiesToAdd) {
        await sendRequest('post', `/barber/${barberId}/specialty`, {
          specialtyId: specialtyId,
        });
      }

      toast({
        title: 'Sucesso',
        description: 'Especialidades atualizadas com sucesso',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });

      // Atualizar a lista de barbeiros na tela principal
      if (onUpdate) {
        onUpdate();
      }

      onClose();
    } catch (error) {
      console.error('Erro ao salvar especialidades:', error);
      toast({
        title: 'Erro',
        description: 'Erro ao salvar especialidades',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay bg="none" backdropFilter="auto" backdropInvert="20%" backdropBlur="3px" />
      <ModalContent>
        <ModalHeader>Gerenciar Especialidades - {barberName}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text mb={4} fontWeight="bold" color="#18382d">
            Selecione as especialidades do colaborador:
          </Text>
          <VStack align="stretch" spacing={3}>
            {allSpecialties.map((specialty) => (
              <Checkbox
                key={specialty.id}
                isChecked={selectedSpecialties.includes(specialty.id)}
                onChange={() => handleSpecialtyToggle(specialty.id)}
                colorScheme="teal"
              >
                {specialty.name}
              </Checkbox>
            ))}
          </VStack>

          <Divider my={4} />

          <Text fontSize="sm" color="gray.600">
            {selectedSpecialties.length} especialidade(s) selecionada(s)
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button
            color={'white'}
            backgroundColor={'#18382d'}
            mr={3}
            onClick={onClose}
            disabled={loading}
          >
            Cancelar
          </Button>
          <Button
            colorScheme="teal"
            onClick={handleSave}
            isLoading={loading}
            loadingText="Salvando..."
          >
            Salvar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default SpecialtiesModal;
