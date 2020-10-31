import React from 'react';

export default function LinkedUL({ values }) {
  return(
    <ul className="linkedul-list">
      {values.map((value, index) => 
        <li className="linkedul-li" key={index}>
          <span className="linkedul-li-bullet"></span>
          <div className="linkedul-li-content">{value}</div>
        </li>)}
    </ul>
  );
}
