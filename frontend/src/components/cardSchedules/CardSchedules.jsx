import { ContainerCardSchedules } from "./cardSchedules.styles";
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
import { formatDate } from "../../util";
import { useState } from "react";
import { lessThanTwoHours } from "../../util";

function CardSchedules(Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isButton, setIsButton] = useState(false);
  return (
    <>
      <ContainerCardSchedules>
        <p>
          <span>Data e hora:</span>
          {` ${formatDate(Props.date.toString())}`}
        </p>
        <p>
          <span>Barbeiro:</span>
          {` ${Props.name}`}
        </p>
        <Button
          fontSize={"10px"}
          size="xs"
          color={"white"}
          backgroundColor={"#18382d"}
          onClick={() => {
            onOpen();
            setIsButton(!lessThanTwoHours(Props.date));
          }}
        >
          Cancelar
        </Button>
      </ContainerCardSchedules>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg="none"
          backdropFilter="auto"
          backdropInvert="20%"
          backdropBlur="3px"
        />
        <ModalContent>
          <ModalHeader>Cancelar horário</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>Só é permitido cancelar até 2 horas antes do agendamento</p>
          </ModalBody>
          <ModalFooter>
            <Button
              color={"white"}
              backgroundColor={"#18382d"}
              mr={3}
              onClick={() => {
                onClose();
                setIsButton(false);
              }}
            >
              fechar
            </Button>
            <Button
              color={"red"}
              variant="ghost"
              isDisabled={isButton}
              onClick={() => Props.delete(Props.id, onClose)}
            >
              Cancelar horário
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CardSchedules;
