import React from "react";

import { FormInput } from "./Input";
import { FormSubmit } from "./Submit";

import { FormsProps } from "../../types/formProps";
import "./Form.scss";

export const Forms: React.FC<FormsProps> = ({ title }) => {

    


  return (
    <form className="py-3 px-5">
      <h2 className="text-2xl font-semibold text-center ">{title}</h2>
      <FormInput name={"Nome"} type="text" placeholder="Insira o nome" />
      <FormInput name="E-mail" type="email" placeholder="Insira o e-mail"/>
      <FormSubmit text="Registrar"/>
    </form>
  );
};
