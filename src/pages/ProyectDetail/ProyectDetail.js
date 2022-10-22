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
import pageGifs8 from "../../images/pageGifs8.png"
import pageGifs9 from "../../images/pageGifs9.png"
import ProyectDescription from "../../components/ProyectDescription/ProyectDescription";

const ProyectDetail = ({ params }) => {

    const descriptionAplicacionGIFs = () => {
        return (<>
            <p>Aplicación web para búsqueda de gifs, en esta aplicación puedes crear tu cuenta para guardar tus gifs favoritos y además de poder verlos en el apartado favoritos, de igual manera podrás eliminar de tus gifs favoritos algún gif, al dar clic en algún gif te redirige a una ventana para ver los detalles del gif seleccionado, la aplicación recomienda los trending de búsqueda del momento, mantiene en la aplicación la última búsqueda realizada. Está aplicación implementa la api de <a className="link" href="https://developers.giphy.com/" target="_blank" rel="noopener noreferrer">GIPHY.</a></p>
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
                    images={[pageGifs1, pageGifs2, pageGifs3, pageGifs4, pageGifs5, pageGifs6, pageGifs7, pageGifs8, pageGifs9]}
                    website={'https://gifty-react.vercel.app/'}
                    platform={'Windows, macOS, Linux, iOS, Android'}
                    slack={'React, JavaScript, HTML, CSS'}
                    github={'https://github.com/Bryan-Romero/app-gifs-react'}
                />
            }
        </div>
    )
}
export default ProyectDetail