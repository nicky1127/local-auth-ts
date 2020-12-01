import axios from "axios";
import React, { useState } from "react";

export default function Register() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState("");

  const register = () => {
    axios
      .post(
        "http://localhost:4000/register",
        {
          username,
          password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data === "success") {
          window.location.href = "/";
        }
      });
  };

  return (
    <div>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={register}>Register</button>
    </div>
  );
}
