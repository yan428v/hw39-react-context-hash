import React, {Component} from 'react';
import styles from '../css/farGalaxy.module.css';

const StarWars = () => {
    const starWarsInfo = sessionStorage.getItem("opening_crawl");
    return (
        <div className={styles.farGalaxy}>
            {starWarsInfo}
        </div>
    );
}

export default StarWars;