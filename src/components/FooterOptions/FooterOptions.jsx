import React from "react";
import "./FooterOptions.css";
import { Link } from "react-router-dom";
function FooterOptions(props) {
  return (
    <ul
      className="footer-options-main"
      style={{ fontSize: `${props.fontSise ? props.fontSise : "1rem"}` }}
    >
      <li>
        <Link>Legal</Link>
      </li>
      <li>
        <Link>Safety&amp;PrivecyCenter</Link>
      </li>
      <li>
        <Link>Privecy policy</Link>
      </li>
      <li>
        <Link>Cookies</Link>
      </li>
      <li>
        <Link>About Ads</Link>
      </li>
      <li>
        <Link>Accessibility</Link>
      </li>
    </ul>
  );
}

export default FooterOptions;
