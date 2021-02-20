import React from 'react';
import './cardTree.css';

const CardTree = ({ image, category, filesize, timestamp }) => {
  function date(stamp) {
    return new Date(stamp).toLocaleDateString();
  }
  function size(number) {
    return Math.round(number / 1024);
  }

  return (
    <div className="main-card-tree">
      <a className="simpleLightBox" href={`http://contest.elecard.ru/frontend_data/${image}`}>
        <img
          src={`http://contest.elecard.ru/frontend_data/${image}`}
          alt="pic1"
          className="main-card__img-tree"
        />
      </a>
      <div className="main-card-description-tree">
        <p>Date: {date(timestamp)}</p>
        <p>Category: {category}</p>
        <p>Size: {size(filesize)} КБ</p>
      </div>
    </div>
  );
};

export default CardTree;
