import React from 'react';
import Card from '../card/Card';
import '../main-card/mainCard.css';
import Spinner from '../spinner/Spinner';

function MainCard({ items, loading }) {
  return (
    <section className="main">
      {loading ? (
        <Spinner />
      ) : (
        items.map((obj) => <Card key={obj.filesize + obj.category} {...obj} />)
      )}
    </section>
  );
}

export default MainCard;
