import React from 'react';
import { SpaContext } from '../../context/SpaContext';
import './viewControl.css';

const ViewControl = React.memo(function ViewControl() {
  const { cardView, setCardView } = React.useContext(SpaContext);

  const onChange = (e) => {
    setCardView(e.target.value);
  };
  return (
    <div className="view-control">
      <ul className="view-control-box">
        <h4>View: {cardView}</h4>
        <label>
          <input
            className="view-control-box__item"
            type="radio"
            name="card"
            value="card"
            onChange={onChange}
            defaultChecked
          />
          Card
        </label>
        <label>
          <input
            className="view-control-box__item"
            type="radio"
            name="card"
            value="tree"
            onChange={onChange}
          />
          Tree
        </label>
      </ul>
    </div>
  );
});

export default ViewControl;
