import React, { useEffect, useState } from "react";
import profile from "../Image/profile.svg";
import message2 from "../Image/message.png";
import notification from "../Image/notification.svg";
import Edit from "../Image/Edit.svg";
import { Button, Pagination, Table } from "react-bootstrap";
import removal2 from "../Image/removal2.svg";
import { useDispatch, useSelector } from "react-redux";
import CounterSplice, { counterSlice, increment } from "../CounterSplice";
import axios from "axios";

function Franchise() {
  const dispatch = useDispatch();
  const FranchiseTable = useSelector((state) => state.counter.tableData);
  const [data, setData] = useState();
  console.log("ffff", FranchiseTable);

  let active = 2;
  let items = [];
  for (let number = 1; number <= 15; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  useEffect(() => {
    // const { data } = await axios.get(
    //   "https://jsonplaceholder.typicode.com/todos"
    // );
    // console.log("datatata", data);
    dispatch(increment());
  }, []);

  // const FranchiseData = [
  //   {
  //     userId: "1",
  //     id: "1",
  //     title: "sunt",
  //     body: "quira",
  //   },
  // ];

  return (
    <div>
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
            style={{
              marginTop: "10px",
              borderBottom: "1px solid #d7d7d7",
              paddingBottom: "10px",
            }}
          >
            <div className="col-xxl-5 p-0">
              <div>
                <input type="text" placeholder="Search Franchise" />
              </div>
            </div>
            <div className="col-xxl-4">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <div>
                  <select
                    style={{
                      backgroundColor: "white",
                      borderWidth: "0px",
                      borderRadius: "4px",
                      padding: "8px",
                    }}
                  >
                    <option>All</option>
                    <option>Custom</option>
                  </select>
                </div>
                <div>
                  <select
                    style={{
                      backgroundColor: "white",
                      borderWidth: "0px",
                      borderRadius: "4px",
                      padding: "8px",
                    }}
                  >
                    <option>Newest</option>
                    <option>Oldest</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 p-0">
              <div style={{ display: "flex", justifyContent: "end" }}>
                <Button variant="dark">Create Franchisee Account</Button>
              </div>
            </div>
          </div>

          <Table>
            <thead>
              <tr>
                <th>Franchise Id</th>
                <th>Franchise Name</th>
                <th>company Name</th>
                <th>Gym Name</th>
                <th>Start Date</th>
                <th>End Date</th>
              </tr>
            </thead>
            <tbody>
              {FranchiseTable.map((item, index) => {
                console.log("=============>", item);
                return (
                  <tr>
                    <td>{item.userId}</td>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                    <td>{item.StartDate}</td>
                    <td>{item.EndDate}</td>
                    <td>
                      <button
                        style={{
                          borderWidth: "0px",
                          backgroundColor: "#d4d4d4",
                          borderRadius: "50%",
                          padding: "6px",
                          width: "35px ",
                        }}
                      >
                        <img src={Edit} alt="edit" style={{ width: "10px" }} />
                      </button>
                      {/* </td>
                <td> */}
                      <button
                        style={{
                          borderWidth: "0px",
                          backgroundColor: "#d4d4d4",
                          borderRadius: "50%",
                          padding: "6px",
                          width: "35px ",
                          marginLeft: "5px",
                        }}
                      >
                        <img
                          src={removal2}
                          alt="edit"
                          style={{ width: "10px" }}
                        />
                      </button>
                    </td>
                  </tr>
                );
              })}
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
      </>
    </div>
  );
}

export default Franchise;
