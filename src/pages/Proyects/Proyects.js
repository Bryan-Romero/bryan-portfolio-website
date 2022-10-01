import React from "react";
import Proyect from "../../components/Proyect/Proyect";
import "./Proyects.css"
import imgProfile from "../../images/imgProfile.png"

const Proyects = () => {
    return(
        <div className="proyectsContainer">
            <Proyect imgProyect={imgProfile} nameProyect={'Proyecto 1'} littleDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
        </div>
    )
}

export default Proyects