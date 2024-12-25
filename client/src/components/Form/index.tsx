import React, { useState, FormEvent } from "react";

import { FormInput } from "./Input";
import { FormSubmit } from "./Submit";

import { FormsProps } from "../../types/formProps";
import { User } from "../../types/User";
import { validate } from "../../utils/formValidation";
import "./Form.scss";

export const Forms: React.FC<FormsProps> = ({ title }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState<User | null>(null);

  const formSubmit = (e: FormEvent) => {
    setErrors(null);
    e.preventDefault();

    const data: User = {
      name,
      email,
    };

    const validationError = validate(data);

    if(Object.keys(validationError).length > 0){
      setErrors(validationError)
    }else{
      console.log("hI")
    }
  };

  const handleChangeName = (value: string) => {
    setName(value);
  };

  const handleChangeEmail = (value: string) => {
    setEmail(value);
  };

  return (
    <form className="py-3 px-5" onSubmit={formSubmit}>
      <h2 className="text-2xl font-semibold text-center ">{title}</h2>
      <FormInput
        name={"Nome"}
        type="text"
        placeholder="Insira o nome"
        value={name}
        handleChange={handleChangeName}
      />
      {errors?.name && <span className="text-xs text-red-400 mb-1">{errors?.name}</span>}
      <FormInput
        name="E-mail"
        type="email"
        placeholder="Insira o e-mail"
        value={email}
        handleChange={handleChangeEmail}
      />
      {errors?.email && <span className="text-xs text-red-400 mb-1">{errors?.email}</span>}
      <FormSubmit text="Registrar" />
    </form>
  );
};
