import React from 'react';

export default function Tags({ tags }) {

  const clickHandler = tag => console.log(`'${tag}' tag clicked`);

  return(
    <React.Fragment>
      tags&nbsp;&nbsp;&nbsp;›{tags.map(
        tag => <>
          &nbsp;&nbsp;&nbsp;
          <a
            href="#"
            className="contentitem-tag"
            key={tag}
            onClick={() => clickHandler(tag)}
          >{tag}</a></>
      )}
    </React.Fragment>
  );
}
