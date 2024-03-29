import { Link, useLocation } from "react-router-dom";

import { cartAtom } from "../global";
import { useAtom } from "jotai";
import avatr01 from "../assets/avatr01.png";
export default function Details() {
  const { state } = useLocation();
  const product = state.product;
  // const [cart, setCart] = useAtom(cartAtom);

  return (
    <div className="collection__details">
      <Link to="/" className="collection__details__back__button">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.87989 6.28982L5.58989 10.5898C5.21738 10.9645 5.0083 11.4714 5.0083 11.9998C5.0083 12.5282 5.21738 13.0351 5.58989 13.4098L9.87989 17.7098C10.0672 17.8961 10.3207 18.0006 10.5849 18.0006C10.8491 18.0006 11.1025 17.8961 11.2899 17.7098C11.3836 17.6169 11.458 17.5063 11.5088 17.3844C11.5595 17.2625 11.5857 17.1318 11.5857 16.9998C11.5857 16.8678 11.5595 16.7371 11.5088 16.6152C11.458 16.4934 11.3836 16.3828 11.2899 16.2898L7.99989 12.9998H18.9999C19.2651 12.9998 19.5195 12.8945 19.707 12.7069C19.8945 12.5194 19.9999 12.265 19.9999 11.9998C19.9999 11.7346 19.8945 11.4802 19.707 11.2927C19.5195 11.1052 19.2651 10.9998 18.9999 10.9998H7.99989L11.2899 7.70982C11.4782 7.52284 11.5845 7.26872 11.5854 7.00335C11.5864 6.73799 11.4819 6.48312 11.2949 6.29482C11.1079 6.10651 10.8538 6.0002 10.5884 5.99926C10.3231 5.99832 10.0682 6.10284 9.87989 6.28982Z"
            fill="currentColor"
          />
        </svg>
        Back
      </Link>
      <div className="collection__details__main">
        <div className="collection__details__main__left">
          <div className="collection__details__main__left__img__wrapper">
            <img
              src={import.meta.env.VITE_CLOUDNAIRY_API_URL + product?.img}
              alt={product?.name}
              className="collection__details__main__left__img"
            />
          </div>
        </div>
        <div className="collection__details__main__right">
          <div className="collection__details__main__right__heading">
            {product?.name}
          </div>

          <div className="collection__details__main__right__entry">
            Time to cook :
            <div className="collection__details__main__right__entry__price">
              {product?.time}
            </div>
          </div>
          <div className="collection__details__main__right__entry">
            Rating;
            <div className="collection__details__main__right__entry__content">
              {Array(product?.rating)
                .fill()
                .map((_, i) => (
                  <span key={i}>⭐⭐⭐</span>
                ))}
            </div>
          </div>

          <div className="collection__details__main__right__sub__heading__reverse">
            How to cook?
          </div>
          <div className="collection__details__main__right__info">
            {product?.description}
          </div>
        </div>
      </div>
      <div className="reviews__sectoion">
        <div className="reviews__heading">
          Reviews <span>(14)</span>
        </div>
        <Review
          img={avatr01}
          name="Rose "
          date="12 Days ago"
          rating="3.5"
          Comment="I recently had the pleasure of dining at Spice Delight, a Pakistani restaurant, and it was truly an exquisite experience. The moment I stepped in, the aroma of spices filled the air, instantly whetting my appetite."
        />
        <Review
          img={avatr01}
          name="Zooni"
          date="12 Days ago"
          rating="3.5"
          Comment="I recently had the pleasure of dining at Spice Delight, a Pakistani restaurant, and it was truly an exquisite experience. The moment I stepped in, the aroma of spices filled the air, instantly whetting my appetite."
        />
      </div>
    </div>
  );
}

function Review({ img, name, date, rating, Comment }) {
  return (
    <div className="reviews__list__wraper">
      <div className="reviews__list__col__img">
        <img src={img} alt="avatar" />
      </div>
      <div className="reviews__list__col">
        <div className="reviews__list__col__name">
          {name} <span>{date}</span>
        </div>
        <div className="reviews__list__col__rating">{rating} ⭐⭐⭐</div>
        <div className="reviews__list__col__comment">{Comment}</div>
      </div>
    </div>
  );
}
