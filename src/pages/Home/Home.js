import React from "react";
import "./Home.css"
import Biography from "../../components/Biography/Biography";
import Work from "../../components/Work/Work";
import Profile from "../../components/Profile/Profile";
import Portfolio from "../../components/Portfolio/Portfolio";
import SocialNetworks from "../../components/SocialNetworks/SocialNetworks";
import ILike from "../../components/ILike/ILike";

const Home = () => {
    return (
        <div className="home">
            <Profile />
            <Work />
            <Portfolio />
            <Biography />
            <ILike />
            <SocialNetworks />
        </div>
    );
}
export default Home