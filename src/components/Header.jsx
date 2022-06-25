import React from "react";
import './header.css'

function Header (props) {

    return (
        <>
        <nav className="nav">
            <div className="logo-div">
                <img src='../asset/Logo.png' alt="image not rendered"/>
            </div>
            <div className="sign-indiv">
                <ul>
                    <li>
                    
                        <select>
                            <span>sd</span>
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
    )
}


export default Header;