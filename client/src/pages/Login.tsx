import axios from "axios";
import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState("");

  const login = () => {
    axios
      .post(
        "http://localhost:4000/login",
        {
          username,
          password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
      });
  };

  const getUser = () => {
    axios
      .get("http://localhost:4000/user", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div>
      <h1>Login</h1>
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
      <button onClick={login}>Login</button>
      <button onClick={getUser}>Get User that's Logged in</button>
    </div>
  );
}
