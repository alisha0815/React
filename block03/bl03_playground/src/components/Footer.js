import React from "react";
import PropTypes from "prop-types";

class Footer extends React.Component {
  render() {
    let { currentYear, authorName } = this.props;
    return (
      <footer>
        <p>I am footer</p>
        <p>
          copyright {currentYear} created by {authorName}
        </p>
      </footer>
    );
  }
}

Footer.protoType = {
  currentYear: PropTypes.number.isRequired,
};

export default Footer;

Footer.defaultProps = {
  currentYear: 2020,
};
