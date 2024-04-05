import React from 'react';
import main from "../images/main.jpg";

const Hero = () => {

    return (
        <section className="float-start w-25">
            <img className="w-100" src={main} alt="hero"/>
        </section>
    );
};

export default Hero;