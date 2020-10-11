import React from 'react';

export default function VisibilityDot({ id }) {

  const mouseOverHandler = () => console.log(`'${id}' visibility mouse over`);

  return(
    <React.Fragment>
      <span className="contentitem-visibility-dot" onMouseOver={mouseOverHandler}></span>
    </React.Fragment>
  );
}
