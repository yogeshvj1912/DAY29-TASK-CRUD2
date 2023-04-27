import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState(null);
  const handleChange = (event) => {
    setInput(event.target.value);
    console.log(input);
  };
  const handleClick = () => {
    if (input === null) {
      alert("Please Enter Email and Password");
    } else {
      navigate("/home");
    }
  };

  return (
    <div>
      <div className="container my-2">
        <div className="heading mt-3">
          <h1 className="text-center p-2">Welcome Buddy</h1>
        </div>
        <div className="row my-3" id="cardss">
          <div className="col img-div">
            <img
              src="https://res.cloudinary.com/fleetnation/image/private/c_fit,w_1120/g_south,l_text:style_gothic2:%C2%A9%20Stuart%20Miles,o_20,y_10/g_center,l_watermark4,o_25,y_50/v1482318198/ez3oxx6mwb72eh7xbpip.jpg"
              alt="Login"
              className="img-width"
            />
          </div>
          <div className="col d-flex login-id">
            <form className="form form-group  login-id">
              <div className="form-group m-3">
                <label htmlFor="email">
                  <b>Email</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter email"
                  id="email"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group m-3">
                <label htmlFor="pass">
                  <b>Password</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="pass"
                  placeholder="Enter password"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="from-group m-3 d-flex justify-content-center">
                <button
                  className="btn btn-primary text-center col-8"
                  onClick={handleClick}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;