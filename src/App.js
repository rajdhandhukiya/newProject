import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewForm from "./Component/newForm";
// import Forms from "./Component/formComponent";
import NavbarCommponent from "./Component/NavbarCommponent";
import DynamicTable from "./Component/DynamicTable";
import Comment from "./Component/Comment";
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
          <Route path="/about">{/* <Forms /> */}</Route>
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
      </Router>
    </>
  );
}

export default App;