import React from "react";
import "./ProyectSection.css"

const ProyectSection = ({ title, borderBottom, children }) => {
    return(
        <div className={`proyectSectionC ${borderBottom && 'borderBottom'}`}>
            <h3 className='title'>{title}</h3>
            <div className="proyects">
                {children}
            </div>
        </div>
    )
}
export default ProyectSection