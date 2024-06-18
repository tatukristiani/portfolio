"use client";

import { useEffect, useState } from "react";
import "../styles/navbar.css";

export default function Navbar() {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const [mobileNavActive, setMobileNavActive] = useState(false);

  // Handles the non mobile navigation clicks and scrolls to target location
  const HandleNavItemClick = (target: string) => {
    var element = document.getElementById(target);
    if (element != null) {
      var top = element.getBoundingClientRect().top - 120;
      window.scrollTo({
        behavior: "instant",
        top: top,
      });
    }
  };

  // Handles mobile menu navigation item clicks
  const HandleMobileMenuItemClick = (target: string) => {
    setMobileMenuActive(false);
    setTimeout(() => {
      var element = document.getElementById(target);
      if (element != null) {
        var top = element.getBoundingClientRect().top - 120;
        window.scrollTo({
          behavior: "instant",
          top: top,
        });
      }
    }, 500);
  };

  // Handles the mobile hamburger menu click
  const HandleMobileMenuClick = () => {
    setMobileMenuActive(mobileMenuActive ? false : true);
  };

  // Used to display mobile nav when screen width <= 630px, disables and hides mobile menu in case it was opened to reset state
  const DisplayMobileNav = () => {
    if (window.innerWidth <= 630) {
      setMobileNavActive(true);
    } else {
      setMobileNavActive(false);
      SetMobileMenuHeight("0");
      setMobileMenuActive(false);
    }
  };

  // Used to hide all content when mobile navigation is opened
  const HideContent = (className: string) => {
    Array.prototype.slice
      .call(document.getElementsByClassName(className))
      .forEach((element) => {
        element.style.display = "none";
      });
  };

  // Used to display content when mobile navigation is not opened
  const ShowContent = (className: string) => {
    Array.prototype.slice
      .call(document.getElementsByClassName(className))
      .forEach((element) => {
        element.style.display = "";
      });
  };

  // Used to hide and show mobile menu (height 0 -> hidden, height: 100vh -> fills the screen)
  const SetMobileMenuHeight = (height: string) => {
    var mobileNav = document.getElementById("navbar-mobile-menu");
    if (mobileNav != null) mobileNav.style.height = height;
  };

  // Hides all other content while mobile menu is active
  useEffect(() => {
    if (mobileMenuActive == true) {
      HideContent("introduction-container");
      HideContent("content-template");
      HideContent("contact-container-div");
      HideContent("scroll-to-top");
      SetMobileMenuHeight("100vh");
    } else {
      ShowContent("introduction-container");
      ShowContent("content-template");
      ShowContent("contact-container-div");
      ShowContent("scroll-to-top");
      setTimeout(() => {
        SetMobileMenuHeight("0");
      }, 500);
    }
  }, [mobileMenuActive]);

  // Used to set the mobile navigation at start
  useEffect(() => {
    if (window.innerWidth <= 630) {
      setMobileNavActive(true);
    } else {
      setMobileNavActive(false);
    }
  }, []);

  window.addEventListener("resize", DisplayMobileNav);

  return (
    <>
      {mobileNavActive ? (
        <>
          <nav className={"navbar opened"}>
            <ul
              className={`navbar-container flex flex-row justify-around pt-4 pb-4 h-fit`}
            >
              <li className="navbar-item navbar-logo">
                <h1>T A T U</h1>
              </li>
              <li className="navbar-item navbar-mobile-button">
                <a
                  className="navbar-mobile-link"
                  onClick={() => HandleMobileMenuClick()}
                >
                  {mobileMenuActive ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="white"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="white"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  )}
                </a>
              </li>
            </ul>
          </nav>
          <nav id="navbar-mobile-menu" className="navbar-mobile-menu">
            <ul
              className={`navbar-container ${
                mobileMenuActive ? "active" : ""
              } flex flex-col justify-start pt-4 pb-4 h-fit`}
            >
              <li className="navbar-mobile-item text-center">
                <a
                  className="navbar-link transition duration-250 ease-in-out"
                  onClick={() => HandleMobileMenuItemClick("about")}
                >
                  ABOUT
                </a>
              </li>
              <li className="navbar-mobile-item text-center">
                <a
                  className="navbar-link transition duration-250 ease-in-out"
                  onClick={() => HandleMobileMenuItemClick("skills")}
                >
                  SKILLS
                </a>
              </li>
              <li className="navbar-mobile-item text-center">
                <a
                  className="navbar-link transition duration-250 ease-in-out"
                  onClick={() => HandleMobileMenuItemClick("projects")}
                >
                  PROJECTS
                </a>
              </li>
              <li className="navbar-mobile-item text-center">
                <a
                  className="navbar-link transition duration-250 ease-in-out"
                  onClick={() => HandleMobileMenuItemClick("work")}
                >
                  WORK
                </a>
              </li>
              <li className="navbar-mobile-item text-center">
                <a
                  className="navbar-link transition duration-250 ease-in-out"
                  onClick={() => HandleMobileMenuItemClick("contact")}
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </nav>
        </>
      ) : (
        <nav className="navbar">
          <ul className="navbar-container flex flex-row justify-around pt-4 pb-4 h-fit">
            <li className="navbar-item">
              <a
                className="navbar-link"
                onClick={() => HandleNavItemClick("about")}
              >
                ABOUT
              </a>
            </li>
            <li className="navbar-item">
              <a
                className="navbar-link"
                onClick={() => HandleNavItemClick("projects")}
              >
                PROJECTS
              </a>
            </li>
            <li className="navbar-item navbar-logo">
              <h1>T A T U</h1>
            </li>
            <li className="navbar-item">
              <a
                className="navbar-link"
                onClick={() => HandleNavItemClick("work")}
              >
                WORK
              </a>
            </li>
            <li className="navbar-item">
              <a
                className="navbar-link"
                onClick={() => HandleNavItemClick("contact")}
              >
                CONTACT
              </a>
            </li>
            <li className="navbar-item navbar-mobile-button">
              <a
                className="navbar-mobile-link"
                onClick={() => HandleMobileMenuClick()}
              >
                {mobileMenuActive ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="white"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="white"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
