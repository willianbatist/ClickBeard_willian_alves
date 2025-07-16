/* eslint-disable react-hooks/exhaustive-deps */
import { Container, RegisterForm } from "./registerBarber.styles";
import Header from "../../components/header";
import { Input, Button, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";
import { useState, useContext, useEffect } from "react";
import { AppContext } from "../../contexts/contextProvider";
import { requestToken, sendRequest } from "../../services";
import { useCustomToast } from "../../util";
import { useNavigate } from "react-router-dom";

function RegisterBarber() {
  const { user } = useContext(AppContext);
  const [token, setToken] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const customToast = useCustomToast();
  const [specialties, setSpecialties] = useState([]);
  const [specialty, setSpecialty] = useState();
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    if (specialties.length < 1) {
      setErr(true);
    } else {
      const date = new Date(data.dateHire);
      const body = {
        name: data.name,
        age: Number(data.age),
        dateHire: date.toISOString(),
        specialties: specialties,
      };
      requestToken(token);
      const responseData = await sendRequest("post", "/barber", body);
      if (!responseData.id) {
        customToast("Cadastro falhou", "error");
      } else if (responseData.id) {
        customToast("Cadastrado com sucesso", "success");
        navigate("/");
      }
    }
  };
  useEffect(() => {
    if (user) {
      setToken(user?.token);
    }
  }, []);
  const handleKeyDown = (text) => {
    if (text.trim() !== "") {
      setSpecialties([...specialties, text.trim()]);
      setSpecialty("");
    }
  };

  const handleRemove = (remove) => {
    const newArray = specialties.filter((item) => item !== remove);
    setSpecialties(newArray);
  };

  return (
    <>
      <Header />
      <Container>
        <RegisterForm>
          <h1>Cadastrar Barbeiro</h1>
          <span>Nome:</span>
          <Input
            _placeholder={{ color: "#18382d" }}
            focusBorderColor="#18382d"
            width={"80%"}
            {...register("name", { required: "Nome é obrigatório" })}
            placeholder="Nome"
          />
          {errors.name && <p>{errors.name.message}</p>}
          <span>Idade:</span>
          <Input
            focusBorderColor="#18382d"
            type="number"
            width={"80%"}
            {...register("age", { required: "Idade é obrigatória" })}
            _placeholder={{ color: "#18382d" }}
            placeholder="Idade"
          />
          {errors.age && <p>{errors.age.message}</p>}
          <span>Data da contratação:</span>
          <Input
            focusBorderColor="#18382d"
            type="date"
            width={"80%"}
            {...register("dateHire", {
              required: "Data da contratação é obrigatória",
            })}
            _placeholder={{ color: "#18382d" }}
            placeholder="Data da contratação"
          />
          {errors.dateHire && <p>{errors.dateHire.message}</p>}
          <span>Especialidade:</span>
          <InputGroup size="md" width={"80%"}>
            <Input
              focusBorderColor="#18382d"
              pr="4.5rem"
              type="text"
              value={specialty}
              onChange={(e) => {
                setSpecialty(e.target.value);
                setErr(false);
              }}
              _placeholder={{ color: "#18382d" }}
              placeholder="Adicione uma especialidade"
            />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                onClick={() => handleKeyDown(specialty)}
                color="white"
                backgroundColor="#18382d"
                marginRight={"4px"}
              >
                Adicionar
              </Button>
            </InputRightElement>
          </InputGroup>
          {err && <p>Adicionar especialidade é obrigatório</p>}
          <ul>
            {specialties.map((specialty, index) => (
              <li key={index}>
                {specialty}
                <SmallCloseIcon onClick={() => handleRemove(specialty)} />
              </li>
            ))}
          </ul>
          <Button
            type="submit"
            backgroundColor="#18382d"
            color="white"
            width={"100px"}
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
