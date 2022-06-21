import React from "react";
const year = 2022;
function Footer(){

    const currentYear = new Date().getFullYear();
    return <footer>
    <p>Copyright {currentYear}</p>
  </footer>
}

export default Footer;