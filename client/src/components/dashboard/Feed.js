import React, { Component } from 'react';
import axios from 'axios';

import ContentItem from './ContentItem';
import EditContent from './EditContent';

export default class Feed extends Component {

  state = {
    content: [],
    showEdit: false
  };

  async componentDidMount() {

    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => this.setState({ content: res.data }));
  }

  render() {

    const { content, showEdit } = this.state;

    return(
      <React.Fragment>
        <div className="flex-wrap pt-3 pb-2 mb-3">
          <div className="row">
            <h1 className="h2 ml-5 mt-5">Your Content</h1>
          </div>
          {content.map(item => <ContentItem content={item} key={item.id}/>)}
        </div>
        {showEdit ?
          <EditContent/>
        : null}
      </React.Fragment>
    );
  }
}
