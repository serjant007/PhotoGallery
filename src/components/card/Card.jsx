import React from 'react';
import { SpaContext } from '../../context/SpaContext';
import './card.css';

const Card = (obj) => {
  const { removeItem } = React.useContext(SpaContext);
  const boxCard = React.useRef();
  function date(stamp) {
    return new Date(stamp).toLocaleDateString();
  }
  function size(number) {
    return Math.round(number / 1024);
  }

  const regex = /(?<=\/).*/;
  return (
    <div className="main-card" ref={boxCard}>
      <img
        src={`http://contest.elecard.ru/frontend_data/${obj.image}`}
        alt="pic1"
        className="main-card__img"
      />
      <div className="main-card-description">
        <span>Name: {obj.image.match(regex)}</span>
        <p>Date: {date(obj.timestamp)}</p>
        <p>Category: {obj.category}</p>
        <p>Size: {size(obj.filesize)} КБ</p>
      </div>
      <div className="main-card-remove" onClick={() => removeItem(obj, boxCard)}>
        <button className="button--circle">
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
              fill="#000"
            />
            <path
              d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
              fill="#000"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Card;
