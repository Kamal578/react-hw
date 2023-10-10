import { Component } from "react";
import PropTypes from "prop-types";

class Modal extends Component {
  handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  render() {
    const { data, onClose } = this.props;
    return (
      <div className="fixed inset-0 flex items-center justify-center modal-overlay bg-gray-900 bg-opacity-50">
        <div
          className="relative modal mx-auto bg-red-600 rounded-lg p-4"
          onClick={this.handleModalContentClick}
        >
          <div className="modal-content text-white">
            <div className="modal-header bg-red-700 flex justify-between items-center p-4">
              <h3 className="modal-title text-xl">{data.header}</h3>
              {data.closeButton ? (
                <span className="close-btn cursor-pointer" onClick={onClose}>
                  ╳
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="modal-body bg-red-600 p-4">
              <p className="text-lg">{data.text}</p>
            </div>
            <div className="modal-footer flex justify-center text-center mt-4 gap-2">
              {data.actions}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  data: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
