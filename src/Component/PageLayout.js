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
          }}
        >
          <div className="col-xxl-6 col-lg-6 col-md-8">
            <h1>Tesla-Xpod Franchise</h1>
          </div>
          <div
            className="col-xxl-6 col-lg-6 col-md-4"
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
        <div className="row px-1 ">
          <div
            className="col-xxl-9 col-lg-10 "
            style={{
              display: "flex",
              borderBottom: "1px solid #d8d8d8",
            }}
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

          <div
            className="col-xxl-3 col-lg-2 "
            style={{
              display: "flex",
              alignItems: "center",
              borderBottom: "1px solid #d8d8d8",
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
              className="clicker"
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
        <div className="row">
          <div
            className="col-xxl-12 col-lg-12"
            style={{
              border: "1px solid #d8d8d8",
              padding: "30px",
              marginTop: "25px",
              borderRadius: "6px",
            }}
          >
            <h5 style={{}}>
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
              <div className="data-option">
                <p>Gender</p>
                <h6>
                  <select
                    style={{
                      backgroundColor: "#f4f4f4",
                      borderWidth: "0px",
                      borderRadius: "4px",
                      marginTop: "10px",
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
                        padding: "10px 15px",
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
                        padding: "10px 15px",
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
                        padding: "10px 15px",
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
        </div>
        <div className="row">
          <div
            className="col-xxl-12 col-lg-12"
            style={{
              border: "1px solid #d8d8d8",
              padding: "30px",
              borderRadius: "5px",
              marginTop: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <h5>
                <b>Display List of Gym franchised</b>
              </h5>
              <div>
                <Button
                  variant="dark"
                  style={{ marginRight: "35px", width: "120px" }}
                >
                  <b>Add Gym</b>
                </Button>
              </div>
            </div>
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
                  <td>
                    <input
                      className="table-data"
                      type="text"
                      name="franchisee_Id"
                    />
                  </td>
                  <td>
                    <input
                      className="table-data"
                      type="text"
                      name="franchisee_Id"
                    />
                  </td>
                  <td>
                    <input
                      className="table-data"
                      type="text"
                      name="franchisee_Id"
                    />
                  </td>
                  <td className="sizes">
                    <input
                      className="table-data"
                      type="date"
                      name="franchisee_Id"
                    />
                  </td>
                  <td className="sizes">
                    <input
                      className="table-data"
                      type="date"
                      name="franchisee_Id"
                    />
                  </td>
                  <td>
                    <img
                      src={Removal}
                      alt="delete"
                      style={{ width: "30px" }}
                      // onClick={() => handleRemove()}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "15px",
                  marginRight: "35px",
                }}
              >
                <div>
                  <Button
                    variant="outline-dark"
                    style={{ marginRight: "10px" }}
                  >
                    <b>cancel</b>
                  </Button>
                </div>
                <div>
                  <button
                    style={{
                      backgroundColor: "#b6cb1c",
                      borderWidth: "0px",
                      borderRadius: "5px",
                      color: "white",
                      width: "85px",
                      height: "37px",
                    }}
                  >
                    <b>save</b>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageLayout;
