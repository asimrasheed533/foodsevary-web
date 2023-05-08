import React, { useLayoutEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ClickAwayListener from "react-click-away-listener";
export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  function changeIsNavOpen() {
    if (window.innerWidth <= 900) {
      setIsNavOpen(false);
    } else {
      setIsNavOpen(true);
    }
  }

  useLayoutEffect(() => {
    changeIsNavOpen();
    window.addEventListener("resize", changeIsNavOpen);
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);
  const navigate = useNavigate();
  return (
    <div className="header__section">
      <div
        className={
          isScroll ? "header__navbar header__navbar__active" : "header__navbar"
        }
      >
        <div className="header__navbar__link__wraper">
          <div className="header__logo">Food Sevary</div>
          <div
            className="header__menu"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            {isNavOpen ? <X /> : <Y />}
          </div>
          {isNavOpen ? (
            <ClickAwayListener
              onClickAway={() => {
                if (window.innerWidth <= 900) {
                  setIsNavOpen(false);
                }
              }}
              scrollY={true}
            >
              <div className="header__entries">
                <Link
                  className="header__navbar__link"
                  to="/"
                  onClick={() => {
                    navigate("/");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Home
                </Link>
                <Link
                  className="header__navbar__link"
                  to="/"
                  onClick={() => {
                    navigate("/");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  About
                </Link>
                <Link
                  className="header__navbar__link"
                  to="/products"
                  onClick={() => {
                    navigate("/");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Products
                </Link>
                <Link
                  className="header__navbar__link"
                  to="/"
                  onClick={() => {
                    navigate("/");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Contact
                </Link>
              </div>
            </ClickAwayListener>
          ) : null}
          <div className="header__navbar__cart__logo__wraper">
            <div className="header__navbar__contact">+92-12345678</div>
          </div>
        </div>
      </div>
    </div>
  );
}
function X() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M13 1L1 13"
        stroke="#00a827"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1 1L13 13"
        stroke="#00a827"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
function Y() {
  return (
    <svg
      width="20"
      height="14"
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 7H19"
        stroke="#00a827"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1 1H19"
        stroke="#00a827"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1 13H19"
        stroke="#00a827"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
