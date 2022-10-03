import React from "react";
import "./Biography.css"

const Biography = () => {
    return(
        <div className="biographySection">
            <h3 className="sectionTitle">Biografia</h3>
            <div className="dateContainer">
                <p className="year">1998</p>
                <p className="descriptionYear">Nace en Nayarit, México.</p>
            </div>
            <div className="dateContainer">
                <p className="year">2016</p>
                <p className="descriptionYear">Finalizo la preparatoria en el colegio de estudios científicos y tecnológicos del estado Nayarit (cecyten) como técnico en programación.</p>
            </div>
            <div className="dateContainer">
                <p className="year">2022</p>
                <p className="descriptionYear">Completo la universidad en el instituto tecnológico de Tepic (TEC) como ingeniero en sistemas computacionales.</p>
            </div>
            <div className="dateContainer">
                <p className="year">2022 a la actualidad</p>
                <p className="descriptionYear">Trabaja para le empresa EVRST sigue aprendiendo.</p>
            </div>
        </div>
    )
}
export default Biography