import { CardBarberContainer } from "./cardBarber.styles";
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
} from "@chakra-ui/react";

function CardBarber(Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <CardBarberContainer>
        <p>
          <span>Data e hora:</span>
          {` ${Props.name}`}
        </p>
        <p>
          <span>Idade:</span>
          {` ${Props.age}`}
        </p>
        <div>
          <span>{`Especialidades: `}</span>
          <ul>
            {Props.specialties.map((item) => (
              <li>{item.specialty.name}</li>
            ))}
          </ul>
          <Button
            fontSize={"10px"}
            size="xs"
            color={"white"}
            backgroundColor={"#18382d"}
            onClick={onOpen}
          >
            Remover
          </Button>
        </div>
      </CardBarberContainer>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg="none"
          backdropFilter="auto"
          backdropInvert="20%"
          backdropBlur="3px"
        />
        <ModalContent>
          <ModalHeader>Remover colaborador</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>Tem certeza que deseja remover o colaborador?</p>
          </ModalBody>
          <ModalFooter>
            <Button
              color={"white"}
              backgroundColor={"#18382d"}
              mr={3}
              onClick={onClose}
            >
              fechar
            </Button>
            <Button
              color={"red"}
              variant="ghost"
              onClick={() => Props.delete(Props.id, onClose)}
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
