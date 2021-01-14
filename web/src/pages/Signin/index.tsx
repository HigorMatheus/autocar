import React, { useCallback, useRef } from "react";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";

import { useHistory } from "react-router-dom";
import { FiLock, FiMail } from "react-icons/fi";
import Input from "../../components/form/Input";

import { Container, Login } from "./styles";
import getValidationErros from "../../utils/getValidationErro";

import { useAuth } from "../../hooks/Auth";
import Button from "../../components/button";
import Header from "../../components/Header";

interface ISigninFormData {
  email: string;
  password: string;
}
const Signin: React.FC = () => {
  const history = useHistory();

  const { signIn } = useAuth();

  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(
    async (data: ISigninFormData): Promise<void> => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required("E-mail Obrigatório")
            .email("digite um email valido"),
          password: Yup.string().required("Senha Obrigatória"),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({ email: data.email, password: data.password });

        history.push("dashboard");
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErros(err);
          formRef.current?.setErrors(errors);
          return;
        }
        // eslint-disable-next-line no-alert
        alert("erro na auth");
      }
    },
    [signIn, history]
  );
  return (
    <Container>
      <Header />
      <Login>
        <h1>login</h1>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu login</h1>
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>
        </Form>
      </Login>
    </Container>
  );
};

export default Signin;
