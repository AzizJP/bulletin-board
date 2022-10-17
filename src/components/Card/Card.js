import clock from "../../assets/clock.svg";
import mark from "../../assets/chek-mark.svg";
import currency from "../../assets/currency.svg";
import Data from "../../utils/Data";
import "./Card.css";
import { memo } from "react";

function Card() {
  const timeTourRender = (tourTimes, tourTime, index) => {
    if (tourTimes.length > 4 && index === 3) {
      return "ещё...";
    }
    return tourTime;
  };

  const textBasedOnTime = (time) => {
    if (time.toString().includes(time.toString().match(/^[2-9]?[2-4]$/gm))) {
      return "часa";
    } else if (time.toString().includes(time.toString().match(/^[2-9]?1$/gm))) {
      return "час";
    }
    return "часов";
  };

  return Data.map((data, index) => (
    <article key={index} className="card">
      <p className="card__image-wrapper">
        <img className="card__image" src={data.image} alt="Фотография" />
      </p>
      <div
        className={`card__flag-left ${
          data.cardFlagLeft ? "card__flag-left_active" : ""
        } ${data.allYear ? "card__flag-left_all-year" : ""}`}
      >
        {data.allYear ? "КРУГЛЫЙ ГОД" : "НОВИНКА"}
      </div>
      <div
        className={`card__flag-left-top ${
          data.cardFlagLeftTop ? "card__flag-left-top_active" : ""
        } ${data.allYear ? "card__flag-left_all-year" : ""}`}
      >
        {data.allYear ? "КРУГЛЫЙ ГОД" : "НОВИНКА"}
      </div>
      <div className="card__container">
        <div className="card__containe_header">
          <div className="card__duration">
            <img className="card__duration_image" src={clock} alt="Часы" />
            <p className="card__duration_text">
              {data.time} {textBasedOnTime(data.time)}
            </p>
          </div>
          <h1 className="card__title">{data.title}</h1>
        </div>
        <ul className="card__points">
          {data.points.map((point, index) => (
            <div key={index} className="card__point">
              <img className="card__point_mark" src={mark} alt="Галочка" />
              <p className="card__point_text">{point}</p>
            </div>
          ))}
        </ul>
        <ul className="card__tour-times">
          {data.tourTimes.slice(0, 4).map((tourTime, index) => (
            <p key={index} className="card__tour-time">
              {timeTourRender(data.tourTimes, tourTime, index)}
            </p>
          ))}
        </ul>
        <div className="card__footer">
          <div className="card__price">
            <div className="card__price_web">
              <p className="card__price_web_text">{data.price}</p>
              <img
                className="card__price_web_image"
                src={currency}
                alt="Валюта"
              />
            </div>
            <p className="card__price_on-the-pier">{data.priceOnThePier}</p>
          </div>
          <button type="button" className="card__footer_button">
            Подробнее
          </button>
        </div>
      </div>
    </article>
  ));
}

export default memo(Card);
