import React, { useCallback, useRef } from "react";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";

import { FiMail, FiPower } from "react-icons/fi";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import Button from "../../components/button";
import Input from "../../components/form/Input";
import Header from "../../components/Header";
import { useAuth } from "../../hooks/Auth";
import api from "../../services/api";
import getValidationErros from "../../utils/getValidationErro";

import { Container } from "./styles";

interface IProfileFormData {
  name: string;
  email: string;
  old_password: string;
  password: string;
  password_confirmation: string;
}

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { user, updateUser } = useAuth();
  const history = useHistory();
  const handleSubmit = useCallback(
    async (data: IProfileFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required("Nome obrigatório"),
          email: Yup.string()
            .required("E-mail obrigatório")
            .email("Digite um e-mail válido"),
          old_password: Yup.string(),
          // password: Yup.string(),
          // password_confirmation: Yup.string()
          //   .when("old_password", {
          //     is: (val) => !!val.length,
          //     then: Yup.string().required("Campo obrigatório"),
          //     otherwise: Yup.string(),
          //   })
          //   .oneOf([Yup.ref("password"), null], "Confirmação incorreta"),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const {
          name,
          email,
          old_password,
          password,
          password_confirmation,
        } = data;

        const formData = {
          name,
          email,
          ...(old_password
            ? {
                old_password,
                password,
                password_confirmation,
              }
            : {}),
        };

        const response = await api.put("/profile", formData);

        updateUser(response.data);

        history.push("/dashboard");
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErros(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [updateUser, history]
  );
  return (
    <Container>
      <Header />

      <Form
        ref={formRef}
        initialData={{
          name: user.name,
          email: user.email,
        }}
        onSubmit={handleSubmit}
      >
        <h1>Profile</h1>
        <Input name="name" icon={FiPower} placeholder="Nome" />
        <Input name="email" icon={FiMail} placeholder="E-mail" />
        {/* <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        /> */}
        <Button type="submit">Atualizar</Button>
      </Form>
    </Container>
  );
};

export default Profile;
