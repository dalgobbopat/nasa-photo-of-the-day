import React, { useState, useEffect } from "react";

const CardInfo = ({title,date,explanation,copyright}) =>{
    return (
        <div className='photo-info'>
            <h2>{title}</h2>
            <p>{explanation}</p>
            <p>{date}</p>
            <p>{copyright}</p>
        </div>
    );
};
export default CardInfo;