import React from 'react';

import Button from 'react-bootstrap/Button';

export default function Tags({ tags }) {

  const clickHandler = tag => console.log(`'${tag}' tag clicked.`);

  return(
    <React.Fragment>
      tags&nbsp;&nbsp;&nbsp;›{tags.map(
        tag => <React.Fragment>
          &nbsp;&nbsp;&nbsp;
          <Button
            variant="link"
            className="contentitem-tag"
            key={tag}
            onClick={() => clickHandler(tag)}
          >{tag}</Button>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
