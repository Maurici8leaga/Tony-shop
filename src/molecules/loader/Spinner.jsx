import React from 'react';
// static
import Caucho from '../../assets/icons/neumaticIcon.svg';
// css
import '../loader/Spinner.scss';

const Spinner = () => {
  return (
    <div className="loader">
      <div className="container">
        <img src={Caucho} className="wheel" alt="" />
        <div className="road"></div>
      </div>
    </div>
  );
};

export default Spinner;
