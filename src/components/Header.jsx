import React from "react";
import "./header.css";

function Header(props) {
  return (
    <>
      <nav className="nav">
        <div className="logo-div">
          {/* // eslint-disable-next-line */}
          <img src="../asset/Logo.png" />
        </div>
        <div className="sign-indiv">
          <ul>
            <li>
              <select>
                <option>English</option>
                <option>Marathi</option>
              </select>
            </li>
            <li>
              <a href={props.src}>
                <button src={props.src}>{props.name}</button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
