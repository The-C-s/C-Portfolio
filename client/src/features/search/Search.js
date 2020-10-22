import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { FormInput } from 'shards-react';

import { activeSearch, stopSearch } from './searchSlice';

/**
 * Search bar which searches within titles and tags from
 * content that's currently in the state. Makes a copy of
 * state.content in state.search but filtered by search query.
 * 
 * @param {boolean} show - Whether search bar is available or not. 
 */
export default function Search({ show }) {

  const content = useSelector(state => state.content);
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  // Use Sets to ignore duplicates
  const options = {
    titles: new Set(),
    tags: new Set()
  }

  // Make set of all titles and tags
  content.forEach(_content => {

    options.titles.add(_content.title.toLowerCase());

    _content.tags.forEach(tag => {
      if (typeof tag === 'string') options.tags.add(tag.toLowerCase());
      else if ('tag' in tag) options.tags.add(tag.tag.toLowerCase());
    });
  });

  const search = _query => {

    _query = _query.toLowerCase();
    let _results = new Set();
    let matchedTitles = new Set();
    let matchedTags = new Set();

    options.titles.forEach(title => {
      if (title.includes(_query)) matchedTitles.add(title);
    });

    options.tags.forEach(tag => {
      if (tag.includes(_query)) matchedTags.add(tag);
    });

    content.forEach(_content => {

      if (matchedTitles.has(_content.title.toLowerCase())) _results.add(_content);

      _content.tags.forEach(tag => {
        if (matchedTags.has(tag.toLowerCase())) _results.add(_content);
      });
    });

    return [..._results];
  }

  const onChangeHandler = e => {

    const _query = e.target.value;
    setQuery(_query);

    if (e.target.value === '') {

      dispatch(stopSearch());
      return;
    }

    const _results = search(_query);
    dispatch(activeSearch({ query: _query, content: _results }));
  }

  return(
    <div className="search">
      <FormInput className="search-input" type="search" placeholder="Search" value={query} onChange={onChangeHandler}/>
    </div>
  );
}
