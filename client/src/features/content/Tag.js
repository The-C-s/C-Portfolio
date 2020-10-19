import React from 'react';

import Button from 'react-bootstrap/Button';

export default function Tag({ tag, colour, shape }) {

  const clickHandler = () => console.log(`'${tag}' tag clicked.`);

  return(
    <>
      <Button className={`tag tag-colour-${colour} tag-shape-${shape}`} onClick={clickHandler}>
        {tag}
      </Button>
    </>
  );
}
