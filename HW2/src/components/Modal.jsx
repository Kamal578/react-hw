import { Component } from "react";
import PropTypes from "prop-types";
import { AiOutlineClose } from 'react-icons/ai';

class Modal extends Component {
  handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  render() {
    const { header, closeButton, text, actions, onClose } = this.props;

    return (
      <div className="fixed inset-0 flex items-center justify-center modal-overlay bg-gray-900 bg-opacity-50">
        <div className="relative modal bg-red-600 border border-red-600 rounded-lg w-96 p-4" onClick={this.handleModalContentClick}>
          <div className="modal-content text-gray-100">
            <div className="modal-header bg-red-700 flex justify-between items-center p-4">
              <h3 className="modal-title text-xl">{header}</h3>
              {closeButton ? (
                <span className="close-btn cursor-pointer" onClick={onClose}>
                  <AiOutlineClose className="text-2xl" />
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="modal-body bg-red-600 p-4">
              <p>{text}</p>
            </div>
            <div className="modal-footer flex justify-center text-center mt-4">
              {actions}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  header: PropTypes.string,
  closeButton: PropTypes.bool,
  text: PropTypes.string,
  onClose: PropTypes.func,
  actions: PropTypes.node
};

Modal.defaultProps = {
  header: 'Modal',
  closeButton: true,
  text: 'Default text',
  onClose: () => {},
  actions: ''
};

export default Modal;
