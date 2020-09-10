import React, { Component } from 'react';

export default class ContentItem extends Component {
  render() {

    const { id, title, body } = this.props.content;

    return(
      <div className="row">
        <div class="card mt-5 ml-5 mr-5">
          <div class="card-body">
            <h4 class="card-title">{title}</h4>
            <p class="card-text">{body}</p>
            <a href="#" class="card-link">Edit</a>
            <a href="#" class="card-link">Delete</a>
          </div>
        </div>
      </div>
    );
  }
}
