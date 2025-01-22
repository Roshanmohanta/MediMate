import React, { useEffect, useRef, useContext, useState } from "react";
import "../styles/header.css";
import logo from "../assets/img/Health___Fitness.png";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./AuthContextProvider";

const nav__links = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/programs",
    display: "Exercises",
  },
  {
    path: "/membership",
    display: "Symptom & Medicine",
  },
  {
    path: "/track",
    display: "Doctor Contact",
  },
  {
    path:'/ai-assistance',
    display: 'Ai-Assistant'
  }
];

const Header = () => {
  const { filter, setFilter } = useContext(AuthContext);

  const headerRef = useRef(null);

  const headerFunc = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      headerRef.current.classList.add("sticky__header");
    } else {
      headerRef.current.classList.remove("sticky__header");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);

    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav__wrapper">
          <div className="logo">
            <div className="logo__img">
              <img src={logo} alt="" />
            </div>
            <h2>MediMate</h2>
          </div>
          <div className="navigation">
            <ul className="menu">
              {nav__links.map((item) => (
                <NavLink className="nav__item" key={item.path} to={item.path}>
                  {item.display}
                </NavLink>
              ))}
            </ul>
          </div>
          <div className="nav__right">
            <NavLink to="/register">
              <button className="register__btn">Register</button>
            </NavLink>
            <span className="mobile__menu">
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
