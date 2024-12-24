import { FaLinkedin, FaGithub } from "react-icons/fa";

import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="flex justify-between items-center px-8 py-3">
      <div className="font-semibold text-slate-50">
        <p>Desenvolvido por:</p>
        <p>Luis Fernando Alves de Lima</p>
        <p>lima.luisfernando.dev@gmail.com</p>
      </div>
      <div className="flex justify-center items-center gap-4 text-5xl text-slate-50">
        <FaLinkedin />
        <FaGithub />
      </div>
    </footer>
  );
};
