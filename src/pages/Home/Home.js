import React from "react";
import "./Home.css"
import Biography from "../../components/Biography/Biography";
import Description from "../../components/Description/Description";
import Profile from "../../components/Profile/Profile";
import Portfolio from "../../components/Portfolio/Portfolio";
import SocialNetworks from "../../components/SocialNetworks/SocialNetworks";
import ILike from "../../components/ILike/ILike";

const Home = () => {
    return (
        <div className="home">
            <Profile />
            <Description />
            <Portfolio />
            <Biography />
            <ILike />
            <SocialNetworks />
        </div>
    );
}
export default Home