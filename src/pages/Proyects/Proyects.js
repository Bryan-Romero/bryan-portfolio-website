import React from "react";
import Proyect from "../../components/Proyect/Proyect";
import "./Proyects.css"
import pageGifs1 from "../../images/pageGifs1.png"
import ProyectSection from "../../components/ProyectSection/ProyectSection";

const Proyects = () => {
    return(
        <div className="proyectsContainer">
            <ProyectSection title={'Personales'} borderBottom={false}>
                <Proyect 
                    imgProyect={pageGifs1}
                    nameProyect={'Aplicacion GIFs'}
                    littleDescription={'Aplicación web de búsqueda de gifs, ademas recomendando las búsquedas trending de GIPHY.'}
                />
            </ProyectSection>
        </div>
    )
}

export default Proyects