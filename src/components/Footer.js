import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Dhinesh Supply App. All rights reserved.
      </p>
      <p>
        <a href="#privacy">Privacy Policy</a> |{" "}
        <a href="#terms">Terms of Service</a>
      </p>
    </footer>
  );
}

export default Footer;
