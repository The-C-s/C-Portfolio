// node imports
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// App imports
import { getContent } from '../../features/content/contentSlice';

// Components
import ContentItem from './ContentItem';

/*
 * Component: Feed
 *
 * Contains the user's content in a feed/wall format.
 */
export default function Feed() {

  // Redux hooks
  const dispatch = useDispatch();
  const content = useSelector(state => state.content);

  // Reload content
  useEffect(async () => dispatch(getContent()), []);

  return(
    <React.Fragment>
      <div className="flex-wrap pt-3 pb-2 mb-3">
        <div className="row">
          <h1 className="h2 ml-5 mt-5">Your Content</h1>
        </div>
        {content.map(item => <ContentItem content={item} key={item.id}/>)}
      </div>
    </React.Fragment>
  )
}
