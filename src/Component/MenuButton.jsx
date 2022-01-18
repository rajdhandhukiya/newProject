import React from "react";
//svg files
import menuSvg from "../Component/SVG/menu.svg";
import dashBoardSvg from "../Component/SVG/dashBoard.svg";
import gymSvg from "../Component/SVG/gym.svg";
import userSvg from "../Component/SVG/userListing.svg";
import groupSvg from "../Component/SVG/groupListing.svg";
import bookingSvg from "../Component/SVG/bookingListing.svg";
import reportSvg from "../Component/SVG/report.svg";
import financeSvg from "../Component/SVG/finance.svg";
import cctvSvg from "../Component/SVG/CCTV.svg";
import feedbackfSvg from "../Component/SVG/feedback.svg";
import notificationsSvg from "../Component/SVG/notifications.svg";
import settingsSvg from "../Component/SVG/settings.svg";
import franchiseSvg from "../Component/SVG/franchise.svg";
import vaccineSvg from "../Component/SVG/vaccine.svg";
//for navigation
import { useHistory } from "react-router-dom";

function MenuButton() {
  const history = useHistory();

  const handleOnClickDashboard = (e) => {
    const url = "http://localhost:3001/users";

    const data = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        photo: "userphoto",
      }),
    };
    fetch(url, data);
  };

  const handleOnClickUsers = (e) => {
    const url = "http://localhost:3001/users";

    const data = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        photo: "userphoto",
      }),
    };
    fetch(url, data);
  };

  const handleOnClickGym = (e) => {
    const url = "http://localhost:3001/gym";

    const data = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: "data",
      }),
    };
    fetch(url, data);
  };

  const handleOnClickGroup = (e) => {
    const url = "http://localhost:3001/group";

    const data = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    };
    fetch(url, data);
  };

  const handleOnClickBooking = (e) => {
    const url = "http://localhost:3001/booking";

    const data = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    };
    fetch(url, data);
  };

  const handleOnClickReport = (e) => {
    const url = "http://localhost:3001/report";

    const data = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    };
    fetch(url, data);
  };

  const handleOnClickFinance = (e) => {
    const url = "http://localhost:3001/finance";

    const data = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    };
    fetch(url, data);
  };

  const handleOnClickCCTV = (e) => {
    const url = "http://localhost:3001/cctv";

    const data = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    };
    fetch(url, data);
  };

  const handleOnClickFeedback = (e) => {
    const url = "http://localhost:3001/feedback";

    const data = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    };
    fetch(url, data);
  };

  const handleOnClickNotifications = (e) => {
    const url = "http://localhost:3001/notifications";

    const data = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        array: [1, 2, 5, 45, 3, 2, 67, 43, 5, 90],
      }),
    };
    fetch(url, data).then((res) => {
      console.log(res.json());
    });
  };

  const handleOnClickFranchise = (e) => {
    const url = "http://localhost:3001/franchise";

    const data = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        a: 10,
        b: 9,
      }),
    };
    fetch(url, data).then((res) => {
      console.log(res.json());
    });
  };

  const handleOnClickVVS = (e) => {
    const url = "http://localhost:3001/verifyVaccination";

    const data = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        photo: 12334576656,
        ID: "purple",
        submition_date: [2, 4, 56, 8],
        username: "name",
        name: "name",
      }),
    };
    fetch(url, data).then((res) => {
      console.log(res.json());
    });
  };

  return (
    <>
      {/* <div><button onClick={() => {history.push("/login")}}>Log Out</button></div> */}
      <div class="menuButton">
        <div className="mb-5">
          <button className="button">
            <img src={menuSvg} alt="icon" />
          </button>
        </div>
        <div class="icons">
          <div class="dashBoardSvg">
            <button
              className="buttonMenu"
              onClick={() => {
                handleOnClickDashboard();
                history.push("/Dashboard");
              }}
            >
              <img src={dashBoardSvg} alt="icon" />
            </button>
          </div>
          <br />

          <div>
            <button
              className="buttonMenu"
              onClick={() => {
                handleOnClickGym();
                history.push("/GymListing");
              }}
            >
              <img src={gymSvg} alt="icon" />
            </button>
          </div>

          <br />

          <div>
            <button
              className="buttonMenu"
              onClick={() => {
                handleOnClickUsers();
                history.push("/UserListing");
              }}
            >
              <img src={userSvg} alt="icon" />
            </button>
          </div>
          <br />
          <div>
            <button
              className="buttonMenu"
              onClick={() => {
                handleOnClickGroup();
                history.push("/GroupListing");
              }}
            >
              <img src={groupSvg} alt="icon" />
            </button>
          </div>
          <br />
          <div>
            <button
              className="buttonMenu"
              onClick={() => {
                handleOnClickBooking();
                history.push("/BookingsListing");
              }}
            >
              <img src={bookingSvg} alt="icon" />
            </button>
          </div>
          <br />
          <div>
            <button
              className="buttonMenu"
              onClick={() => {
                handleOnClickReport();
                history.push("/ReportPage");
              }}
            >
              <img src={reportSvg} alt="icon" />
            </button>
          </div>
          <br />
          <div>
            <button
              className="buttonMenu"
              onClick={() => {
                handleOnClickFinance();
                history.push("/Finance");
              }}
            >
              <img src={financeSvg} alt="icon" />
            </button>
          </div>
          <br />
          <div>
            <button
              className="buttonMenu"
              onClick={() => {
                handleOnClickCCTV();
                history.push("/CCTV");
              }}
            >
              <img src={cctvSvg} alt="icon" />
            </button>
          </div>
          <br />
          <div>
            <button
              className="buttonMenu"
              onClick={() => {
                handleOnClickFeedback();
                history.push("/Feedback");
              }}
            >
              <img src={feedbackfSvg} alt="icon" />
            </button>
          </div>
          <br />
          <div>
            <button
              className="buttonMenu"
              onClick={() => {
                handleOnClickNotifications();
                history.push("/NotificationsListing");
              }}
            >
              <img src={notificationsSvg} alt="icon" />
            </button>
          </div>
          <br />
          <div>
            <button
              className="buttonMenu"
              onClick={() => {
                history.push("/Automation");
              }}
            >
              <img src={settingsSvg} alt="icon" />
            </button>
          </div>
          <br />
          <div>
            <button
              className="buttonMenu"
              onClick={() => {
                handleOnClickFranchise();
                history.push("/Franchise");
              }}
            >
              <img src={franchiseSvg} alt="icon" />
            </button>
          </div>
          <br />
          <div>
            <button
              className="buttonMenu"
              onClick={() => {
                history.push("/VerifyVax");
                handleOnClickVVS();
              }}
            >
              <img src={vaccineSvg} alt="icon" />
            </button>
          </div>
          <br />
        </div>
      </div>
    </>
  );
}

export default MenuButton;
