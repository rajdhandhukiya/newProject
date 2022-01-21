import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewForm from "./Component/newForm";
import Forms from "./Component/formComponent";
import NavbarCommponent from "./Component/NavbarCommponent";
import DynamicTable from "./Component/DynamicTable";
import Comment from "./Component/Comment";
import ProfileDetails from "./Component/ProfileDetails";
// import Comments from "./Component/Comments";
import PageLayout from "./Component/PageLayout";
import LogIn from "./Component/LogIn";
import Finance from "./Component/Finance";
import Franchise from "./Component/Franchise";
import Cctv from "./Component/Cctv";
import UserListing from "./Component/UserListing";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <NavbarCommponent />

        <Switch>
          <Route exact path="/">
            <NewForm />
          </Route>
        </Switch>
        <Switch>
          <Route path="/about">
            <Forms />
          </Route>
        </Switch>
        <Switch>
          <Route path="/dashboard">
            <DynamicTable />
          </Route>
        </Switch>
        <Switch>
          <Route path="/Comment">
            <Comment />
          </Route>
        </Switch>
        <Switch>
          <Route path="/message">
            <PageLayout />
          </Route>
        </Switch>
        <Switch>
          <Route path="/ProfileDetails">
            <ProfileDetails />
          </Route>
        </Switch>
        <Switch>
          <Route path="/Login">
            <LogIn />
          </Route>
        </Switch>
        <Switch>
          <Route path="/Finance">
            <Finance />
          </Route>
        </Switch>
        <Switch>
          <Route path="/Franchise">
            <Franchise />
          </Route>
        </Switch>
        <Switch>
          <Route path="/Cctv">
            <Cctv />
          </Route>
        </Switch>
        <Switch>
          <Route path="/UserListing">
            <UserListing />
          </Route>
        </Switch>
        {/* <Switch>
          <Route path="/Comments">
            <Comments />
          </Route>
        </Switch> */}
      </Router>
    </>
  );
}

export default App;
