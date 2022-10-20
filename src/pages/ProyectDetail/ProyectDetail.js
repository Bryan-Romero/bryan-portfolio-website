import React from "react";
import { Link } from "wouter";
import "./ProyectDetail.css"
import pageGifs1 from "../../images/pageGifs1.png"
import pageGifs2 from "../../images/pageGifs2.png"
import pageGifs3 from "../../images/pageGifs3.png"
import pageGifs4 from "../../images/pageGifs4.png"
import pageGifs5 from "../../images/pageGifs5.png"
import pageGifs6 from "../../images/pageGifs6.png"
import pageGifs7 from "../../images/pageGifs7.png"
import ProyectDescription from "../../components/ProyectDescription/ProyectDescription";

const ProyectDetail = ({ params }) => {

    const descriptionAplicacionGIFs = () => {
        return (<>
            <p>Aplicación web para búsqueda de gifs, en la cual puedes crear tu cuenta y guardar tus gifs favoritos, recomienda los trending de búsqueda, mantiene en el inicio de la app la última búsqueda además de ver el detalle de cada gif dando clic sobre él, está app cuenta con los recursos de <a className="link" href="https://developers.giphy.com/" target="_blank" rel="noopener noreferrer">GIPHY.</a></p>
        </>)
    }

    return(
        <div className="proyectDetailContainer">
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
                    description={descriptionAplicacionGIFs} 
                    images={[pageGifs1, pageGifs2, pageGifs3, pageGifs4, pageGifs5, pageGifs6, pageGifs7]}
                    website={'https://app-gifs-react.vercel.app/'}
                    platform={'Windows, macOS, Linux, iOS, Android'}
                    slack={'React, JavaScript, HTML, CSS'}
                    github={'https://github.com/Bryan-Romero/app-gifs-react'}
                />
            }
        </div>
    )
}
export default ProyectDetail