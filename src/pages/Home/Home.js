import React from "react";
import GitHubIcon from "../../components/GitHubIcon/GitHubIcon";
import InstagramIcon from "../../components/InstagramIcon/InstagramIcon";
import LinkedinIcon from "../../components/LinkedinIcon/LinkedinIcon";
import TwiterIcon from "../../components/TwiterIcon/TwiterIcon";
import "./Home.css"
import imgProfile from "../../images/imgProfile.png"
import { Link } from "wouter"

const Home = () => {
    return (
        <div className="home">
            <div className="firstSection">
                <p className="firstText">Hola, soy un desarollador frontend en Mexico!</p>
            </div>
            <div className="profileSection">
                <div>
                    <h1 className="name">Bryan Hassiel Romero Bautista</h1>
                    <p>Creador de aplicaciones web (frontend)</p>
                </div>
                <img className="imgProfile" src={imgProfile} alt="imgProfile" />
            </div>
            <div className="workSection">
                <h3 className="sectionTitle">Trabajo</h3>
                <p className="descriptionWork">Magna ea dolore in ut ex ea mollit et proident elit. Aute mollit enim anim anim est. Quis ipsum veniam dolor reprehenderit mollit deserunt officia mollit cupidatat. Dolor magna cupidatat tempor cillum ad sint esse enim cupidatat. In laborum ipsum quis deserunt dolor culpa cupidatat eiusmod amet id sunt cupidatat reprehenderit fugiat.</p>
            </div>
            <div className="portfolioSection">
                <Link to="/proyects">
                    <p className="buttonPortfolio" href="/">Mi portafolio &gt;</p>
                </Link>
            </div>
            <div className="biographySection">
                <h3 className="sectionTitle">Biografia</h3>
                <div className="dateContainer">
                    <p className="year">1998</p>
                    <p className="descriptionYear">Labore deserunt do non ut eiusmod dolore exercitation voluptate eiusmod nulla. Labore deserunt do non ut eiusmod dolore exercitation voluptate eiusmod nulla.</p>
                </div>
                <div className="dateContainer">
                    <p className="year">2016</p>
                    <p className="descriptionYear">Labore deserunt do non ut eiusmod dolore exercitation voluptate eiusmod nulla. Labore deserunt do non ut eiusmod dolore exercitation voluptate eiusmod nulla.</p>
                </div>
                <div className="dateContainer">
                    <p className="year">2022</p>
                    <p className="descriptionYear">Labore deserunt do non ut eiusmod dolore exercitation voluptate eiusmod nulla. Labore deserunt do non ut eiusmod dolore exercitation voluptate eiusmod nulla.</p>
                </div>
                <div className="iLoveSection">
                    <p className="sectionTitle year">Me guta ♥</p>
                    <p className="iLoveDescription">Labore deserunt do non ut eiusmod dolore exercitation voluptate eiusmod nulla. Labore deserunt do non ut eiusmod dolore exercitation voluptate eiusmod nulla.</p>
                </div>
            </div>
            <div className="socialSection">
                <h3 className="sectionTitle">Presencia en linea</h3>
                <div className="socialMediaContainer">
                    <div className="socialMedia">
                        <GitHubIcon/>
                        <p className="socialMediaTitle">GitHub</p>
                    </div>
                    <div className="socialMedia">
                        <InstagramIcon/>
                        <p className="socialMediaTitle">Instagram</p>
                    </div>
                    <div className="socialMedia">
                        <TwiterIcon/>
                        <p className="socialMediaTitle">Twiter</p>
                    </div>
                    <div className="socialMedia">
                        <LinkedinIcon/>
                        <p className="socialMediaTitle">Linkedin</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home