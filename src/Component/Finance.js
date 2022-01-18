import React from "react";
import growth from "../Image/growth.svg";
import wallet from "../Image/wallet.svg";
import group from "../Image/group.svg";
import "./Finance.css";

import profile from "../Image/profile.svg";
import message2 from "../Image/message.png";
import notification from "../Image/notification.svg";
import { Button, Table } from "react-bootstrap";

function Finance() {
  return (
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
            <h1>Finance</h1>
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
        <div className="row" style={{ marginTop: "10px" }}>
          <div className="col-xxl-4 ">
            <div
              style={{
                border: "1px solid #d8d8d8",
                borderRadius: "10px",
                padding: "10px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
              }}
            >
              <div
                className="row"
                style={{ borderBottom: "1px solid #d8d8d8" }}
              >
                <div className="col-xxl-4">
                  <img src={growth} style={{ width: "50px" }} />
                  <p>EARNINGS</p>
                </div>
                <div className="col-xxl-4">
                  <p
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    SLOT
                    <b>
                      <h6>$ 3.543</h6>
                    </b>
                  </p>
                  <p
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    DURATION
                    <b>
                      <h6>$3.000</h6>
                    </b>
                  </p>
                </div>
                <div className="col-xxl-4">
                  <p>DAILY EARNINGS</p>
                  <h3 style={{ color: "#b6cb1c" }}>
                    <b>$6.543</b>
                  </h3>
                </div>
              </div>
              <div className="row" style={{ marginTop: "15px" }}>
                <div className="col-xxl-4">
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
                <div className="col-xxl-4">
                  <p
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    SLOT
                    <b>
                      <h6>$ 240</h6>
                    </b>
                  </p>
                  <p
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    DURATION
                    <b>
                      <h6>$ 300</h6>
                    </b>
                  </p>
                </div>
                <div className="col-xxl-4">
                  <p>LAST 30 DAYS</p>
                  <h3>
                    <b>$ 540</b>
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-4">
            <div
              style={{
                border: "1px solid #d8d8d8",
                borderRadius: "10px",
                padding: "10px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
              }}
            >
              <div
                className="row"
                style={{ borderBottom: "1px solid #d8d8d8" }}
              >
                <div className="col-xxl-8">
                  <img src={wallet} alt="wallet" style={{ width: "50px" }} />
                  <p>WALLET BALANCE</p>
                </div>
                <div className="col-xxl-4">
                  <p>TOTAL DEPOSIT</p>
                  <h3 style={{ color: "#b6cb1c" }}>$8.902</h3>
                </div>
              </div>
              <div
                className="row"
                style={{ marginTop: "15px", padding: "10px" }}
              >
                <div style={{ display: "flex", justifyContent: "end" }}>
                  <div>
                    <p>TOTAL BALANCE</p>
                    <h3>
                      <b>$876.350</b>
                    </h3>
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
                padding: "10px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
              }}
            >
              <div
                className="row"
                style={{ borderBottom: "1px solid #d8d8d8" }}
              >
                <div className="col-xxl-8">
                  <img src={group} alt="group" style={{ width: "50px" }} />
                  <p>TOTAL GROUP'S FEE EARNED</p>
                </div>
                <div className="col-xxl-4">
                  <p>DAILY EARNINGS</p>
                  <h3 style={{ color: "#b6cb1c" }}>$5.200</h3>
                </div>
              </div>
              <div
                className="row"
                style={{ marginTop: "15px", padding: "10px" }}
              >
                <div className="col-xxl-6">
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
                <div className="col-xxl-6">
                  <div style={{ display: "flex", justifyContent: "end" }}>
                    <div>
                      <p>LAST 30 DAYS</p>
                      <h3>
                        <b>$42.680</b>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="row"
          style={{
            marginTop: "35px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="col-xxl-2">
            <div>ALL TRANSACTIONS</div>
          </div>
          <div className="col-xxl-8">
            <div style={{ display: "flex", justifyContent: "space-arround" }}>
              <div>
                <input type="text" placeholder="Search Notifications" />
              </div>
              <div>
                <input type="date" />
              </div>
              <div>
                <input type="date" placeholder="End Date" />
              </div>
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
                  <option>type</option>
                  <option>booking</option>
                  <option>top up</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-xxl-2">
            <div style={{ display: "flex", justifyContent: "end" }}>
              <Button variant="dark">Export Selected</Button>
            </div>
          </div>
        </div>

        <Table>
          <thead>
            <tr>
              <th></th>
              <th>transaction Id</th>
              <th> Date And Time</th>
              <th>Type</th>
              <th> User Information</th>
              <th></th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>0003344</td>
              <td>04.26.2001</td>
              <td>Booking</td>
              <td>Tom Larek </td>
              <td> Male</td>
              <td>$14</td>
            </tr>

            <tr>
              <td></td>
              <td>0003344</td>
              <td>04.26.2001</td>
              <td>Booking</td>
              <td>Tom Larek </td>
              <td> Male</td>
              <td>$14</td>
            </tr>

            <tr>
              <td></td>
              <td>0003344</td>
              <td>04.26.2001</td>
              <td>Booking</td>
              <td>Tom Larek </td>
              <td> Male</td>
              <td>$14</td>
            </tr>

            <tr>
              <td></td>
              <td>0003344</td>
              <td>04.26.2001</td>
              <td>Booking</td>
              <td>Tom Larek </td>
              <td> Male</td>
              <td>$14</td>
            </tr>

            <tr>
              <td></td>
              <td>0003344</td>
              <td>04.26.2001</td>
              <td>Booking</td>
              <td>Tom Larek </td>
              <td> Male</td>
              <td>$14</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Finance;
