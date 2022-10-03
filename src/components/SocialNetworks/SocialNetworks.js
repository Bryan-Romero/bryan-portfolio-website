import React from "react";
import GitHubIcon from "../GitHubIcon/GitHubIcon";
import InstagramIcon from "../InstagramIcon/InstagramIcon";
import LinkedinIcon from "../LinkedinIcon/LinkedinIcon";
import TwiterIcon from "../TwiterIcon/TwiterIcon";
import "./SocialNetworks.css"

const SocialNetworks = () => {
    return(
        <div className="socialSection">
            <h3 className="sectionTitle">Presencia en linea</h3>
            <div className="socialMediaContainer">
                <a className="socialMedia" href="https://github.com/BryanRomeroEverst" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon/>
                    <p className="socialMediaTitle">GitHub</p>
                </a>
                <a className="socialMedia" href="https://www.instagram.com/bhrb.01/" target="_blank" rel="noopener noreferrer">
                    <InstagramIcon/>
                    <p className="socialMediaTitle">Instagram</p>
                </a>
                <a className="socialMedia" href="/" target="_blank" rel="noopener noreferrer">
                    <TwiterIcon/>
                    <p className="socialMediaTitle">Twiter</p>
                </a>
                <a className="socialMedia" href="https://www.linkedin.com/in/bryan-romero-305484229/" target="_blank" rel="noopener noreferrer">
                    <LinkedinIcon/>
                    <p className="socialMediaTitle">Linkedin</p>
                </a>
            </div>
        </div>
    )
}
export default SocialNetworks