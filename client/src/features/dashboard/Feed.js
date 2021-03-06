import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Skeleton from 'react-loading-skeleton';

import ContentItem from '../content/ContentItem';
import RightNavbar from "../layout/RightNavbar"; 

import { getContent } from '../content/contentSlice';

/**
 * Contains the user's content in a feed/wall format.
 */
export default function Feed() {

  const dispatch = useDispatch();
  const gettingContent = useSelector(state => state.app.loading.getContent);
  const user = useSelector(state => state.user);
  const search = useSelector(state => state.search);
  const content = useSelector(state => state.content);
  const filteredContent = search.active ? search.content : content;

  useEffect(() => {

    async function fetch() { dispatch(getContent()) }

    // Skip loading if already in state
    if (user.content && user.content.length !== content.length) fetch();
  }, [dispatch, user, content]);

  return(
    <div className="flex-wrap pt-3 pb-2 mb-3">
      <RightNavbar/>
      <div className = "content-box">
      {gettingContent
        ? <><h1><Skeleton/></h1><p><Skeleton count={3}/></p></>
        : filteredContent.map(item => <ContentItem content={item} key={item.id}/>)}
        </div>
    </div>
  );
}
