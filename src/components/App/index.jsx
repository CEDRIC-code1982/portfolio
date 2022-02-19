import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SideMenu from "../SideMenu";
import Home from "../Home";
import Projects from "../Projects";
import ReactJs from "../ReactJs";
import ReactNative from "../ReactNative";
import ContactForm from "../ContactForm";
//import Cv from "../Cv";

import "./style.css";

function App() {
  const [inactive, setInactive] = useState(false);

  return (
    <div className="App">
      <Router>
        <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
        />

        <div className={`container ${inactive ? "inactive" : ""}`}>

          <Switch>
            <Route exact path={"/"}>
              <Home />
            </Route>
            <Route exact path={"/projects"}>
              <Projects />
            </Route>
            <Route path={"/projects/react"}>
              <ReactJs />
            </Route>
            <Route path={"/projects/react-native"}>
              <ReactNative />
            </Route>
            <Route path={"/contact"}>
              <ContactForm />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
