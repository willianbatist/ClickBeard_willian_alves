import { Container, SingupContainer } from "./singup.styles";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input, Button, InputGroup, InputRightElement } from "@chakra-ui/react";
import { requestCreateUser } from "../../services";
import { useCustomToast } from "../../util";
import { useNavigate } from "react-router-dom";

function Singup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const customToast = useCustomToast();

  const onSubmit = async (data) => {
    const createUser = await requestCreateUser("/sign-up", data);
    if (!createUser.response) {
      customToast("Conta criada com sucesso", "success");
      return navigate("/login");
    } else if (createUser.response.data.message === "email already in use") {
      return customToast("Email já em uso", "error");
    }
  };

  return (
    <Container>
      <SingupContainer onSubmit={handleSubmit(onSubmit)}>
        <h1>Criar uma conta</h1>
        <Input
          focusBorderColor="#18382d"
          width={"80%"}
          {...register("name", { required: "Nome é obrigatório" })}
          placeholder="Nome"
        />
        {errors.name && <p>{errors.name.message}</p>}
        <Input
          focusBorderColor="#18382d"
          width={"80%"}
          {...register("email", {
            required: "Email é obrigatório",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Endereço de email invalido",
            },
          })}
          placeholder="Email"
        />
        {errors.email && <p>{errors.email.message}</p>}
        <InputGroup size="md" width={"80%"}>
          <Input
            focusBorderColor="#18382d"
            pr="4.5rem"
            type={show ? "text" : "password"}
            {...register("password", { required: "senha obrigatória" })}
            placeholder="Senha"
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              onClick={handleClick}
              color="white"
              backgroundColor="#18382d"
              marginRight={"4px"}
            >
              {show ? "Esconder" : "Mostrar"}
            </Button>
          </InputRightElement>
        </InputGroup>
        {errors.password && <p>{errors.password.message}</p>}
        <Button
          type="submit"
          backgroundColor="#18382d"
          color="white"
          width={"100px"}
        >
          Enviar
        </Button>
      </SingupContainer>
    </Container>
  );
}

export default Singup;
