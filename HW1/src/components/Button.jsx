import { Component } from "react";

import PropTypes from 'prop-types';

class Button extends Component {
    render() {
        const { backgroundColor, textColor, text, onClick, dataModal } = this.props;
        return (
            <button
                className={`bg-${backgroundColor} text-${textColor} font-medium py-2 px-4 rounded-md shadow-md hover:bg-${textColor} hover:text-${backgroundColor} focus:outline-none focus:ring focus:ring-${backgroundColor}-light focus:ring-opacity-50 transition-all`}
                data-modal={dataModal}
                onClick={onClick}
            >
                {text}
            </button>
        );
    }
}

Button.propTypes = {
    backgroundColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    dataModal: PropTypes.string,
};

export default Button;
