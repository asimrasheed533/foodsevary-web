import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import logobanner from "../assets/logobanner.png";
import main from "../assets/main.png";
import healthy from "../assets/healthy.png";
import delivery from "../assets/delivery.png";
import quality from "../assets/quality.png";
import gal01 from "../assets/gal01.png";
import gal02 from "../assets/gal02.png";
import gal03 from "../assets/gal03.png";
import gal04 from "../assets/gal04.png";
import gal05 from "../assets/gal05.png";
import gal06 from "../assets/gal06.png";
import gal07 from "../assets/gal07.png";
import gal08 from "../assets/gal08.png";
import recp1 from "../assets/recp1.png";
import recip2 from "../assets/recip2.png";
import recip3 from "../assets/recip3.png";
import SelectCatagorieCard from "../components/SelectCatagorieCard";
import Slider from "../components/Slider";
import axios from "../utils/axios";
import { motion, useScroll } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get(`categories`).then((res) => {
      setCategories(res.data);
    });
  }, []);

  return (
    <>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          background: "#00a827",
          height: 10,
          transformOrigin: 0,
        }}
      ></motion.div>
      <div className="home__main__container">
        <div className="home__main__col">
          <Fade left>
            <div className="home__main__col__heading">
              <img src={logobanner} alt="logo" />
            </div>
          </Fade>
          <Fade left delay={500}>
            <div className="home__main__col__sub__heading">
              "Cooking is like painting or writing a song. Just as there are
              only so many notes or colors, there are only so many flavors -
              it's how you combine them that sets you apart."
            </div>
          </Fade>
          <div className="home__main__col__btn">
            <button>more</button>
          </div>
        </div>
        <Fade right delay={800}>
          <div className="home__main__col">
            <img src={main} alt="banner" />
          </div>
        </Fade>
      </div>
      <div className="landing__about__section">
        <div className="about__overlay__contant__wraper">
          <div className="about__overlay__laft__contant">
            <div className="about__overlay__laft__contant__heading__upper">
              About Us
            </div>
            <div className="about__overlay__laft__contant__heading">
              COMMITTED TO DELIVER ETHICALLY
            </div>
            <div className="about__overlay__laft__contant__sub__heading">
              Welcome to our cooking website! We are dedicated to providing you
              with a delightful culinary experience. Explore a treasure trove of
              recipes from various cuisines, ranging from traditional favorites
              to innovative creations. Our team of passionate food enthusiasts
              curates these recipes with detailed instructions and helpful tips,
              ensuring that even beginners can create mouthwatering dishes.
              Discover articles on cooking techniques, ingredient substitutions,
              and health-conscious options. Immerse yourself in a world of
              flavors as we share stories and insights about food and its
              cultural significance. Join our community, share your own recipes,
              and connect with fellow food lovers. Let's embark on a gastronomic
              journey together!
            </div>
          </div>
          <div className="about__overlay__right__contant">
            <img
              src={gal01}
              alt="about"
              style={{
                padding: "12em 0em",
                top: "1.5em",
                position: "relative",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>
      </div>
      <div className="delivery__container">
        <div className="delivery__container__text__wraper">
          <div className="delivery__container__heading">Why Choose us!</div>
          <div className="delivery__container__sub__heading">
            Our fast food delivery service provides a convenient, affordable,
            and reliable way to enjoy your favorite meals from the comfort of
            your own home.
          </div>
        </div>

        <div className="delivery__container__row">
          <Fade delay={500}>
            <div className="delivery__wraper__card">
              <div className="delivery__wraper__card__img">
                <img src={healthy} alt="healthy" />
              </div>
              <div className="delivery__wraper__card__text">
                <div className="delivery__wraper__card__text__heading">
                  Eat Healthy Food
                </div>
                <div className="delivery__wraper__card__text__sub__heading">
                  healthy food means eating a variety of foods that give you the
                  nutrients you need to maintain your health, feel good, and
                  have energy.
                </div>
              </div>
            </div>
          </Fade>
          <Zoom delay={900}>
            <div className="delivery__wraper__card">
              <div className="delivery__wraper__card__img">
                <img src={quality} alt="quality" />
              </div>
              <div className="delivery__wraper__card__text">
                <div className="delivery__wraper__card__text__heading">
                  Quality Assurance
                </div>
                <div className="delivery__wraper__card__text__sub__heading">
                  We ensure quality products and services are delivered to our
                  customers in all major cities across Pakistan.
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom delay={1000}>
            <div className="delivery__wraper__card">
              <div className="delivery__wraper__card__img">
                <img src={delivery} alt="delivery" />
              </div>
              <div className="delivery__wraper__card__text">
                <div className="delivery__wraper__card__text__heading">
                  Instant Delivery
                </div>
                <div className="delivery__wraper__card__text__sub__heading">
                  We ensure quality products and services are delivered to our
                  customers in all major cities across Pakistan.
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
      <div className="recipes__view__container__cover">
        {/* <img src={cover} alt="recipies" /> */}
      </div>
      <div className="select__catagories__section">
        <div className="select__catagories__section__heading">
          BROWSE OUR CATEGORIES
        </div>
        {categories === ""
          ? "Loading..."
          : categories.map((category) => (
              <SelectCatagorieCard
                key={category._id}
                img={import.meta.env.VITE_CLOUDNAIRY_API_URL + category.img}
                link={`/products/${category._id}`}
                heading={category.name}
                _id={category._id}
              />
            ))}
      </div>
      <Fade left delay={500}>
        <RecipiesCard
          image={recp1}
          heading="Find"
          subheading="Discover custom recipes for your home kitchen or batch formulas for
            resturants and commerical kitchens."
        />
      </Fade>
      <Fade right>
        <RecipiesCard
          image={recip2}
          heading="Make"
          subheading="Discover custom recipes for your home kitchen or batch formulas for
            resturants and commerical kitchens."
        />
      </Fade>
      <Fade left>
        <RecipiesCard
          image={recip3}
          heading="Share"
          subheading="Discover custom recipes for your home kitchen or batch formulas for
            resturants and commerical kitchens."
        />
      </Fade>

      <div className="gallery__section">
        <div className="gallery__section__heading">Gallery of our Food</div>
        <div className="gallery__wraper__row">
          <div className="gallery__wraper__col__upper">
            <img src={gal07} alt="gallery food" />
          </div>
          <div className="gallery__wraper__col__upper">
            <img src={gal08} alt="gallery food" />
          </div>
        </div>
        <div className="gallery__wraper__row">
          <div className="gallery__wraper__col">
            <img src={gal01} alt="gallery food" />
          </div>
          <div className="gallery__wraper__col">
            <img src={gal02} alt="gallery food" />
          </div>
          <div className="gallery__wraper__col">
            <img src={gal05} alt="gallery food" />
          </div>
          <div className="gallery__wraper__col">
            <img src={gal03} alt="gallery food" />
          </div>
        </div>
        <div className="gallery__wraper__row">
          <div className="gallery__wraper__col">
            <img src={gal04} alt="gallery food" />
          </div>
          <div className="gallery__wraper__col">
            <img src={gal08} alt="gallery food" />
          </div>
          <div className="gallery__wraper__col">
            <img src={gal05} alt="gallery food" />
          </div>
          <div className="gallery__wraper__col">
            <img src={gal06} alt="gallery food" />
          </div>
        </div>
      </div>

      <div className="collection__details__similar__items__list">
        <Slider />
      </div>
    </>
  );
}

function RecipiesCard({ image, heading, subheading }) {
  return (
    <div className="recipes__view__container">
      <div className="recipes__view__container__text">
        <div className="recipes__view__container__text__heading">
          <span>{heading}</span>Recipes
        </div>
        <div className="recipes__view__container__text__subheading">
          {subheading}
        </div>
      </div>
      <div className="recipes__view__container__img">
        <img src={image} alt="recies" />
      </div>
    </div>
  );
}
