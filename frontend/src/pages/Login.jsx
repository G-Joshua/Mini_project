import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const login = async () => {
    try {
      const response = await api.post("login/", loginData);

      localStorage.setItem(
        "username",
        response.data.username
      );

      navigate("/dashboard");
    } catch (err) {
      alert("Invalid Login");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />

      <br /><br />

      <button onClick={login}>Login</button>

       <br /><br />

    <button onClick={() => navigate("/register")}>
      Register
    </button>
    
  </div>
  );
}


export default Login;