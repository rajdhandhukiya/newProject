import React from "react";
import profile from "../Image/profile.svg";
import message2 from "../Image/message.png";
import notification from "../Image/notification.svg";
import images from "../Image/images.jpeg";
import { Button } from "react-bootstrap";

function Cctv() {
  return (
    <>
      <div>
        <div className="container">
          <div
            className="row"
            style={{
              alignItems: "self-end",
              borderBottom: "1px solid #e7e7e7",
            }}
          >
            <div className="col-xxl-6">
              <h1>Franchise</h1>
            </div>
            <div
              className="col-xxl-6 "
              style={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <img src={message2} alt="message" style={{ width: "35px" }} />
              <img
                src={notification}
                alt="message"
                style={{ width: "35px", color: "gray", margin: "0 0 0 10px" }}
              />
              <p style={{ margin: "0px 11px 5px 60px" }}>martin loppes</p>
              <img src={profile} alt="profile" style={{ width: "35px" }} />
            </div>
          </div>
          <div
            className="row"
            style={{ marginTop: "15px", borderBottom: "1px solid #d8d8d8" }}
          >
            <div
              className="col-xxl-9 p-0"
              style={{
                alignItems: "center",
              }}
            >
              <div className="row">
                <div className="col-xxl-6">
                  <input type="text" placeholder="URL or Link" />
                </div>
                <div className="col-xxl-6">
                  <div>
                    <select
                      style={{
                        backgroundColor: "#f4f4f4",
                        borderWidth: "0px",
                        borderRadius: "4px",
                        padding: "8px",
                        height: "45px",
                      }}
                    >
                      <option>Select Camera</option>
                      <option>cam 1</option>
                      <option>cam 2</option>
                      <option>cam 3</option>
                      <option>cam 4</option>
                      <option>cam 5</option>
                      <option>cam 6</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xxl-3 "
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Button
                variant="outline-dark"
                style={{
                  width: "80px",
                  height: "35px",
                  padding: "3px 5px 3px 5px",
                }}
              >
                <b>cancel</b>
              </Button>
              <button
                style={{
                  margin: "11px 0px 10px 23px",
                  padding: "5px 0px 5px 0px",
                  backgroundColor: "#b6cb1c",
                  borderWidth: "0px",
                  borderRadius: "5px",
                  color: "white",
                  width: "100%",
                }}
              >
                <b>save</b>
              </button>
            </div>
          </div>
          <div className="row" style={{ marginTop: "15px" }}>
            <div className="col-xxl-12 p-0">
              <img src={images} alt="images_cam" style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cctv;
