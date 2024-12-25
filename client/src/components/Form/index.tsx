import React, { useState, FormEvent } from "react";

import { FormInput } from "./Input";
import { FormSubmit } from "./Submit";
import { Message } from "../layouts/Message";

import { FormsProps } from "../../types/formProps";
import { User } from "../../types/User";
import { validate } from "../../utils/formValidation";
import "./Form.scss";

export const Forms: React.FC<FormsProps> = ({ title }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  // "errors" é um state nulo ou do tipo User
  const [errors, setErrors] = useState<User | null>(null);

  const formSubmit = (e: FormEvent) => {
    setErrors(null);
    e.preventDefault();

    // A variável "data" é do tipo User e receve os valores dos outros states
    const data: User = {
      name,
      email,
    };

    // Realiza a validação com a variável "data"
    const validationError = validate(data);

    // Verifica se o objeto "validationError" possui chaves
    if (Object.keys(validationError).length > 0) {
      // Se verdadeiro, "errors" recebe o objeto "validationError"
      setErrors(validationError);
    } else {
      setMessage("");

      const newUser = JSON.stringify(data);

      fetch("http://localhost:8081/api/register-user", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: newUser,
      })
        .then((resp) => resp.json())
        .then((data) => {
          setMessage(data.message);
          setMessageType(data.type);
        })
    }
  };

  const handleChangeName = (value: string) => {
    setName(value);
  };

  const handleChangeEmail = (value: string) => {
    setEmail(value);
  };

  return (
    <>
      {message && <Message type={messageType} msg={message} />}
      <form className="py-3 px-5" onSubmit={formSubmit}>
        <h2 className="text-2xl font-semibold text-center ">{title}</h2>
        <FormInput
          name={"Nome"}
          type="text"
          placeholder="Insira o nome"
          value={name}
          handleChange={handleChangeName}
        />
        {errors?.name && (
          <span className="text-xs text-red-400 mb-1">{errors?.name}</span>
        )}
        <FormInput
          name="E-mail"
          type="email"
          placeholder="Insira o e-mail"
          value={email}
          handleChange={handleChangeEmail}
        />
        {errors?.email && (
          <span className="text-xs text-red-400 mb-1">{errors?.email}</span>
        )}
        <FormSubmit text="Registrar" />
      </form>
    </>
  );
};
