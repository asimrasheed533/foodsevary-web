import React from "react";
import { Link } from "react-router-dom";
import logo from "../asstes/logo.png";
export default function Footer() {
  return (
    <>
      <div className="footer__container">
        <div className="footer__container__col">
          <div className="footer__logo">
            <img src={logo} alt="Footer" />
          </div>
          <div className="footer__icon">icon</div>
        </div>
        <div className="footer__container__col">
          <div className="footer__row__heading">Products</div>
          <div className="footer__row__links">
            <Link to="/" className="footer__row__contant">
              Sand Store
            </Link>
            <Link to="/" className="footer__row__contant">
              Stone
            </Link>
            <Link to="/" className="footer__row__contant">
              Cement
            </Link>
            <Link to="/" className="footer__row__contant">
              Soft Store
            </Link>
          </div>
        </div>
        <div className="footer__container__col">
          <div to="/" className="footer__row__heading">
            Services
          </div>
          <Link to="/" className="footer__row__contant">
            Measuremnent Store
          </Link>
          <Link to="/" className="footer__row__contant">
            Product Advice
          </Link>
          <div className="footer__row__contant">Interior Design</div>
        </div>
        <div className="footer__container__col">
          <div className="footer__row__heading">Contact information</div>
          <div className="footer__row__contant">
            3181 Al Imam Saud Ibn Abdul Aziz Branch Rd, An Nuzhah, Riyadh 12474,
            Saudi Arabia
          </div>
          <div className="footer__row__contant">+92-300300300</div>
        </div>
      </div>
    </>
  );
}
