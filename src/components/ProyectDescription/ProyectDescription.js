import React from "react";
import "./ProyectDescription.css"

const ProyectDescription = ({ description, website, platform, slack, github, images }) => {
    return(
        <div className="proyectDescription">
            <div className="descriptionProyectSection">
                <p className="descriptionProyect">{description()}</p>
                <div className="infoProyect">
                    <h4 className="infoProyectName">Sitio web</h4>
                    <a className="infoProyectDesc" href={`${website}`} target="_blank" rel="noopener noreferrer">{website}</a>
                </div>
                <div className="infoProyect">
                    <h4 className="infoProyectName">Plataforma</h4>
                    <p className="infoProyectDesc">{platform}</p>
                </div>
                <div className="infoProyect">
                    <h4 className="infoProyectName">Slack</h4>
                    <p className="infoProyectDesc">{slack}</p>
                </div>
                {
                    github &&
                    <div className="infoProyect">
                        <h4 className="infoProyectName">GitHub</h4>
                        <a className="infoProyectDesc" href={`${github}`} target="_blank" rel="noopener noreferrer">{github}</a>
                    </div>
                }
            </div>
            <div className="imgsProyect">
                {
                    images.map(singleImg => 
                        <img className="imgProyect" src={singleImg} alt={`${singleImg}`} key={singleImg}/>
                    )
                }
            </div>
        </div>
    )
}
export default ProyectDescription