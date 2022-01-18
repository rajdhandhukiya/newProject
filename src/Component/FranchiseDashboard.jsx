import React from "react";
import Topbar from "./TopBar";
import Menubutton from "./MenuButton";
import Chart from "react-google-charts";
import { Dropdown, DropdownButton, InputGroup, Table } from "react-bootstrap";

import GymSvg from "../Components/SVG/GymOverView.svg";
import FinanceSvg from "../Components/SVG/FinanceOverView.svg";
import BookingSvg from "../Components/SVG/BookingOverView.svg";
import TotalReportSvg from "../Components/SVG/TotalReport.svg";

import "../Components/CSSfiles/FranchiseDashboard.css";

function franchiseDashboard(props) {
  const data = [
    ["Year", "Visitations", { role: "style" }],
    ["02", 10, "color: #b6cb1b; width: 10px"],
    ["04", 14, "color: #b6cb1b"],
    ["06", 16, "color: #b6cb1b"],
    ["08", 22, "color: #b6cb1b"],
    ["10", 28, "color: #b6cb1b"],
    ["12", 14, "color: #b6cb1b"],
    ["14", 16, "color: #b6cb1b"],
    ["16", 22, "color: #b6cb1b"],
    ["18", 16, "color: #b6cb1b"],
    ["20", 22, "color: #b6cb1b"],
    ["22", 28, "color: #b6cb1b"],
    ["24", 14, "color: #b6cb1b"],
  ];
  const graphData = [
    ["Year", "Visitations", { role: "style" }],
    ["January", 1, "color: #b6cb1b; width: 10px"],
    ["February", 3, "color: #b6cb1b"],
    ["March", 5, "color: #b6cb1b"],
    ["April", 2, "color: #b6cb1b"],
    ["May", 1, "color: #b6cb1b"],
    ["June", 3, "color: #b6cb1b"],
    ["July", 2, "color: #b6cb1b"],
    ["August", 4, "color: #b6cb1b"],
    ["September", 3, "color: #b6cb1b"],
    ["October", 5, "color: #b6cb1b"],
    ["November", 3, "color: #b6cb1b"],
    ["December", 2, "color: #b6cb1b"],
  ];
  const options = {
    legend: "none",
    chartArea: {
      right: 0,
      top: 10,
      left: 0,
      bottom: 20,
    },
  };
  console.log("profile", props);
  return (
    <div className="container-fluid">
      <div className="row mt-3">
        <div className="col-xxl-1 col-lg-1">
          <Menubutton />
        </div>
        <div className="col-xxl-11 col-lg-11">
          <div class="mainboxes">
            <Topbar title={"Franchise Dashboard"} />
            <div className="row mb-3">
              <div className="col-xxl-6 col-md-12">
                <div className="cardBody">
                  <div className="gymMain">
                    <div>
                      <img classname="firsticon" src={GymSvg} alt="icon" />
                      <span class="mx-3 totalGym">TOTAL GYM</span>
                    </div>
                    <h3 className="gymNumber">765</h3>
                  </div>
                  <div className="gymBottom">
                    <DropdownButton
                      id="dropdown-basic-button"
                      title="Select Gym"
                      className="bg-transparent"
                    >
                      <Dropdown.Item href="#/action-1">Gym 1</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Gym 2</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Gym 3</Dropdown.Item>
                    </DropdownButton>
                    <div className="d-flex align-items-center gymSubMain">
                      <span className="gymSubTitle">SLOT</span>
                      <p className="gymSubValue">10</p>
                      <span className="gymSubTitle">DURATION</span>
                      <p className="gymSubValue">5</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-md-12">
                <div className="cardBody">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div>
                      <img classname="firsticon" src={FinanceSvg} alt="icon" />
                      <span class="mx-3 totalGym">FINANCE</span>
                    </div>
                    <div className="d-flex align-items-center py-2">
                      <span className="gymSubTitle">DAILY EARNINGS</span>
                      <p className="earning">$ 6.543</p>
                    </div>
                  </div>
                  <div className="financeBottom pt-3">
                    <DropdownButton
                      id="dropdown-basic-button"
                      title="Today"
                      className="bg-transparent"
                    >
                      <Dropdown.Item href="#/action-1">Gym 1</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Gym 2</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Gym 3</Dropdown.Item>
                    </DropdownButton>
                    <div className="d-flex align-items-center financeSubMain">
                      <span className="gymSubTitle">LAST 30 DAYS</span>
                      <p className="gymSubValue">$ 76.543</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-xxl-6 col-md-12">
                <div className="cardBody">
                  <div className="d-flex justify-content-end mt-3">
                    <div className="booking">
                      <img classname="firsticon" src={BookingSvg} alt="icon" />
                      <span class="mx-3 totalGym">BOOKING</span>
                    </div>
                    <DropdownButton
                      id="dropdown-basic-button"
                      title="Today"
                      className="bg-transparent"
                    >
                      <Dropdown.Item href="#/action-1">Gym 1</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Gym 2</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Gym 3</Dropdown.Item>
                    </DropdownButton>
                  </div>
                  <div className="d-flex align-items-end justify-content-between">
                    <div className="d-flex align-items-center">
                      <span className="gymSubTitle m-0">TOTAL SESSION</span>
                      <p className="gymSubValue">543</p>
                    </div>
                    <div className="bookingCharts">
                      <Chart
                        width={"100%%"}
                        height={90}
                        data={data}
                        options={options}
                        chartType="ColumnChart"
                        loader={<div>Loading Chart...</div>}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-md-12">
                <div className="cardBody">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <img
                        classname="firsticon"
                        src={TotalReportSvg}
                        alt="icon"
                      />
                      <span class="mx-3 totalGym">REPORT</span>
                    </div>
                    <div className="d-flex align-items-center py-3 ">
                      <DropdownButton
                        id="dropdown-basic-button"
                        title="Select Report"
                        className="bg-transparent reportDropDown"
                      >
                        <Dropdown.Item href="#/action-1">Gym 1</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Gym 2</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Gym 3</Dropdown.Item>
                      </DropdownButton>
                    </div>
                  </div>
                  <div className="reportBottom pt-3">
                    <div className="d-flex align-items-center">
                      <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                      <span className="mx-2 reportText">PDF</span>
                      <div className="mx-2 d-flex align-items-center">
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        <span className="mx-2 reportText">XLS</span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center reportSubMain">
                      <button className="btn btn-primary bg-black exportBtn">
                        Export
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-xxl-12">
                <div className="franchiseGraph">
                  <div className="graphHeader">
                    <div className="graphHeading">
                      <h3 className="m-0 graphBooking">BOOKING</h3>
                      <h3 className="m-0 mx-3">FINANCE</h3>
                    </div>
                    <div className="graphDrop">
                      <div>
                        <p className="displayChart">DisplayCharts</p>
                      </div>
                      <input
                        type="date"
                        className="input mx-2 space"
                        placeholder="Date Start"
                      />
                      <input
                        type="date"
                        className="input mx-2 space"
                        placeholder="Date End"
                      />
                      <DropdownButton
                        id="dropdown-basic-button"
                        title="Select Gym"
                        className="bg-transparent mx-2 space"
                      >
                        <Dropdown.Item href="#/action-1">Gym 1</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Gym 2</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Gym 3</Dropdown.Item>
                      </DropdownButton>
                      <DropdownButton
                        id="dropdown-basic-button"
                        title="Day"
                        className="bg-transparent mx-2 space"
                      >
                        <Dropdown.Item href="#/action-1">Gym 1</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Gym 2</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Gym 3</Dropdown.Item>
                      </DropdownButton>
                    </div>
                  </div>
                  <div>
                    <Chart
                      width={"100%"}
                      height={200}
                      data={graphData}
                      options={options}
                      chartType="LineChart"
                      loader={<div>Loading Chart...</div>}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-xxl-12">
                <div className="franchiseGraph franchiseTable">
                  <div className="table-responsive">
                    <Table className="table" responsive="sm" borderless>
                      <thead>
                        <tr>
                          <th>Franchisee ID</th>
                          <th>Franchisee Name</th>
                          <th>Gym Name</th>
                          <th>Gym address</th>
                          <th>Franchisee Start Day</th>
                          <th>Franchisee Start Day</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>00343430043</td>
                          <td>Tesla=Xpod Franchise</td>
                          <td>131 jalan bukit merah</td>
                          <td>131 jalan bukit merah</td>
                          <td>04.23. 2021</td>
                          <td>04.23. 2025</td>
                        </tr>
                        <tr>
                          <td>00343430043</td>
                          <td>Tesla=Xpod Franchise</td>
                          <td>131 jalan bukit merah</td>
                          <td>131 jalan bukit merah</td>
                          <td>04.23. 2021</td>
                          <td>04.23. 2025</td>
                        </tr>
                        <tr>
                          <td>00343430043</td>
                          <td>Tesla=Xpod Franchise</td>
                          <td>131 jalan bukit merah</td>
                          <td>131 jalan bukit merah</td>
                          <td>04.23. 2021</td>
                          <td>04.23. 2025</td>
                        </tr>
                        <tr>
                          <td>00343430043</td>
                          <td>Tesla=Xpod Franchise</td>
                          <td>131 jalan bukit merah</td>
                          <td>131 jalan bukit merah</td>
                          <td>04.23. 2021</td>
                          <td>04.23. 2025</td>
                        </tr>
                        <tr>
                          <td>00343430043</td>
                          <td>Tesla=Xpod Franchise</td>
                          <td>131 jalan bukit merah</td>
                          <td>131 jalan bukit merah</td>
                          <td>04.23. 2021</td>
                          <td>04.23. 2025</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default franchiseDashboard;
