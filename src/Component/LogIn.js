import React from "react";
import { Button } from "react-bootstrap";
import Image from "../Image/Gym.jpg";
import Logo from "../Image/X-pod-01.png";

function LogIn() {
  return (
    <>
      <div className="container">
        <div
          className="row authmain"
          style={{
            border: "1px solid #d8d8d8",
            borderRadius: "10px",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
          }}
        >
          <div className="col-xxl-8 p-0">
            <img
              src={Image}
              style={{
                width: "100%",
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
              }}
            />
          </div>
          <div className="col-xxl-4">
            <div>
              <img
                src={Logo}
                alt="notify"
                style={{
                  width: "150px",
                  margin: "45px 0px 45px 90px",
                }}
              />
            </div>
            <div className="container">
              <div>
                <input type="email" name="email" placeholder="Email Address" />
              </div>
              <div style={{ marginTop: "8px" }}>
                <input type="password" name="password" placeholder="Password" />
              </div>
              <div style={{ display: "flex", justifyContent: "end" }}>
                Forgot Password?
              </div>
              <div>
                <button
                  style={{
                    backgroundColor: "#b6cb1c",
                    borderWidth: "0px",
                    width: "100%",
                    height: "40px",
                    marginTop: "25px",
                    borderRadius: "5px",
                    color: "white",
                  }}
                >
                  <b>Login</b>
                </button>
              </div>
              <div style={{ marginTop: "70px" }}>
                <div>
                  <p>Don't have an account yet?</p>
                </div>
                <div>
                  <Button
                    variant="outline-dark"
                    style={{
                      borderRadius: "5px",

                      width: "100%",
                      height: "40px",
                    }}
                  >
                    <b>Register</b>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogIn;
