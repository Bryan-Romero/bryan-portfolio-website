import React from "react";
import "./Profile.css"
import imgProfile from "../../images/imgProfile.png"

const Profile = () => {
    return(
        <div className="profileSection">
            <div className="name-desccription-container">
                <div>
                    <h1 className="name">Bryan Hassiel Romero Bautista</h1>
                    <p>Creador de aplicaciones web, conocimientos de frontend y backend.</p>
                </div>
                <picture className="imgProfileContainer">
                    <img className="imgProfile" src={imgProfile} alt="imgProfile" />
                </picture>
            </div>
        </div >
    )
}
export default Profile