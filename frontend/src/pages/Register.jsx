import {useState} from "react";
import api from "../api/axios";

function Register() {
    const[user, setUser] = useState({
        username: "",
        email: "",
        password: "",
    });
    const handleChange = (e) => {setUser({...user,[e.target.name]: e.target.value})};

    const register = async () => {
        try {
            await api.post("register/", user);
            alert("Registration successful");
        } catch (err) {
            alert("Registration failed");
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
 <h2 style={{
    color: "blue",
    padding: "12px",
    marginBottom: "25px",
    fontWeight: "bold",
    fontSize: "32px",
  }}>Register</h2>
    <input
     name="username"
     placeholder="Username"
     onChange={handleChange}
     style={{
     width: "100%",
     padding: "12px",
     marginBottom: "20px",
     borderRadius: "5px",
     border: "1px solid gray",
     boxSizing: "border-box",
     }}
     />
    <br /><br />
    <input
    name="email"
    placeholder="Email"
    onChange={handleChange}
    style={{width: "100%",
    padding: "12px",
    marginBottom: "20px",
    borderRadius: "5px",
    border: "1px solid gray",
    boxSizing: "border-box",}}
                
 />
            <br /><br />

 <input
   type="password"
   name="password"
   placeholder="Password"
   onChange={handleChange}
   style={{
   width: "100%",
   marginBottom: "20px",
   borderRadius: "5px",
   border: "1px solid gray",
   boxSizing: "border-box",
   padding: "12px",
   }}
            />
            <br /><br />
<button onClick={register}
  style={{
  width: "100%",
  marginBottom: "15px",
  borderRadius: "50px",
  border: "1px solid gray",
  boxSizing: "border-box",
  color:"white",
  padding:"7px",
  backgroundColor:"blue",
  border:"none",
  cursor:"pointer",
            }}>
                Register
            </button>
        </div>
    );
}

export default Register;