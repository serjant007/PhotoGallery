import React from 'react';
import { SpaContext } from '../../context/SpaContext';
import './resetButton.css';

const ResetButton = () => {
  const { onReset } = React.useContext(SpaContext);

  return (
    <div className="reset-button" onClick={onReset}>
      <p>Reset</p>
    </div>
  );
};

export default ResetButton;
