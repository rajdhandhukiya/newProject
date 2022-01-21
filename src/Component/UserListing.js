import React from "react";
import profile from "../Image/profile.svg";
import message2 from "../Image/message.png";
import notification from "../Image/notification.svg";
import "./UserListing.css";
import Dumbell from "../Image/Dumbell.svg";
import plus from "../Image/plus.svg";
import graph from "../Image/graph.svg";
import calander from "../Image/calander.svg";
import { Button, Table } from "react-bootstrap";
import growth from "../Image/growth.svg";
import report from "../Image/report.svg";

import group from "../Image/group.svg";
import divide from "../Image/divide.svg";
function Userlisting() {
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
          <div className="col-xxl-6">
            <h1>DashBoard</h1>
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
        <div className="row" style={{ paddingTop: "10px" }}>
          <div className="col-xxl-4">
            <div
              style={{
                border: "1px solid #d8d8d8",
                borderRadius: "10px",
                padding: "19px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                borderWidth: "0px",
              }}
            >
              <div className="row">
                <div className="col-xxl-4">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <img src={Dumbell} alt="Dumbell" style={{ width: "25%" }} />

                    <p style={{ marginBottom: "1px", paddingLeft: "5px" }}>
                      TOTAL GYM
                    </p>
                  </div>
                </div>
                <div
                  className="col-xxl-8"
                  style={{
                    borderBottom: "1px solid #d8d8d8",
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <h1 style={{ color: "#b6cb1c" }}>765</h1>
                </div>
              </div>

              <div className="row">
                <div className="col-xxl-4" style={{ paddingTop: "10px" }}>
                  <Button
                    variant="white"
                    style={{
                      border: "1px dashed",
                      width: "80px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={plus}
                      alt="plus"
                      style={{ width: "30%", paddingRight: "5px" }}
                    />
                    New
                  </Button>
                </div>
                <div
                  className="col-xxl-4"
                  style={{
                    paddingTop: "10px",

                    justifyContent: "flex-end",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      // border: "1px solid black",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "80px",
                    }}
                  >
                    <p>SLOT</p>
                    <h3>10</h3>
                  </div>
                </div>
                <div className="col-xxl-4" style={{ paddingTop: "10px" }}>
                  <div
                    style={{
                      display: "flex",
                      // border: "1px solid black",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <p>DURATION</p>
                    <h3>5</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4">
            <div
              style={{
                border: "1px solid #d8d8d8",
                borderRadius: "10px",
                padding: "20px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                borderWidth: "0px",
              }}
            >
              <div className="row">
                <div className="col-xxl-4">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <img src={group} alt="group" style={{ width: "25%" }} />
                    <p style={{ marginBottom: "1px", paddingLeft: "5px" }}>
                      TOTAL GROUP'S
                    </p>
                  </div>
                </div>
                <div
                  className="col-xxl-4"
                  style={{
                    borderRight: "1px solid #d8d8d8",
                    justifyContent: "flex-end",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      display: "flex",

                      justifyContent: "space-between",
                      alignItems: "flex-end ",
                      width: "80px",
                    }}
                  >
                    <p>USERS</p>
                    <h3 style={{ marginLeft: "5px" }}>351</h3>
                  </div>
                </div>
                <div className="col-xxl-4">
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <h3 style={{ color: "#b6cb1c" }}>45%</h3>
                    <img
                      src={divide}
                      alt="divide"
                      style={{
                        backgroungColor: "#f4f4f4",
                        width: "40%",
                        borderradius: "50%",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="row" style={{ paddingTop: "10px" }}>
                <div className="col-xxl-3" style={{ paddingTop: "10px" }}>
                  <select
                    style={{
                      backgroundColor: "#f4f4f4",
                      borderWidth: "0px",
                      borderRadius: "4px",
                      padding: "8px",
                    }}
                  >
                    <option>30 Days</option>
                    <option>1 Week</option>
                  </select>
                </div>
                <div
                  className="col-xxl-5"
                  style={{
                    borderTop: "1px solid #d7d7d7",
                    paddingTop: "10px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      // border: "1px solid black",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <p>LAST 30 DAYS</p>
                    <h3>34</h3>
                  </div>
                </div>
                <div
                  className="col-xxl-4"
                  style={{ borderTop: "1px solid #d7d7d7", paddingTop: "10px" }}
                >
                  <div
                    style={{
                      display: "flex",
                      // border: "1px solid black",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <p>ACTIVE</p>
                    <h3>235</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4">
            <div
              style={{
                border: "1px solid #d8d8d8",
                borderRadius: "10px",
                padding: "15px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                borderWidth: "0px",
              }}
            >
              <div className="row">
                <div className="col-xxl-4">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <img src={Dumbell} alt="group" style={{ width: "25%" }} />
                    <p style={{ marginBottom: "1px", paddingLeft: "5px" }}>
                      TOTAL USERS
                    </p>
                  </div>
                </div>
                <div
                  className="col-xxl-8"
                  style={{
                    justifyContent: "flex-end",
                    display: "flex",
                  }}
                >
                  <h1>9.401</h1>
                </div>
                <div className="row" style={{ paddingTop: "10px" }}>
                  <div className="col-xxl-3" style={{ paddingTop: "10px" }}>
                    <Button
                      variant="white"
                      style={{
                        border: "1px dashed",
                        width: "80px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={plus}
                        alt="plus"
                        style={{ width: "30%", paddingRight: "5px" }}
                      />
                      New
                    </Button>
                  </div>
                  <div
                    className="col-xxl-5"
                    style={{
                      borderTop: "1px solid #d7d7d7",
                      paddingTop: "10px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <select
                        style={{
                          backgroundColor: "#f4f4f4",
                          borderWidth: "0px",
                          borderRadius: "4px",
                          padding: "8px",
                        }}
                      >
                        <option>30 Days</option>
                        <option>1 Week</option>
                      </select>
                      <h6>765</h6>
                    </div>
                  </div>
                  <div
                    className="col-xxl-4"
                    style={{
                      borderTop: "1px solid #d7d7d7",
                      paddingTop: "10px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        // border: "1px solid black",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <p>ACTIVE</p>
                      <h3>7.657</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{ paddingTop: "10px" }}>
            <div className="col-xxl-4">
              <div
                style={{
                  border: "1px solid #d8d8d8",
                  borderRadius: "10px",
                  padding: "19px",
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                  borderWidth: "0px",
                }}
              >
                <div className="row">
                  <div className="col-xxl-8">
                    <div>
                      <img
                        src={calander}
                        alt="calander"
                        style={{ width: "25px" }}
                      />
                      BOOKÍNG
                    </div>
                  </div>
                  <div className="col-xxl-4">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <select
                        style={{
                          backgroundColor: "#f4f4f4",
                          borderWidth: "0px",
                          borderRadius: "4px",
                          padding: "8px",
                        }}
                      >
                        <option>Today</option>
                        <option>1 Week</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xxl-6">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        paddingTop: "48px",
                      }}
                    >
                      <span>TOTAL SESSION</span>
                      <span>543</span>
                    </div>
                  </div>
                  <div className="col-xxl-6">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "end",
                        paddingTop: "15px",
                      }}
                    >
                      <img src={graph} alt="graph" style={{ width: "57px" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4">
              <div
                style={{
                  border: "1px solid #d8d8d8",
                  borderRadius: "10px",
                  padding: "29px",
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                  borderWidth: "0px",
                  marginLeft: "7px",
                }}
              >
                <div className="row">
                  <div className="col-xxl-4">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <img src={growth} alt="growth" style={{ width: "25%" }} />

                      <p style={{ marginBottom: "1px", paddingLeft: "5px" }}>
                        FINANCE
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-xxl-8"
                    style={{ borderBottom: "1px solid #d7d7d7" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around ",
                      }}
                    >
                      <p style={{ marginBottom: "4px" }}>DAILY EARNINGS</p>
                      <h3 style={{ color: "#b6cb1c" }}>$ 6.543</h3>
                    </div>
                  </div>
                </div>
                <div className="row" style={{ paddingTop: "10px" }}>
                  <div className="col-xxl-4">
                    <div>
                      <select
                        style={{
                          backgroundColor: "#f4f4f4",
                          borderWidth: "0px",
                          borderRadius: "4px",
                          padding: "8px",
                        }}
                      >
                        <option>Todays</option>
                        <option>1 Week</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-xxl-8">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around ",
                      }}
                    >
                      <p style={{ marginBottom: "4px" }}>LAST 30 DAYS</p>
                      <h4>$ 76.543</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 ">
              <div
                style={{
                  border: "1px solid #d8d8d8",
                  borderRadius: "10px",
                  padding: "20px",
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                  borderWidth: "0px",
                  marginLeft: "14px",
                }}
              >
                <div className="row">
                  <div className="col-xxl-4">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <img src={report} alt="report" style={{ width: "25%" }} />
                      <p style={{ marginBottom: "1px", paddingLeft: "5px" }}>
                        TOTAL REPORT
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-xxl-8"
                    style={{
                      borderBottom: "1px solid #d7d7d7",
                      paddingBottom: "15px",
                    }}
                  >
                    <div>
                      <select
                        style={{
                          backgroundColor: "#f4f4f4",
                          borderWidth: "0px",
                          borderRadius: "4px",
                          padding: "8px",
                          width: "210px",
                        }}
                      >
                        <option>Select Report</option>
                        <option> 1 week</option>
                        <option> 2 week</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row" style={{ paddingTop: "10px" }}>
                  <div className="col-xxl-3">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <input
                        type="checkbox"
                        role="switch"
                        style={{ width: "35px" }}
                      />
                      <div>
                        <span>
                          <b>PDF </b>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <input
                        type="checkbox"
                        role="switch"
                        style={{ width: "35px" }}
                      />
                      <div>
                        <span>
                          <b>XLS </b>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6">
                    <div style={{ display: "flex", justifyContent: "end" }}>
                      <Button variant="dark">Export</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ paddingTop: "15px" }}>
          <div className="col-xxl-6">LATEST BOOKING</div>
          <div className="col-xxl-6">LATEST USERS</div>
        </div>
        <div className="row" style={{ paddingTop: "15px" }}>
          <div className="col-xxl-6 p-0">
            <div
              style={{
                border: "1px solid #d8d8d8",
                borderRadius: "10px",
                padding: "20px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                borderWidth: "0px",
                marginLeft: "14px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "end" }}>
                <span>Vaccination Requirement</span>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                  />
                </div>
              </div>
              <Table className="table table-borderless">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Gym</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Tom Larek</td>
                    <td>131 Jalan bukit Merah</td>
                    <td>8:30pm - 9:30pm</td>
                  </tr>
                  <tr>
                    <td>Tom Larek</td>
                    <td>131 Jalan bukit Merah</td>
                    <td>8:30pm - 9:30pm</td>
                  </tr>
                  <tr>
                    <td>Tom Larek</td>
                    <td>131 Jalan bukit Merah</td>
                    <td>8:30pm - 9:30pm</td>
                  </tr>
                  <tr>
                    <td>Tom Larek</td>
                    <td>131 Jalan bukit Merah</td>
                    <td>8:30pm - 9:30pm</td>
                  </tr>
                  <tr>
                    <td>Tom Larek</td>
                    <td>131 Jalan bukit Merah</td>
                    <td>8:30pm - 9:30pm</td>
                  </tr>
                  <tr>
                    <td>Tom Larek</td>
                    <td>131 Jalan bukit Merah</td>
                    <td>8:30pm - 9:30pm</td>
                  </tr>
                  <tr>
                    <td>Tom Larek</td>
                    <td>131 Jalan bukit Merah</td>
                    <td>8:30pm - 9:30pm</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
          <div className="col-xxl-6 p-0">
            <div
              style={{
                border: "1px solid #d8d8d8",
                borderRadius: "10px",
                padding: "15px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                borderWidth: "0px",
                marginLeft: "14px",
              }}
            >
              <Table className="table table-borderless">
                <thead>
                  <tr>
                    <th>Name Surname</th>
                    <th>Username</th>
                    <th>Gender</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Erik Lopass</td>
                    <td>CrazyBoys</td>
                    <td>Male</td>
                    <td>Today 10:22 pm</td>
                  </tr>
                  <tr>
                    <td>Erik Lopass</td>
                    <td>CrazyBoys</td>
                    <td>Male</td>
                    <td>Today 10:22 pm</td>
                  </tr>
                  <tr>
                    <td>Erik Lopass</td>
                    <td>CrazyBoys</td>
                    <td>Male</td>
                    <td>Today 10:22 pm</td>
                  </tr>
                  <tr>
                    <td>Erik Lopass</td>
                    <td>CrazyBoys</td>
                    <td>Male</td>
                    <td>Today 10:22 pm</td>
                  </tr>
                  <tr>
                    <td>Erik Lopass</td>
                    <td>CrazyBoys</td>
                    <td>Male</td>
                    <td>Today 10:22 pm</td>
                  </tr>
                  <tr>
                    <td>Erik Lopass</td>
                    <td>CrazyBoys</td>
                    <td>Male</td>
                    <td>Today 10:22 pm</td>
                  </tr>
                  <tr>
                    <td>Erik Lopass</td>
                    <td>CrazyBoys</td>
                    <td>Male</td>
                    <td>Today 10:22 pm</td>
                  </tr>
                  <tr>
                    <td>Erik Lopass</td>
                    <td>CrazyBoys</td>
                    <td>Male</td>
                    <td>Today 10:22 pm</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Userlisting;
