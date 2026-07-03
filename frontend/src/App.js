import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/welcome/")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

return (
  <div
    style={{
      textAlign: "center",
      marginTop: "auto",
      fontFamily: "Helvetica, Arial, sans-serif",
      fontSize: "24px",
      color: "#e5c42f"
    }}
  >
    <h1>{message}</h1>
  </div>
);
}
export default App;