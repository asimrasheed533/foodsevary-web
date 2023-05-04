import React, { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
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
                <Link className="header__navbar__link" to="/">
                  Home
                </Link>
                <Link className="header__navbar__link" to="/">
                  About
                </Link>
                <Link className="header__navbar__link" to="/products">
                  Blog
                </Link>
                <Link className="header__navbar__link" to="/products">
                  Services
                </Link>
                <Link className="header__navbar__link" to="/">
                  Contact
                </Link>
              </div>
            </ClickAwayListener>
          ) : null}
          <div className="header__navbar__cart__logo__wraper">
            <div className="header__navbar__cart__logo">
              <svg
                width="30"
                height="30"
                viewBox="0 0 20 19"
                fill="currentColor"
              >
                <path
                  d="M19.4806 4.78095C19.2534 5.47045 19.0262 6.15995 18.8029 6.84945C18.2074 8.69464 17.6198 10.5437 17.0282 12.3889C16.8872 12.8277 16.7265 12.9492 16.2682 12.9492C13.4044 12.9492 10.5406 12.9492 7.67687 12.9452C7.51625 12.9452 7.44573 12.9923 7.39872 13.145C7.25769 13.5642 7.10098 13.9795 6.94036 14.4339C7.03438 14.4339 7.10882 14.4339 7.18325 14.4339C10.1959 14.4339 13.2124 14.4339 16.2251 14.4339C16.3034 14.4339 16.3818 14.4339 16.4601 14.4418C16.7305 14.477 16.9185 14.6886 16.9107 14.9393C16.9028 15.1939 16.707 15.4016 16.4406 15.4212C16.2643 15.4329 16.084 15.4251 15.8686 15.4251C16.2486 15.907 16.3975 16.4162 16.276 16.9843C16.182 17.4309 15.943 17.7952 15.5669 18.0577C14.8892 18.5317 14.0156 18.5161 13.3261 17.9049C12.6561 17.3134 12.6013 16.4437 13.185 15.4408C11.9157 15.4408 10.6503 15.4408 9.36144 15.4408C9.76103 15.9775 9.9099 16.5494 9.69052 17.188C9.56124 17.5641 9.32618 17.8658 9.00102 18.0851C8.30369 18.5553 7.3948 18.473 6.77974 17.8775C6.25478 17.3721 5.93745 16.4045 6.67788 15.4251C6.54076 15.4251 6.42716 15.4251 6.30963 15.4251C5.86694 15.4172 5.65146 15.1156 5.79642 14.6964C5.98054 14.1754 6.16859 13.6543 6.35664 13.1372C6.37622 13.0824 6.39189 13.0275 6.4154 12.9492C6.32138 12.9492 6.24303 12.9492 6.16859 12.9492C5.8356 12.9413 5.60838 12.7533 5.54961 12.432C5.34198 11.3155 5.13826 10.199 4.93454 9.08248C4.57804 7.13935 4.21762 5.19622 3.86504 3.24917C3.84545 3.13948 3.79844 3.08855 3.69658 3.04937C2.93656 2.75555 2.17655 2.4539 1.41654 2.15224C1.09921 2.02688 0.946423 1.74481 1.01694 1.45491C1.10705 1.09057 1.46355 0.906442 1.83572 1.04748C2.31367 1.22769 2.7877 1.41965 3.26173 1.60769C3.67699 1.76832 4.08835 1.93677 4.50361 2.09348C4.76609 2.19142 4.91104 2.37554 4.96197 2.64586C5.31456 4.56548 5.66714 6.48903 6.01972 8.40866C6.2156 9.47816 6.41149 10.5477 6.60345 11.6172C6.62304 11.7308 6.67005 11.77 6.79149 11.77C9.80413 11.766 12.8207 11.766 15.8333 11.77C15.9313 11.77 15.9939 11.7543 16.0292 11.6407C16.7069 9.51734 17.3886 7.39791 18.0664 5.27457C18.0703 5.26282 18.0664 5.25107 18.0664 5.21581C17.9332 5.20797 17.8 5.19622 17.6668 5.18838C15.563 5.09828 13.4593 5.01209 11.3555 4.92199C10.0509 4.86714 8.74638 4.80838 7.44182 4.74961C7.06964 4.73394 6.82283 4.4793 6.83459 4.13063C6.84634 3.79372 7.11274 3.55474 7.47707 3.5665C8.06471 3.58608 8.65627 3.61742 9.24391 3.64093C10.5015 3.69578 11.7551 3.75454 13.0126 3.80547C14.9715 3.89166 16.9303 3.97393 18.8891 4.06011C19.2025 4.07187 19.3748 4.25599 19.4806 4.53023C19.4806 4.6125 19.4806 4.69477 19.4806 4.78095ZM14.5483 15.8208C14.1135 15.8168 13.7531 16.1694 13.7492 16.6004C13.7452 17.0313 14.1096 17.3917 14.5405 17.3917C14.9675 17.3917 15.324 17.0431 15.3279 16.616C15.3358 16.1851 14.9832 15.8247 14.5483 15.8208ZM8.80122 16.6043C8.80122 16.1655 8.44864 15.8208 8.00595 15.8208C7.57501 15.8247 7.23026 16.1694 7.22635 16.6004C7.22243 17.0352 7.57501 17.3917 8.01378 17.3956C8.44864 17.3956 8.80122 17.0431 8.80122 16.6043Z"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="0.5"
                  stroke-miterlimit="10"
                />
              </svg>
            </div>
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
