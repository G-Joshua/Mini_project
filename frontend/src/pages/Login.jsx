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
    
   <div
  style={{
    width: "350px",
    margin: "80px auto",
    padding: "40px",
    border: "2px solid #333",
    borderRadius: "15px",
    background: "white",
    textAlign: "center",
  }}
>
<h2
  style={{
    color: "blue",
    border: "1px solid black",
    borderRadius: "10px",
    backgroundColor: "lightgray",
    padding: "12px",
    marginBottom: "25px",
  }}
>
  Login
</h2>
       
 <input
  name="email"
  placeholder="Email"
  onChange={handleChange}
  style={{
    width: "100%",
    padding: "12px",
    marginBottom: "20px",
    borderRadius: "8px",
    border: "1px solid gray",
    boxSizing: "border-box",
  }}
/>

      <br /><br />

<input
  type="password"
  name="password"
  placeholder="Password"
  onChange={handleChange}
  style={{
    width: "100%",
    padding: "12px",
    marginBottom: "20px",
    borderRadius: "8px",
    border: "1px solid gray",
    boxSizing: "border-box",
  }}
/>

      <br /><br />

<button
  onClick={login}
  style={{
    width: "100%",
    padding: "12px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
    marginBottom: "15px",
  }}
>
  Login
</button>

       <br /><br />

<button
  onClick={() => navigate("/register")}
  style={{
    width: "100%",
    padding: "12px",
    backgroundColor: "#10b981",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
  }}
>
  Register
</button>
    
  </div>
  
  
  );
}


export default Login;