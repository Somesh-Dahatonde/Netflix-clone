import React from "react";
import './header.css'

function Header () {

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
                            <option>English</option>
                            <option>Marathi</option>
                        </select>
                    </li>
                    <li>
                        <button>Sign In</button>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}


export default Header;