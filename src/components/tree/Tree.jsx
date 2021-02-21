import React from 'react';
import SimpleLightbox from 'simplelightbox';
import { SpaContext } from '../../context/SpaContext';
import CardTree from '../cardTree/CardTree';
import './simple-lightbox.css';
import './tree.css';

const Tree = React.memo(function Tree() {
  const { cards } = React.useContext(SpaContext);

  const categories = cards.map((item) => item.category);
  const category = categories.filter((item, index) => {
    return categories.indexOf(item) === index;
  });
  console.log(category);
  React.useEffect(() => {
    new SimpleLightbox('.simpleLightBox', {
      history: false,
    });
  });

  const toggleCategory = (event) => {
    if (event.target.tagName !== 'SPAN') return;
    let childrenContainer = event.target.parentNode.querySelector('ul');
    if (!childrenContainer) return;
    childrenContainer.hidden = !childrenContainer.hidden;
    if (childrenContainer.hidden) {
      event.target.classList.add('hide');
      event.target.classList.remove('show');
    } else {
      event.target.classList.add('show');
      event.target.classList.remove('hide');
    }
  };

  return (
    <section className="main">
      <ul onClick={toggleCategory} className="main-category">
        <li>
          <span className="show">Category</span>
          <ul>
            {category.map((item) => (
              <li key={item} className="main-category__category">
                <span className="main-category__category-item show">{item}</span>
                <ul className="main-category__card">
                  {cards.map((card, i) =>
                    card.category === item ? (
                      <li key={`card${i}`}>
                        <span className="main-category__card-item show">{`Card${i}`}</span>
                        <ul>
                          <li>
                            <CardTree {...card} tree="tree" />
                          </li>
                        </ul>
                      </li>
                    ) : null,
                  )}
                </ul>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </section>
  );
});

export default Tree;
