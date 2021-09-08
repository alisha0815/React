import React from "react";
import PropTypes from "prop-types";

const Footer = (props) => {
  console.log("props in the footer", props);
  let { currentYear, authorName } = props;

  return (
    <footer>
      <p>I am footer</p>
      <p>
        copyright {currentYear} created by {authorName}
      </p>
    </footer>
  );
};

Footer.prototype = {
  currentYear: PropTypes.number.isRequired,
};

export default Footer;

Footer.defaultProps = {
  currentYear: 2020,
};
