import React from 'react';
import ReactList from 'react-list';

import ContentItem from '../content/ContentItem';

export default function Showcase({ items }) {

  // TODO: Replace ContentItem with a component better suited for showcase
  const showcaseRenderer = (index, key) => 
  <div className="showcase-item" key={key}>
    <ContentItem content={items[index]}/>
  </div>

  return(
    <div className="showcase-content">
      <ReactList
        axis="x"
        length={items.length}
        minSize={items.length}
        itemRenderer={showcaseRenderer}
        type="simple"
      />
    </div>
  );
}
