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
        <div>
            <h2>Register</h2>
            <input
                name="username"
                placeholder="Username"
                onChange={handleChange}
            />
            <br /><br />
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
            <button onClick={register}>Register</button>
        </div>
    );
}

export default Register;