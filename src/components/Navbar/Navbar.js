import React, { useContext, useState } from "react"
import "./Navbar.css"
import MoonIcon from "../MoonIcon/MoonIcon.js"
import SunIcon from "../SunIcon/SunIcon.js"
import { Link } from "wouter"
import { ThemeContext } from "../../App"

export default function Navbar() {
    const [stateTheme, setStateTheme] = useState(true)

    const theme = useContext(ThemeContext)

    const handleClickTheme = () => {
        setStateTheme(!stateTheme)
        theme.toggleTheme()
    }

    return (
        <div className="navbarContainer">
            <div className="navbarItems">
                <Link to="/" >
                    <h2 className="navTitle">Bryan Romero</h2>
                </Link>
                <div className={`theme ${stateTheme? 'sunBackgrong' : 'moonBackgrong'}`}  onClick={handleClickTheme}>
                    {stateTheme 
                        ? <SunIcon/>
                        : <MoonIcon/>
                    }
                </div>
            </div>
        </div>
    )
}