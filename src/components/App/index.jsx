import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SideMenu from "../SideMenu";
import Home from "../Home";
import Projects from "../Projects";
import ReactJs from "../ReactJs";
import ReactNative from "../ReactNative";
import Cv from "../Cv";

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
            <Route path={"/cv"}>
              <Cv/>
            </Route>
          </Switch> 
        </div>
      </Router>
    </div>
  );
}

export default App;


//const Content = () => <h1>Content</h1>;
//const Courses = () => <h1>Content/Courses</h1>;
//const Videos = () => <h1>Content/Videos</h1>
//const Design = () => <h1>Design</h1>;
//const Content2 = () => <h1>Content2</h1>;
//const Courses2 = () => <h1>Content/Courses 2</h1>;
//const Videos2 = () => <h1>Content/Videos 2</h1>;
//const Design2 = () => <h1>Design 2</h1>;

 /* improvememt, not recorded in video, its just looping through menuItems
          instead of hard coding all the routes 
          {menuItems.map((menu, index) => (
            <>
              <Route key={menu.name} exact={menu.exact} path={menu.to}>
                <h1>{menu.name}</h1>
              </Route>
              {menu.subMenus && menu.subMenus.length > 0
                /*? menu.subMenus.map((subMenu, i) => (
                    <Route key={subMenu.name} path={subMenu.to}>
                      <h1>{subMenu.name}</h1>
                    </Route>
                  ))
                : null}
            </>
          ))} */
