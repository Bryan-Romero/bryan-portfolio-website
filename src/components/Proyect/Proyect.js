import React from "react";
import { Link } from "wouter";
import "./Proyect.css"

const Proyect = ({imgProyect, nameProyect, littleDescription}) => {
    return(
        <Link to={`/proyect-detail/${nameProyect}`}>
            <div className="proyectContainer">
                <img className="imgProyect" src={imgProyect} alt="imgProyect"/>
                <h4 className="nameProyect">{nameProyect}</h4>
                <p className="littleDescription">{littleDescription}</p>
            </div>
        </Link>
    )
}
export default Proyect