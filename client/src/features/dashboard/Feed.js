import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getContent } from '../content/contentSlice';

import Row from 'react-bootstrap/Row';

import ContentItem from '../content/ContentItem';

// Contains the user's content in a feed/wall format
export default function Feed() {

  const dispatch = useDispatch();
  const content = useSelector(state => state.content);
  // Reload content whenever something significant happens
  useEffect(() => {
    async function fetch() { dispatch(getContent()) }
    fetch();
  }, [dispatch]);

  return(
    <div className="flex-wrap pt-3 pb-2 mb-3">
      <Row>
        {/* a h1 with a class of h2 👀 */}
        <h1 className="h2 ml-5 mt-5">Your Content</h1>
      </Row>
      {content.map(item => <ContentItem content={item} key={item.id}/>)}
    </div>
  );
}
