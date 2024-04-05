import React, { useState, useEffect } from "react";
import "./Login.css";
// import Button from "react-bootstrap/Button";
// import { BiHide } from "react-icons/bi";
import IconButton from "@material-ui/core/IconButton";

import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import login from "../assests/login.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    

    try {
      e.preventDefault();

      const res = await axios.post("http://172.16.6.223:8080/login", {
        email: username,
        password,
      });
      console.log(res);
      
      if(res.data.success){
     
      if(res.data.Role === "admin"){
        navigate("/Admin");
      }
      else{
        navigate("/dashboard");
      }
    }
    else{
      alert("Wrong email or password");
    }
    } catch (error) {}
  };

  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({
      ...values,
      [prop]: event.target.value,
    });
  };
  // const togglePasswordVisibility = () => {
  //   const passwordInput = document.getElementById("password");
  //   if (passwordInput.type === "password") {
  //     passwordInput.type = "text";
  //   } else {
  //     passwordInput.type = "password";
  //   }
  // };

  return (
    <div
      className="container"
      style={{
        borderRadius: "30px",
        backgroundColor: "#ffffff",
        boxShadow: "20px 20px 60px #bebebe, -20px -20px 60px #ffffff",
        marginBottom: "20px",
      }}
    >
      <div className="row">
        <div className="col-lg-6">
          <div className="login-container">
            <div className="login-form-container">
              <div className="login-form-header">
                <h1>Trustt</h1>
              </div>
              <div className="login-form-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <Input
                      type="text"
                      id="username"
                      name="username"
                      className="form-control"
                      disableUnderline={true}
                      placeholder="Email"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />

                    <div className="form-group">
                      <Input
                        type={values.showPassword ? "text" : "password"}
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        fullWidth
                        id="password"
                        placeholder="Password"
                        disableUnderline={true}
                        style={{
                          border: "1px solid #ced4da",
                          borderRadius: "4px",
                          padding: "4px 10px",
                          marginTop: "10px",
                        }}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                            >
                              {values.showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    {/*  <div className="password-input">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-control"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <BiHide
                        className="password-toggle"
                        onClick={togglePasswordVisibility}
                      />
                    </div>   */}
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="rememberMe"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(!rememberMe)}
                    />
                    <label className="form-check-label" htmlFor="rememberMe">
                      Remember Me
                    </label>

                    <div className="">
                      <a href="#" className="FP">
                        Forgot Password?
                      </a>
                    </div>
                  </div>
                </form>
              </div>
              <div className="login-form-footer">
                <div>
                  {/* <Link
              to="/dashboard"
                    className="btn btn-primary"
                    size="lg"
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: 14,
                      fontFamily: "Cairo",
                      fontWeight: "700",
                      width: 350,
                      letterSpacing: 0.1,
                      wordWrap: "break-word",
                    }}
                  >
                    Login
                  </Link> */}
                  <button
                    className="btn btn-primary"
                    size="lg"
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: 14,
                      fontFamily: "Cairo",
                      fontWeight: "700",
                      width: 350,
                      letterSpacing: 0.1,
                      wordWrap: "break-word",
                    }}
                    onClick={handleSubmit}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <img className="img-fluid h-65" src={login} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
