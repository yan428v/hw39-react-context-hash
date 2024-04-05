import React from 'react';

const Friend = ({friend,pos}) => {
    let styles = "col-4 p-1";
    if(pos===7){
        styles = "bottom-left col-4 p-1";
    }
    if(pos === 9 ){
        styles = "bottom-right col-4 p-1";
    }
    return (
        <img className={styles} src={friend} alt="friend"/>
    );
};

export default Friend;