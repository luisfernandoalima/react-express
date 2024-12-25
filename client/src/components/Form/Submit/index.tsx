import React from "react";

import { SubmitProps } from "../../../types/formProps";
import "./FormSubmit.scss";

export const FormSubmit: React.FC<SubmitProps> = ({ text }) => {
  return (
    <input
      type="submit"
      value={text}
      className="submit_button py-1 text-xl text-slate-50 font-semibold"
    />
  );
};
