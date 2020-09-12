import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Modal from 'react-bootstrap/Modal';

import { DELETE } from '../../actions/types';
import api from '../../common/api';

export default function DeleteContent({ content, show, closeHandler }) {

  const dispatch = useDispatch();
  const { authType, token } = useSelector(state => state.user);

  const deleteClickHandler = () => {

    api.deleteContent(content.id, authType, token)
      .then(dispatch({ type: DELETE, payload: content.id }))
      .catch(err => console.log(err));
      
    closeHandler();
  }

  return(
    <Modal show={show} onHide={closeHandler}>
      <Modal.Header><Modal.Title>Delete Content</Modal.Title></Modal.Header>
      <Modal.Body>Are you sure you want to delete '{content.title}'?</Modal.Body>
      <Modal.Footer>
        <button className="btn btn-primary" onClick={closeHandler}>No, cancel</button>
        <button className="btn btn-danger" onClick={deleteClickHandler}>Yes, delete</button>
      </Modal.Footer>
    </Modal>
  )
}
