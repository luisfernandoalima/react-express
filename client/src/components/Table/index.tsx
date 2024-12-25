import { useEffect, useState } from "react";

import "./Table.scss";

export const Table = () => {
  const [user, setUser] = useState([]);
  const [usersCount, setUsersCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8081/api/list-users", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUser(data);
        setUsersCount(data.length)
      });
  }, []);
  
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>E-mail</th>
        </tr>
      </thead>
      <tbody>
        {user.length > 0 &&
          user.map((user) => (
            <tr key={user["_id"]}>
              <td>{user["_id"]}</td>
              <td>{user["name"]}</td>
              <td>{user["email"]}</td>
            </tr>
          ))}
      </tbody>
      <tfoot>
        <tr>
          <th colSpan={2}>Total de usuários:</th>
          <th>{usersCount}</th>
        </tr>
      </tfoot>
    </table>
  );
};
