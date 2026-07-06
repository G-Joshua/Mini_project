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
      <h2   style={{
        color: "blue",
        border: "1px solid black",
        borderRadius: "10px",
        backgroundColor: "lightgray",
        padding: "10px",
        textAlign: "center",
        justifyContent: "center",
       }}>Login</h2>
       
      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
        style={{
            margin: "10px",
            padding: "5px",
            borderRadius: "5px",
            border: "1px solid gray",
          }}    
      />
      

      <br /><br />

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
         style={{
            margin: "10px",
            padding: "5px",
            borderRadius: "5px",
            border: "1px solid gray",
          }}  
      />

      <br /><br />

      <button onClick={login}
      style={{
        fontWeight: "bold",
        color: "blue",
        cursor: "pointer",
      }}>Login</button>

       <br /><br />

    <button onClick={() => navigate("/register")}
        style={{
          fontWeight: "bold",
          color: "blue",
          cursor: "pointer",
        }}>
      Register
    </button>
    
  </div>
  );
}


export default Login;