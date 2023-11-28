// CustomButton.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CustomButton.css'; 

const CustomButton = ({ text, warnMessage, hint }) => {
  const [showWarning, setShowWarning] = useState(false);

  const handleClick = () => {
    if (warnMessage) {
      setShowWarning(true);
    }
  };

  const handleMouseLeave = () => {
    setShowWarning(false);
  };

  return (
    <div className={`custom-button ${showWarning ? 'warning' : ''}`}>
      <button onClick={handleClick} onMouseLeave={handleMouseLeave}>
        {hint ? <i>{text}</i> : text}
      </button>
      {showWarning && <div className="warning-message">{warnMessage}</div>}
    </div>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  warnMessage: PropTypes.string,
  hint: PropTypes.string,
};

export default CustomButton;
