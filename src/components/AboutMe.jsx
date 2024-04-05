import React, {useEffect, useState} from 'react';
import {base_url} from "../utils/constants.jsx";
import "../css/aboutMe.css"

const AboutMe = () => {
    const [hero, setHero] = useState();

    useEffect(() => {
        const heroStorage = localStorage.getItem("hero");
        if (heroStorage) {
            //TODO create check on time (20 days)
            const hero2 = JSON.parse(heroStorage);
            setHero(hero2);
        } else {
            fetch(`${base_url}/v1/peoples/3`) //TODO * change id from hash
                .then(response => response.json())
                .then(data => {
                    const hero = {
                        name: data.name,
                        height: data.height,
                        id: data.id,
                        birth_year: data.birth_year,
                        eye_color: data.eye_color,
                        gender: data.gender,
                        mass: data.mass
                    }
                    setHero(hero);
                    localStorage.setItem("hero", JSON.stringify(hero));
                })
        }

        return () => {
            console.log("About Me unmount");
        }
    }, []);

    return (
        <div>
            {(hero) &&
                <div className={"farGalaxy hero_box"}>
                    <p><span className={"hero_text"}>Name:</span>{hero.name}</p>
                    <p><span className={"hero_text"}>Id:</span>{hero.id}</p>
                    <p><span className={"hero_text"}>Height:</span> {hero.height}</p>
                    <p><span className={"hero_text"}>Birth Year:</span> {hero.birth_year}</p>
                    <p><span className={"hero_text"}>Eye color:</span> {hero.eye_color}</p>
                    <p><span className={"hero_text"}>Gender:</span> {hero.gender}</p>
                    <p><span className={"hero_text"}>Mass:</span> {hero.mass}</p>
                </div>
            }
        </div>
    );
}

export default AboutMe;