import React from "react";
import GitHubIcon from "../GitHubIcon/GitHubIcon";
import "./Footer.css"

export default function Footer() {
    return(
        <div className="footerContainer">
            <p className="textFooter">
                © Bryan Romero. Todos los derechos reservados.
            </p>
            <a className="sourceCodeGH" href="https://github.com/BryanRomeroEverst/bryan-portfolio-website" target="_blank" rel="noopener noreferrer">
                <GitHubIcon /> codigo fuente.
            </a>
        </div>
    )
}