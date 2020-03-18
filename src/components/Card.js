import React, { useState, useEffect } from "react";
import axios from "axios";
import Cardinfo from './Cardinfo';

export default function Card(){
    const [photo, setPhoto] = useState({});

    useEffect(() => {

        axios.get('https://api.nasa.gov/planetary/apod?api_key=8v7DbvMh9GBYWahe2aPCe4UZ8ghdqgKGQmw6EmEB')
        .then(response => {
        console.log(response);
        setPhoto(response.data);
        })
        .catch(error => {
        console.log("photo data didn't load", error);
        });

    }, []);

    return (

        <div className = "photo-card">
              
            <img src = {photo.url} className = "space-img"/>

            <Cardinfo
            title = {photo.title}
            date = {photo.date}
            explanation = {photo.explanation}
            copyright = {photo.copyright}
            />

        </div>

    )

}