import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import ContentItem from './ContentItem';

import { FETCH } from '../../actions/types';

export default function Feed() {

  const content = useSelector(state => state.content);
  const dispatch = useDispatch();

  useEffect(() => {

    async function getData() {

      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      dispatch({ type: FETCH, payload: res.data });
    }
    getData();
  }, []);

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
