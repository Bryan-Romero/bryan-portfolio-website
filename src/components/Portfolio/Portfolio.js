import React from "react";
import { Link } from "wouter";
import "./Portfolio.css"

const Portfolio = () => {
    return(
        <div className="portfolioSection">
            <Link to="/proyects">
                <p className="buttonPortfolio">Mi portafolio &gt;</p>
            </Link>
        </div>
    )
}
export default Portfolio