import React from 'react';

const Legend = ({ icon, text }) => (
  <li>
    {icon && <img src={icon} alt={text} style={{ marginRight: '10px' }} />}
    <span>{text}</span>
  </li>
);

export default Legend;