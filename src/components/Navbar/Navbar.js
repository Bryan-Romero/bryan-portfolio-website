import React, { useState } from "react"
import "./Navbar.css"
import MoonIcon from "../MoonIcon/MoonIcon.js"
import SunIcon from "../SunIcon/SunIcon.js"

export default function Navbar() {
    const [stateTheme, setStateTheme] = useState(true)

    const handleClickTheme = () => {
        setStateTheme(!stateTheme)
    }

    return (
        <div className="navbarContainer">
            <h2 className="navTitle">Bryan Romero</h2>
            <div className={`theme ${stateTheme? 'sunBackgrong' : 'moonBackgrong'}`}  onClick={handleClickTheme}>
                {stateTheme 
                    ? <SunIcon/>
                    : <MoonIcon/>
                }
            </div>
        </div>
    )
}