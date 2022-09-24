import React from "react";
import UserContext from "./UserContext";
import { useContext, useState } from "react";

export default function Profile() {
  const { user, setUser } = useContext(UserContext);
  const { port, setPort } = useState(true);
  return (
    <div>
      <button>Login</button>
      <br />
      {JSON.stringify(user)}
      <br />
      <button>Log Out</button>
    </div>
  );
}
