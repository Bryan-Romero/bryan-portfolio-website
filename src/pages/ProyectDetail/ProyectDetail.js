import React from "react";
import { Link } from "wouter";
import "./ProyectDetail.css"
import pageGifs1 from "../../images/pageGifs1.png"
import pageGifs2 from "../../images/pageGifs2.png"
import pageGifs3 from "../../images/pageGifs3.png"
import pageGifs4 from "../../images/pageGifs4.png"
import ProyectDescription from "../../components/ProyectDescription/ProyectDescription";

const ProyectDetail = ({ params }) => {
    return(
        <div className="proyectDetailC">
            <div className="backAndProyectName">
                <Link to="/proyects">
                    <p className="backToProyects">Proyectos</p>
                </Link>
                <p>&gt;</p>
                <p>{decodeURI(params.proyectName)}</p>
            </div>
            {
                (decodeURI(params.proyectName) === 'Aplicacion GIFs') && 
                <ProyectDescription
                    description={"Aplicación web para búsqueda de gifs, recomienda los trending de búsqueda, mantiene en el inicio de la app la última búsqueda además de ver el detalle de cada gif dando clic sobre él, está app cuenta con los recursos de GIPHY."} 
                    images={[pageGifs1, pageGifs2, pageGifs3, pageGifs4]}
                    website={'https://app-gifs-react.vercel.app/'}
                    platform={'Windows, macOS, Linux, iOS, Android'}
                    slack={'React, JavaScript, HTML, CSS'}
                    github={'https://github.com/BryanRomeroEverst/app-gifs-react.git'}
                />
            }
            
        </div>
    )
}
export default ProyectDetail