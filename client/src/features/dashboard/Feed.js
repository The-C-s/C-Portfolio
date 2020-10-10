import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Row from 'react-bootstrap/Row';
import Skeleton from 'react-loading-skeleton';

import ContentItem from '../content/ContentItem';

import { getContent } from '../content/contentSlice';

/**
 * Contains the user's content in a feed/wall format.
 */
export default function Feed() {

  const dispatch = useDispatch();
  const gettingContent = useSelector(state => state.app.loading.getContent);
  const gettingUser = useSelector(state => state.app.loading.login);
  const content = useSelector(state => state.content);
  const user = useSelector(state => state.user);

  useEffect(() => {
    async function fetch() { dispatch(getContent()) }
    fetch();
  }, [dispatch]);

  return(
    <div className="flex-wrap pt-3 pb-2 mb-3">
      <Row>
        <h1 className="h2 ml-5 mt-5">
          {gettingUser
            ? <Skeleton width={500}/>
            : `${user.username}'s Content`}
        </h1>
      </Row>
      {gettingContent
        ? <><h1><Skeleton/></h1><p><Skeleton count={3}/></p></>
        : content.map(item => <ContentItem content={item} key={item.id}/>)}
    </div>
  );
}
