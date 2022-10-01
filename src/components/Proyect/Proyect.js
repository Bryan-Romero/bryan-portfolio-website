import React from "react";
import "./Proyect.css"

const Proyect = ({imgProyect, nameProyect, littleDescription}) => {
    return(
        <div className="proyectContainer">
            <img className="imgProyect" src={imgProyect} alt="imgProyect"/>
            <h4 className="nameProyect">{nameProyect}</h4>
            <p className="littleDescription">{littleDescription}</p>
        </div>
    )
}
export default Proyect