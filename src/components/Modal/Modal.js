import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, Modals } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.keyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDown);
  }

  keyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  overlayClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.overlayClick}>
        <Modals>{this.props.children}</Modals>
      </Overlay>,
      modalRoot
    );
  }
}
export default Modal;
