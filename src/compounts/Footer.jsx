import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <div className="footer__container">
        <div className="footer__container__col">
          <div className="footer__logo">
            <img src="/" alt="Footer" />
          </div>
          <div className="footer__icon">icon</div>
        </div>
        <div className="footer__container__col">
          <div className="footer__row__heading">Products</div>
          <div className="footer__row__links">
            <Link to="/" className="footer__row__contant">
              Pizza
            </Link>
            <Link to="/" className="footer__row__contant">
              Snacks
            </Link>
            <Link to="/" className="footer__row__contant">
              Barbecue
            </Link>
            <Link to="/" className="footer__row__contant">
              Biryani
            </Link>
          </div>
        </div>
        <div className="footer__container__col">
          <div to="/" className="footer__row__heading">
            Services
          </div>
          <Link to="/" className="footer__row__contant">
            Fast Delivery
          </Link>
          <Link to="/" className="footer__row__contant">
            Product Advice
          </Link>
          <div className="footer__row__contant">Healthy food</div>
        </div>
        <div className="footer__container__col">
          <div className="footer__row__heading">Contact information</div>
          <div className="footer__row__contant">
            Mohala rasool pora near garden town fasilabad
          </div>
          <div className="footer__row__contant">+92-1234500</div>
        </div>
      </div>
    </>
  );
}
