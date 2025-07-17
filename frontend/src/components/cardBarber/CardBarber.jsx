import { CardBarberContainer } from './cardBarber.styles';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import SpecialtiesModal from './SpecialtiesModal';

function CardBarber(Props) {
  const { isOpen: isDeleteOpen, onOpen: onDeleteOpen, onClose: onDeleteClose } = useDisclosure();
  const {
    isOpen: isSpecialtiesOpen,
    onOpen: onSpecialtiesOpen,
    onClose: onSpecialtiesClose,
  } = useDisclosure();

  return (
    <>
      <CardBarberContainer>
        <p>
          <span>Nome:</span>
          {` ${Props.name}`}
        </p>
        <p>
          <span>Idade:</span>
          {` ${Props.age}`}
        </p>
        <div>
          <span>{`Especialidades: `}</span>
          <ul>
            {Props.specialties.map((item, index) => (
              <li key={index}>{item.specialty.name}</li>
            ))}
          </ul>
          <div>
            <Button
              fontSize={'10px'}
              size="xs"
              color={'white'}
              backgroundColor={'#18382d'}
              onClick={onSpecialtiesOpen}
            >
              Gerenciar
            </Button>
            <Button
              fontSize={'10px'}
              size="xs"
              color={'white'}
              backgroundColor={'#dc3545'}
              onClick={onDeleteOpen}
            >
              Remover
            </Button>
          </div>
        </div>
      </CardBarberContainer>

      <SpecialtiesModal
        isOpen={isSpecialtiesOpen}
        onClose={onSpecialtiesClose}
        barberId={Props.id}
        barberName={Props.name}
        barberSpecialties={Props.specialties}
        onUpdate={Props.onUpdate}
      />

      <Modal isOpen={isDeleteOpen} onClose={onDeleteClose}>
        <ModalOverlay bg="none" backdropFilter="auto" backdropInvert="20%" backdropBlur="3px" />
        <ModalContent>
          <ModalHeader>Remover colaborador</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>Tem certeza que deseja remover o colaborador?</p>
          </ModalBody>
          <ModalFooter>
            <Button color={'white'} backgroundColor={'#18382d'} mr={3} onClick={onDeleteClose}>
              fechar
            </Button>
            <Button
              color={'red'}
              variant="ghost"
              onClick={() => Props.delete(Props.id, onDeleteClose)}
            >
              Remover colaborador
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CardBarber;
