import React from 'react';

export default function Tags({ tags }) {

  const clickHandler = tag => console.log(`'${tag}' tag clicked`);

  return(
    <div>
      tags&nbsp;&nbsp;&nbsp;›{tags.map(
        tag => <>
          &nbsp;&nbsp;&nbsp;
          <a
            href="#"
            className="contentitem-tag"
            onClick={() => clickHandler(tag)}
          >{tag}</a></>
      )}
    </div>
  );
}
