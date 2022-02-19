import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
//import logo from "../../assets/logo/logo192.png";
import user from "../../assets/user.jpg";


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
          <img src={logo} alt="react" />
        </div>*/}
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <i className="bi bi-arrow-right-square-fill"></i>
          ) : (
            <i className="bi bi-arrow-left-square-fill"></i>
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
                  <i className="bi bi-house"></i>
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
                <i className="bi bi-tools"></i>
              </div>
              <span>Projects</span>
            </div>
          </NavLink>
          {/*<li>
            <NavLink
              className='cv'
              exact
              to="/cv"
            >
              <div className="menu-item">
                <div className="menu-icon">
                  <i className="bi bi-pencil-square"></i>
                </div>
                <span>CV</span>
              </div>
            </NavLink>
          </li>*/}
          <li>
            <div className="menu-item">
              <a href="https://github.com/CEDRIC-code1982">
                <div className="menu-icon">
                  <i className="bi bi-github"></i>
                </div>
                <span>GitHub</span>
              </a>
            </div>
          </li>
          <li>
            <div className="menu-item">
              <a href="https://www.linkedin.com/in/cedric-pineau/">
                <div className="menu-icon">
                  <i className="bi bi-linkedin"></i>
                </div>
                <span>LinKedin</span>
              </a>
            </div>
          </li>
          <li>
            <NavLink
              className='contactForm'
              exact
              to="/contact"
            >
              <div className="menu-item">
                <div className="menu-icon">
                  <i className="bi bi-pencil-square"></i>
                </div>
                <span>Contact</span>
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

