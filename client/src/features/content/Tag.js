import React from 'react';

export default function Tag({ tag, colour, shape }) {

  const clickHandler = () => console.log(`'${tag}' tag clicked.`);

  return(
    <>
      <div className={`tag tag-colour-${colour} tag-shape-${shape}`} onClick={clickHandler}>
        {tag}
      </div>
    </>
  );
}
