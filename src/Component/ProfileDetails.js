import React from "react";
import profile from "../Image/profile.svg";
import message2 from "../Image/message.png";
import file from "../Image/file.svg";
import camera from "../Image/camera.svg";
import notification from "../Image/notification.svg";
import BackProfile from "../Image/background.jpg";
import { Button, Pagination, Table } from "react-bootstrap";

import "../Component/ProfileDetails.css";
function ProfileDetails() {
  let active = 2;
  let items = [];
  for (let number = 1; number <= 15; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <>
      <div>
        <div className="container-fluid">
          <div
            className="row"
            style={{
              alignItems: "self-end",
              borderBottom: "1px solid #e7e7e7",
            }}
          >
            <div className="col-xxl-6 col-lg-8">
              <h1>Tom Larek</h1>
            </div>
            <div
              className="col-xxl-6 col-lg-4"
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
              className="col-xxl-9 col-xl-9 col-lg-9"
              style={{
                display: "flex",
                borderBottom: "1px solid #d8d8d8",
              }}
            >
              <div className="france-name">
                <p>Id</p>
                <div className="fsizer">00034</div>
              </div>
              <div className="france-name">
                <p>Member Status</p>
                <div className="fsizer">Active</div>
              </div>
              <div className="france-name">
                <p>Username</p>
                <div className="fsizer">CrazyBoys</div>
              </div>
              <div className="france-name">
                <p>First name</p>
                <div className="fsizer">Tom Larek</div>
              </div>
              <div className="france-name">
                <p>Gender</p>
                <div className="fsizer">Male</div>
              </div>
              <div className="france-name">
                <p>Group Status</p>
                <div className="fsizer">Gold</div>
              </div>
              <div className="france-name">
                <p>Number of Booking</p>
                <div className="fsizer">42</div>
              </div>
              <div className="france-name">
                <p>Total Spent</p>
                <div className="fsizer">
                  <b>$ 754.00</b>
                </div>
              </div>
            </div>

            <div
              className="col-xxl-3 col-xl-3 col-lg-3"
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

            <div className="row" style={{ padding: "25px 20px 0px 0px" }}>
              <div
                className="col-xxl-3 col-xl-3 col-lg-3"
                // style={{ marginTop: "25px" }}
              >
                <div
                  className="col-xxl-3  col-lg-2"
                  style={{
                    position: "relative",
                    width: "100%",
                    marginTop: "3px",
                  }}
                >
                  <img
                    src={BackProfile}
                    alt="backprofile"
                    style={{
                      borderRadius: "5px",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <button
                    style={{
                      position: "absolute",
                      left: "15px",
                      bottom: "20px",
                      borderWidth: "0px",
                      borderRadius: "5px",
                      backgroundColor: "white",
                      marginLeft: "5px",
                    }}
                  >
                    <img
                      src={camera}
                      alt="message1"
                      style={{
                        width: "20px",
                        marginRight: "10px",
                        // backgroundColor: "#b6cb1c",
                      }}
                    />
                    <b style={{ fontSize: "12px" }}>Change Photo</b>
                  </button>
                </div>
                <div
                  style={{
                    border: "1px solid #d8d8d8",
                    padding: "20px",
                    borderRadius: "5px",
                    marginTop: "10px",
                  }}
                >
                  <div
                    style={{
                      padding: "10px",
                      display: "flex",

                      justifyContent: "end",
                      borderBottom: "dashed",
                      borderBottomWidth: "thin",
                    }}
                  >
                    <button
                      style={{
                        backgroundColor: "white",
                        borderWidth: "1px",
                        borderColor: "#b6cb1c",
                        borderRadius: "5px",
                      }}
                    >
                      Message User
                    </button>
                  </div>
                  <div
                    className="row"
                    style={{
                      display: "flex",
                      padding: "10px",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="col-xxl-8 col-xl-7 col-lg-6">
                      <div className="wellback">
                        <p>Well Balance</p>
                        <h5 style={{ color: "#b6cb1c" }}>$588.00 USD</h5>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-5 col-lg-6">
                      <div className="wellback">
                        <p>Total Spent</p>
                        <h5>$744.00</h5>
                      </div>
                    </div>
                  </div>
                  <div
                    className="row"
                    style={{
                      padding: "10px 10px 35px",
                      borderBottom: "dashed",
                      borderBottomWidth: "thin",
                    }}
                  >
                    <div className="col-xxl-3  col-lg-5">
                      <Button
                        className="Credit"
                        variant="outline-dark"
                        style={{ width: "78px", height: "35px" }}
                      >
                        <b>Credit</b>
                      </Button>
                    </div>
                    <div className="col-xxl-9 col-lg-7">
                      <Button
                        className="Debit"
                        variant="outline-dark"
                        style={{
                          width: "85px",
                          height: "35px",
                        }}
                      >
                        <b>Debit</b>
                      </Button>
                    </div>
                  </div>

                  <div
                    className="row"
                    style={{
                      padding: "10px 10px 35px",
                      borderBottom: "dashed",
                      borderBottomWidth: "thin",
                    }}
                  >
                    <div className="col-xxl-12 col-xl-12 col-lg-12">
                      <p>Default Credit Card</p>
                    </div>
                    <div
                      className="row"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <div className="col-xxl-8 col-xl-8 col-lg-8">
                        <p>My Card TEB</p>
                        <p>**** **** 3552</p>
                      </div>
                      <div className="col-xxl-4 col-xl-8 col-lg-4">
                        <Button
                          variant="outline-dark"
                          style={{
                            width: "80px",
                            height: "35px",
                          }}
                        >
                          Charge
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="row" style={{ paddingTop: "30px" }}>
                    <div className="col-xxl-3 col-lg-4">
                      <Button
                        variant="outline-dark"
                        style={{ width: "97px", height: "35px" }}
                      >
                        <b>
                          <p style={{ fontSize: "12px" }}>Delete User</p>
                        </b>
                      </Button>
                    </div>
                    <div className="col-xxl-9 col-lg-8">
                      <Button
                        className="BanUser"
                        variant="outline-dark"
                        style={{
                          width: "85px",
                          height: "35px",
                          // marginLeft: "35px",
                        }}
                      >
                        <b>
                          <p style={{ fontSize: "12px" }}>Ban User</p>
                        </b>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-9 col-xl-9 col-lg-9">
                <div
                  className="row"
                  style={{
                    display: "flex",
                    padding: "25px",
                    border: "1px solid #d8d8d8",
                    borderRadius: "5px",
                  }}
                >
                  <div className="col-xxl-3 col-xl-3 col-lg-3 profile-list">
                    <p>userame</p>
                    <input type="text" name="franchisee_Id" />
                  </div>
                  <div
                    className="col-xxl-3 col-xl-3 col-lg-3 profile-list"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ width: "50%" }}>
                      <p>Group Status</p>
                      <select
                        style={{
                          padding: "12px 15px",
                          backgroundColor: "#f4f4f4",
                          borderWidth: "0px",
                          borderRadius: "5px",
                        }}
                      >
                        <option>Gold</option>
                        <option>silver</option>
                        <option>Platinum</option>
                        <option>dimond</option>
                        <option>Ace</option>
                        <option>Conquror</option>
                      </select>
                    </div>
                    <div>
                      <p>Group Expire Date</p>
                      <input type="date" Id="franchisee_Id2" />
                    </div>
                  </div>

                  <div className="col-xxl-3 col-xl-3 col-lg-3 profile-list">
                    <p>Group Renewal Status</p>
                    <select
                      style={{
                        padding: "12px 15px",
                        backgroundColor: "#f4f4f4",
                        borderWidth: "0px",
                        borderRadius: "5px",
                      }}
                    >
                      <option>Automatic</option>
                      <option>Direct</option>
                      <option>other </option>
                    </select>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-3 profile-list">
                    <p>Vaccination Status</p>
                    <select
                      style={{
                        padding: "12px 15px",
                        backgroundColor: "#f4f4f4",
                        borderWidth: "0px",
                        borderRadius: "5px",
                      }}
                    >
                      <option>Verified</option>
                      <option>1 Dose</option>
                    </select>
                  </div>

                  <div className="row" style={{ marginTop: "10px" }}>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 profile-list">
                      <p>First Name</p>
                      <input type="text" name="franchisee_Id" />
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 profile-list">
                      <p>Last Name</p>
                      <input type="text" name="franchisee_Id" />
                    </div>
                    <div
                      className="col-xxl-3 col-xl-3 col-lg-3 profile-list"
                      style={{ padding: "0 20px" }}
                    >
                      <p>Gender</p>
                      <select
                        style={{
                          padding: "12px 15px",
                          backgroundColor: "#f4f4f4",
                          borderWidth: "0px",
                          borderRadius: "5px",
                        }}
                      >
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 profile-list">
                      <button
                        style={{
                          width: "110px",
                          height: "82px",
                          borderWidth: "0px",
                          margin: "5px 15px ",
                        }}
                      >
                        <img
                          style={{ width: "50px", height: "45px" }}
                          src={file}
                          alt="verified file"
                        />
                        <div
                          style={{
                            color: "1px solid #838383",
                            fontSize: "12px",
                          }}
                        >
                          click here to view file
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xxl-3 col-xl-3 col-lg-3 profile-list">
                      <p>Email Address</p>
                      <input type="email" alt="email address" />
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 profile-list">
                      <p>Mobile</p>
                      <input type="number" alt="mobile number" />
                    </div>
                    <div className="profile-list col-xxl-6 col-xl-6 col-lg-6">
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
                <div
                  className="row"
                  style={{
                    border: "1px solid #d8d8d8",
                    borderRadius: "5px",
                    marginTop: "25px",
                    padding: "20px",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div>
                      <button
                        style={{
                          borderWidth: "0px",
                          backgroundColor: "white",
                        }}
                      >
                        CURRENT BOOKING
                      </button>
                    </div>
                    <div>
                      <button
                        style={{ borderWidth: "0px", backgroundColor: "white" }}
                      >
                        BOOKING HISTORY
                      </button>
                    </div>
                  </div>
                  <Table>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Gym Type</th>
                        <th>Address</th>
                        <th>Data-Hour</th>
                        <th>Price</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>0034330</td>
                        <td>Slot</td>
                        <td>131 Jalan Bukit Merah</td>
                        <td>04.23.2021 8:30 Pm - 9:30 Pm</td>
                        <td>$7.00 Done</td>
                        <td>Complete</td>
                      </tr>
                      <tr>
                        <td>0034330</td>
                        <td>Slot</td>
                        <td>131 Jalan Bukit Merah</td>
                        <td>04.23.2021 8:30 Pm - 9:30 Pm</td>
                        <td>$7.00 Done</td>
                        <td>Complete</td>
                      </tr>
                      <tr>
                        <td>0034330</td>
                        <td>Slot</td>
                        <td>131 Jalan Bukit Merah</td>
                        <td>04.23.2021 8:30 Pm - 9:30 Pm</td>
                        <td>$7.00 Done</td>
                        <td>Complete</td>
                      </tr>
                      <tr>
                        <td>0034330</td>
                        <td>Slot</td>
                        <td>131 Jalan Bukit Merah</td>
                        <td>04.23.2021 8:30 Pm - 9:30 Pm</td>
                        <td>$7.00 Done</td>
                        <td>Complete</td>
                      </tr>
                      <tr>
                        <td>0034330</td>
                        <td>Slot</td>
                        <td>131 Jalan Bukit Merah</td>
                        <td>04.23.2021 8:30 Pm - 9:30 Pm</td>
                        <td>$7.00 Done</td>
                        <td>Complete</td>
                      </tr>
                      <tr>
                        <td>0034330</td>
                        <td>Slot</td>
                        <td>131 Jalan Bukit Merah</td>
                        <td>04.23.2021 8:30 Pm - 9:30 Pm</td>
                        <td>$7.00 Done</td>
                        <td>Complete</td>
                      </tr>
                      <tr>
                        <td>0034330</td>
                        <td>Slot</td>
                        <td>131 Jalan Bukit Merah</td>
                        <td>04.23.2021 8:30 Pm - 9:30 Pm</td>
                        <td>$7.00 Done</td>
                        <td>Complete</td>
                      </tr>
                      <tr>
                        <td>0034330</td>
                        <td>Slot</td>
                        <td>131 Jalan Bukit Merah</td>
                        <td>04.23.2021 8:30 Pm - 9:30 Pm</td>
                        <td>$7.00 Done</td>
                        <td>Complete</td>
                      </tr>
                      <tr>
                        <td>0034330</td>
                        <td>Slot</td>
                        <td>131 Jalan Bukit Merah</td>
                        <td>04.23.2021 8:30 Pm - 9:30 Pm</td>
                        <td>$7.00 Done</td>
                        <td>Complete</td>
                      </tr>
                      <tr>
                        <td>0034330</td>
                        <td>Slot</td>
                        <td>131 Jalan Bukit Merah</td>
                        <td>04.23.2021 8:30 Pm - 9:30 Pm</td>
                        <td>$7.00 Done</td>
                        <td>Complete</td>
                      </tr>
                    </tbody>
                  </Table>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      marginTop: "20px",
                    }}
                  >
                    <Pagination size="sm">{items}</Pagination>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileDetails;
