import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
//import logo from "../assets/logo/webscript.png";
import user from "../assets/user.jpg";

/**
 * @author
 * @function SideMenu
 **/

const SideMenu = () => {
  const [inactive, setInactive] = useState(true);


  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        {/*<div className="logo">
          <img src={logo} alt="webscript" />
        </div>*/}
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <i class="bi bi-arrow-right-square-fill"></i>
          ) : (
            <i class="bi bi-arrow-left-square-fill"></i>
          )}
        </div>
      </div>

      {/*<div className="search-controller">
        <button className="search-btn">
          <i class="bi bi-search"></i>
        </button>

        <input type="text" placeholder="search" />
          </div>*/}

      <div className="divider"></div>

      <div className="main-menu">
        <ul>
          <li>
            <NavLink
              className='home'
              exact
              to="/"
            >
              <div className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-house"></i>
              </div>
              <span>Home</span>
            </div>
            </NavLink>
          </li>
          <NavLink
              className='projects'
              exact
              to="/projects"
            >
          <div className="menu-item">
            <div className="menu-icon">
              <i class="bi bi-speedometer2"></i>
            </div>
            <span>Projects</span>  
          </div>
          </NavLink>
          <li>
          <NavLink
              className='cv'
              exact
              to="/cv"
            >
            <div className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-vector-pen"></i>
              </div>
            <span>CV</span>
            </div>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="side-menu-footer">
        <div className="avatar">
          <img src={user} alt="user" />
        </div>
        <div className="user-info">
          <h5>Cédric Pineau</h5>
          <a href="mailto:cedric.pineau007@gmail.com" >cedric.pineau007@gmail.com</a>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;

//import MenuItem from "./MenuItem";

// added more menuItems for testing
/*export const menuItems = [
  {
    name: <Home />,
    exact: true,
    to: "/",
    iconClassName: "bi bi-house",
  },
  {
    name: <Projects/>,
    exact: true,
    to: `/projects`,
    iconClassName: "bi bi-speedometer2",
    subMenus: [
      { name: <ReactJs />, to: "/projects/react_js" },
      { name: <ReactNative />, to: "/projects/react-native" },
    ],
  },
  { name: <CV />, to: `/cv`, iconClassName: "bi bi-vector-pen" },
  {
    name: "Content 2",
    exact: true,
    to: `/content-2`,
    iconClassName: "bi bi-speedometer2",
    subMenus: [
      { name: "Courses", to: "/content-2/courses" },
      { name: "Videos", to: "/content-2/videos" },
    ],
  },
  { name: "Design 2", to: `/design-2`, iconClassName: "bi bi-vector-pen" },
  { name: "Design 3", to: `/design-3`, iconClassName: "bi bi-vector-pen" },
  { name: "Design 4", to: `/design-4`, iconClassName: "bi bi-vector-pen" },

];*/


/*useEffect(() => {
  if (inactive) {
    removeActiveClassFromSubMenu();
  }

  props.onCollapse(inactive);
}, [inactive]);

//just an improvment and it is not recorded in video :(
const removeActiveClassFromSubMenu = () => {
  document.querySelectorAll(".sub-menu").forEach((el) => {
    el.classList.remove("active");
  });
};
*/
/*just a little improvement over click function of menuItem
  Now no need to use expand state variable in MenuItem component
*/
/*useEffect(() => {
  let menuItems = document.querySelectorAll(".menu-item");
  menuItems.forEach((el) => {
    el.addEventListener("click", (e) => {
      const next = el.nextElementSibling;
      removeActiveClassFromSubMenu();
      menuItems.forEach((el) => el.classList.remove("active"));
      el.classList.toggle("active");
      console.log(next);
      if (next !== null) {
        next.classList.toggle("active");
      }
    });
  });
}, []);*/

/*{menuItems.map((menuItem, index) => (
         <MenuItem
           key={index}
           name={menuItem.name}
           exact={menuItem.exact}
           to={menuItem.to}
           subMenus={menuItem.subMenus || []}
           iconClassName={menuItem.iconClassName}
           onClick={(e) => {
             if (inactive) {
               setInactive(false);
             }
           }}
         />
       ))}*/