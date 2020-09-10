import React, { Component } from 'react';
import axios from 'axios';

import ContentItem from './ContentItem';
import EditContent from './EditContent';

export default class Feed extends Component {

  state = {
    content: [],
    showEdit: true
  };

  async componentDidMount() {

    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => this.setState({ content: res.data }));
  }

  render() {

    const { content, showEdit } = this.state;

    return(
      <React.Fragment>
        <div class="d-flex justify-content-between flex-wrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">Your Content</h1>
          {content.map(item => <ContentItem content={item}/>)}
        </div>
        {showEdit ?
          <EditContent/>
        : null}
      </React.Fragment>
    );
  }
}
