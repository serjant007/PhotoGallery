import React from 'react';
import { SpaContext } from '../../context/SpaContext';
import ResetButton from '../resetButton/ResetButton';
import SortBox from '../sortBox/SortBox';
import ViewControl from '../viewControl/ViewControl';
import './header.css';

const Header = () => {
  const { cardView } = React.useContext(SpaContext);

  return (
    <header className="header">
      <ViewControl />
      {cardView === 'card' ? (
        <React.Fragment>
          <SortBox />
          <ResetButton />
        </React.Fragment>
      ) : null}
    </header>
  );
};

export default Header;
