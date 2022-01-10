import React, { useState } from "react";
import { Button, DropdownButton, Image } from "react-bootstrap";

import profile from "../Image/profile.svg";
import Removal from "../Image/Removal.svg";
import message2 from "../Image/message.png";
import notification from "../Image/notification.svg";

import "../Component/pageLayout.css";
// import { Dropdown } from "bootstrap";

function PageLayout() {
  return (
    <>
      <div className="container">
        <div
          className="row"
          style={{
            alignItems: "self-end",
            borderBottom: "1px solid #e7e7e7",
            paddingBottom: "17px",
          }}
        >
          <div className="col xl={6}">
            <h1>Tesla-Xpod Franchise</h1>
          </div>
          <div className="col xl={6}" style={{ display: "contents" }}>
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
        <div className="row px-1 ">
          <div
            className="col-xxl-9"
            style={{ display: "flex", borderBottom: "1px solid #d8d8d8" }}
          >
            <div className="france-name">
              <p>franchisee Id</p>
              <div className="fsizer">0345026025</div>
            </div>
            <div className="france-name">
              <p>franchisee name</p>
              <div className="fsizer">tesla-xpod franchise</div>
            </div>
            <div className="france-name">
              <p>company name</p>
              <div className="fsizer">tesla company</div>
            </div>
            <div className="france-name">
              <p>gym name</p>
              <div className="fsizer">131 jalan bukit merah</div>
            </div>
            <div className="france-name">
              <p>franchise start date</p>
              <div className="fsizer">04.26.2021</div>
            </div>
            <div className="france-name">
              <p>franchise end date</p>
              <div className="fsizer">04.26.2025</div>
            </div>
          </div>

          <div className="col-xxl-3">
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
                padding: "5px 90px 5px 90px",
                backgroundColor: "#b6cb1c",
                borderWidth: "0px",
                borderRadius: "5px",
                color: "white",
              }}
            >
              <b>save</b>
            </button>
          </div>
        </div>

        <div
          style={{
            border: "1px solid black",
            margin: "40px -11px 0px -16px",
            borderRadius: "6px",
            borderColor: "#d8d8d8",
            paddingBottom: "25px",
            paddingLeft: "25px",
          }}
        >
          <h5 style={{ padding: "35px 0px 0px 40px" }}>
            <b>Display Franchise Information :</b>
          </h5>
          <div style={{ display: "flex" }}>
            <div className="data-list">
              <p>franchisee ID</p>
              <input type="text" name="franchisee_Id" />
            </div>
            <div className="data-list">
              <p>First Name</p>
              <input type="text" name="franchisee_Id" />
            </div>
            <div className="data-list">
              <p>Last Name</p>
              <input type="text" name="franchisee_Id" />
            </div>
            <div className="data-list">
              <p>Gender</p>
              <h6>
                <select
                  style={{
                    padding: "12px 20px",
                    backgroundColor: "#f4f4f4",
                    borderWidth: "0px",
                  }}
                >
                  <option>male</option>
                  <option>female</option>
                </select>
              </h6>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div className="data-list">
              <p>franchisee company name</p>
              <input type="text" name="franchisee_Id" />
            </div>
            <div className="data-list">
              <p>email address</p>
              <input type="text" name="franchisee_Id" />
            </div>
            <div className="data-list">
              <p>mobile</p>
              <input type="text" name="franchisee_Id" />
            </div>
            <div className="data-list">
              <p>DOB (optional)</p>
              <div style={{ display: "flex" }}>
                <div className="lister">
                  <select
                    style={{
                      padding: "10px 5px",
                      backgroundColor: "#f4f4f4",
                      borderWidth: "0px",
                      borderRadius: "5px",
                    }}
                  >
                    <option>00</option>
                  </select>
                </div>
                <div className="lister">
                  <select
                    style={{
                      padding: "10px 5px",
                      backgroundColor: "#f4f4f4",
                      borderWidth: "0px",
                      borderRadius: "5px",
                    }}
                  >
                    <option>01</option>
                  </select>
                </div>
                <div className="lister">
                  <select
                    style={{
                      padding: "10px 5px",
                      backgroundColor: "#f4f4f4",
                      borderWidth: "0px",
                      borderRadius: "5px",
                    }}
                  >
                    <option>2001</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            border: "1px solid #d8d8d8",
            margin: "40px -11px 0px -16px",
            borderRadius: "5px",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <h4 style={{ padding: "40px 0px 8px 50px" }}>
                <b>Display List of Gym franchised :</b>
              </h4>
              <div>
                <Button variant="dark" style={{ marginRight: "45px" }}>
                  <b>Add Gym</b>
                </Button>
              </div>
            </div>
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Name of Gym</th>
                  <th>Address</th>
                  <th>Google Map URL</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="col xl={2}">
                    <input
                      type="text"
                      name="Gym_data"
                      // name={"Gym"}
                      // value={Gym}
                    />
                  </td>
                  <td className="col xl={2}">
                    <input
                      type="text"
                      name="Gym_data"
                      // name={"Address"}
                      // value={Address}
                    />
                  </td>
                  <td className="col xl={2} ">
                    <input
                      type="text"
                      name="Gym_data"
                      // name={"GoogleMap"}
                      // value={GoogleMap}
                    />
                  </td>
                  <td className="col xl={2}">
                    <input type="date" name="Gym_data" />
                  </td>
                  <td className="col xl={2}">
                    <input type="date" name="Gym_data" />
                  </td>
                  <td className="col xl={2}">
                    <img
                      src={Removal}
                      alt="delete"
                      style={{
                        width: "30px",
                      }}
                      // onClick={() => handleRemove()}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                paddingRight: "40px",
                paddingBottom: "20px",
              }}
            >
              <div>
                <Button variant="outline-dark" style={{ margin: "0 10px 0 0" }}>
                  cancel
                </Button>
              </div>
              <div>
                <button
                  style={{
                    backgroundColor: "#b6cb1c",
                    borderWidth: "0px",
                    borderRadius: "5px",
                    color: "white",
                    width: "75px",
                    height: "35px",
                  }}
                >
                  save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageLayout;
