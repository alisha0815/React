import React from "react";

const Footer = (props) => {
  console.log("props in the footer", props);
  return (
    <footer>
      <p>I am footer</p>
      <p>copyright {props.currentYear}</p>
    </footer>
  );
};

export default Footer;
