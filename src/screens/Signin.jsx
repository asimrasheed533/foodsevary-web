import React from "react";
import b1 from "../assets/b1.jpg";
export default function Signin() {
  return (
    <>
      <div className="signin__container">
        <div className="signin__container__row">
          <img src={b1} alt="sigin" />
        </div>
        <div className="signin__container__row">
          <div className="signin__text__wraper">
            <div className="signin__text__welcome"> Welcome To Food Severy</div>
            <div className="signin__text__btn__row">
              <div className="signin__text__signin">Sign In</div>
              <div className="signin__text__signup">Register</div>
            </div>
            <div className="signin__text__container">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              architecto tempora accusantium quia fuga! Cupiditate adipisci vel
              iste ut illo?
            </div>
            <form action="#" className="signin__text__input__from">
              <div className="signin__text__input__row">
                <div className="signin__text__input__row__label">Email</div>
                <input
                  type="text"
                  className="signin__text__input__row__input"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="signin__text__input__row">
                <div className="signin__text__input__row__label">Password</div>
                <input
                  type="text"
                  className="signin__text__input__row__input"
                  placeholder="Enter Your Password"
                />
              </div>
              <input
                type="submit"
                value="Sign In"
                className="signin__text__input__row__submit
                "
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
