import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="main-contener">
        <div>
          <p>Questions? Call 000-800-040-1843</p>
        </div>
        <div className="faq-div">
          <div>
            <ul>
              <li>FAQ</li>
              <li>Investor Relations</li>
              <li>Privacy</li>
              <li>Speed Test</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Centre</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
              <li>Legal Notices</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Centre</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
              <li>Legal Notices</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Centre</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
              <li>Legal Notices</li>
            </ul>
          </div>
        </div>
        <div>
          {" "}
          <select>
            <option>English</option>
            <option>Marathi</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Footer;
