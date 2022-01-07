import React from "react";
import { Image } from "react-bootstrap";
import message2 from "../Image/message.png";
import notification from "../Image/notification.svg";

function PageLayout() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col xl={6}">
            <h1>Tesla-Xpod Franchise</h1>
          </div>
          <div
            className="col xl={6}"
            style={{ justifyContent: "center", alignItems: "flex-end" }}
          >
            <img src={message2} alt="message" style={{ width: "35px" }} />
            <img
              src={notification}
              alt="message"
              style={{ width: "35px", color: "gray" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PageLayout;
