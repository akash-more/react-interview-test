import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "./AppContext";

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const { setUsername } = useAppContext();
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleLogin = () => {
    if (loginData.username.trim() === "" || loginData.password === "") {
      alert("Please provide both username and password.");
      return;
    }
    setUsername(loginData.userName);
    navigate("/People");
  };
  return (
    <div style={{ height: "100vh", display: "flex", alignItems: "center" }}>
      <Grid container>
        <Grid item xs />
        <Grid item xs={6}>
          <div style={{ textAlign: "center" }}>
            <TextField
              id="standard-basic"
              label="Username"
              variant="standard"
              name="username"
              value={loginData.username}
              onChange={handleInputChange}
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
              name="password"
              type="password"
              value={loginData.password}
              onChange={handleInputChange}
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <Button onClick={handleLogin}>Enter Site</Button>
          </div>
        </Grid>
        <Grid item xs />
      </Grid>
    </div>
  );
};
export default Login;
