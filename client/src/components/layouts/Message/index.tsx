import React, { useState, useEffect } from "react";

import { message } from "../../../types/message";

import './Message.scss'

export const Message: React.FC<message> = ({ type, msg }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!msg) {
      setVisible(false);
      return;
    }
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [msg]);

  return <>{visible && <div className={`message ${type}`}>{msg}</div>}</>;
};
