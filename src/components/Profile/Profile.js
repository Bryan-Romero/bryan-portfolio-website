import React from "react";
import "./Profile.css"
import imgProfile from "../../images/imgProfile.png"

const Profile = () => {
    return(
        <div className="profileSection">
            <p className="firstText">Hola, soy un desarrollador de aplicaciones web en México!</p>
            <div className="name-desccription-container">
                <div>
                    <h1 className="name">Bryan Hassiel Romero Bautista</h1>
                    <p>Creador de aplicaciones web frontend y backend</p>
                </div>
                <img className="imgProfile" src={imgProfile} alt="imgProfile" />
            </div>
        </div >
    )
}
export default Profile