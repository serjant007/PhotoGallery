import React, { useState } from 'react';
import { SpaContext } from './context/SpaContext';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MainCard from './components/main-card/MainCard';
import Tree from './components/tree/Tree';
import './App.css';

const App = () => {
  // <Get Data>
  const localData = localStorage.getItem('cards');
  const serverCards = JSON.parse(localData);

  const [cards, setCards] = useState([]);

  React.useEffect(() => {
    setLoading(true);
    serverCards !== null
      ? setCards(serverCards)
      : fetch('http://contest.elecard.ru/frontend_data/catalog.json')
          .then((resp) => resp.json())
          .then((data) => {
            setCards(data);
            localStorage.setItem('cardsCopy', JSON.stringify(data));
          });
    setLoading(false);
  }, []);

  // </Get Data>

  // <ServiceyState>

  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(66);
  const [cardView, setCardView] = useState('card');
  const [sort, setSort] = useState('category');
  // </ServiceyState>

  // <Pagination>
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirsCard = indexOfLastCard - cardsPerPage;
  let currentCard = cards.slice(indexOfFirsCard, indexOfLastCard);
  const totalCards = cards.length;
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // </Пагинация>

  // <Pagination>

  // <Sort>

  switch (sort) {
    case 'date':
      {
        const sortByDate = [...cards].sort((prev, next) => prev.timestamp - next.timestamp);
        currentCard = sortByDate.slice(indexOfFirsCard, indexOfLastCard);
      }
      break;
    case 'filesize':
      {
        const sortByFileSize = [...cards].sort((prev, next) => prev.filesize - next.filesize);
        currentCard = sortByFileSize.slice(indexOfFirsCard, indexOfLastCard);
      }
      break;
    case 'name':
      {
        const regex = /(?<=\/).*-/;
        const sortByName = [...cards].sort((prev, next) =>
          prev.image.match(regex) > next.image.match(regex) ? 1 : -1,
        );
        currentCard = sortByName.slice(indexOfFirsCard, indexOfLastCard);
      }
      break;
    case 'category':
      {
        const newArr = cards.slice();
        currentCard = newArr.slice(indexOfFirsCard, indexOfLastCard);
      }
      break;
    default:
      currentCard = cards.slice(indexOfFirsCard, indexOfLastCard);
  }

  // // </Sort>

  // // <Local Storage>

  const removeItem = (obj, boxCard) => {
    console.log(boxCard.current);

    boxCard.current.classList.add('fade-out');

    const arr = cards.filter((n) => n.filesize !== obj.filesize);
    setCards(arr);
    localStorage.setItem('cards', JSON.stringify(arr));
    const localData = localStorage.getItem('cards');
    currentCard = JSON.parse(localData).slice(indexOfFirsCard, indexOfLastCard);
    return currentCard;
  };
  // // </Local Storage>

  // // <Reset function>

  const onReset = () => {
    const localData = localStorage.getItem('cardsCopy');
    const firstCards = JSON.parse(localData);
    setCards(firstCards);
    localStorage.setItem('cards', JSON.stringify(firstCards));
  };
  // </Reset function>

  return (
    <SpaContext.Provider
      value={{
        cardsPerPage,
        totalCards,
        paginate,
        currentPage,
        cardView,
        setCardView,
        cards,
        loading,
        sort,
        setSort,
        removeItem,
        setLoading,
        onReset,
      }}>
      <div className="app">
        <Header />
        {cardView === 'card' ? <MainCard items={currentCard} loading={loading} /> : <Tree />}
        {cardView === 'card' ? <Footer /> : null}
      </div>
    </SpaContext.Provider>
  );
};

export default App;
