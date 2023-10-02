
import React, { useContext } from "react";
import { AuthContext } from "../../context/context";

function Login() {
const{loginData,user,handleInputChange ,handleLogin} = useContext(AuthContext)

  console.log(user)
  return (
    <div>
      <h2>Login</h2>
      <form>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={loginData.username}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
