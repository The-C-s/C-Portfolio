import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  FormInput
} from 'shards-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
  const [showSearch, setShowSearch] = useState(false);
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

  // const autoComplete = () => {

  //   let matchedTitles = new Set();
  //   let matchedTags = new Set();
    
  //   options.titles.forEach(title => {
  //     if (title.includes(query)) matchedTitles.add(title);
  //   });
    
  //   options.tags.forEach(tag => {
  //     if (tag.includes(query)) matchedTags.add(tag);
  //   });
  // }

  const searchClickHandler = () => {
    document.getElementsByClassName('search-input')[0].focus();
    setShowSearch(true);
  }

  const onFocusOutHandler = () => {
    console.log('focus out');
    if (query === '') setShowSearch(false);
  }

  const onChangeHandler = e => {

    const _query = e.target.value;
    setQuery(_query);

    if (e.target.value === '') {

      dispatch(stopSearch());
      return;
    }

    dispatch(activeSearch({ query: _query, content: content }));
  }

  return(
    <div className="search">
      <InputGroup seamless>
        <InputGroupAddon type="prepend">
          <InputGroupText>
            <FontAwesomeIcon
              className={`search-icon search-icon${showSearch ? '-active' : '-inactive'}`}
              icon={faSearch}
              onClick={searchClickHandler}
            />
          </InputGroupText>
        </InputGroupAddon>
        <FormInput
          className={`search-input search-input${showSearch ? '-active' : '-inactive'}`}
          type="search"
          value={query}
          onChange={onChangeHandler}
          onBlur={onFocusOutHandler}
        />
      </InputGroup>
    </div>
  );
}
