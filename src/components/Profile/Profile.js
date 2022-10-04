import React from "react";
import "./Profile.css"
import imgProfile from "../../images/imgProfile.jpg"

const Profile = () => {
    return(
        <div className="profileSection">
            <p className="firstText">Hola, soy un desarrollador de aplicaciones web en México!</p>
            <div className="name-desccription-container">
                <div>
                    <h1 className="name">Bryan Hassiel Romero Bautista</h1>
                    <p>Creador de aplicaciones web y apis fullstack jr</p>
                </div>
                <picture className="imgProfileContainer">
                    <img className="imgProfile" src={imgProfile} alt="imgProfile" />
                </picture>
            </div>
        </div >
    )
}
export default Profile