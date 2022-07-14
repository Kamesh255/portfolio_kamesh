import React from "react";
import "./Projects.css";
import Flip from 'react-reveal/Flip'; 
import "react-responsive-carousel/lib/styles/carousel.min.css";  



const project = [
    {
        title : "Nykaa Clone",
        desc : "This is my individual project at MASAI SCHOOL.In this project, we have used HTML,JavaScript, React JS, Redux, styled them using CSS & Maretial UI.",
        img: "Nykaa.png",
        tech : ["html.png", "css.png", "javascript.png","react.png","redux.png"],
        repo: "https://github.com/Kamesh255/nykaa2022", 
        live: "https://nykaa-clone-kms.netlify.app/", 
    },
    {
        title : "Bookmyshow Clone",
        desc : "This project is made during the construct week of unit-5 at MASAI SCHOOL.In this project, we have used HTML,JavaScript, React, Express, Mongdb, styled them using CSS & Tailwind.",
        img: "BookShow.png",
        tech : ["html.png", "css.png","tailwind.png", "javascript.png","react.png","mongodb.png"],
        repo: "https://github.com/Rohitbaghel/book-my-show-clone", 
        live: "https://bookmyshow03.netlify.app/ ", 
    },
    {
        title : "Smallcase Clone",
        desc : "This project is made during the construct week of unit-4 at MASAI SCHOOL.In this project, we have used HTML, Mongdb, styled them using CSS & Tailwind.",
        img: "smallcase.png",
        tech : ["html.png", "css.png","tailwind.png", "javascript.png","mongodb.png"],
        repo: "https://github.com/RajP62/Unit-3-Project-smallcase", 
        live: "https://smallcaseproject.herokuapp.com/home ", 
    },
    {
        title : "Jiomart Clone",
        desc : "This project is made during the construct week of unit-2 at MASAI SCHOOL.In this project, we have used HTML and manipulated dom elements, styled them using CSS.",
        img: "jiomart.png",
        tech : ["html.png", "css.png", "javascript.png"],
        repo: "https://github.com/vaibhavkothiyal/jiomartClone.github.io", 
        live: "https://vaibhavkothiyal.github.io/jiomartClone.github.io/html/Index.html"
       
    },
     
];

const Projects = () => { 
    return (
        <div className="pro-wrapper" id="project" >
             <style>
                @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600&display=swap');
            </style>
            <h1  style={{fontFamily: 'Raleway, sans-serif'}}>My Projects</h1>
            <div className= "pro-container">
                {project.map((e) => (
                    <>
                    <Flip left>
                        <div className= "card">
                            <img className= "image" src={e.img} alt="project"/>
                            <div className= "text">
                                <h2>{e.title}</h2>
                                <p >{e.desc}</p>
                                <div>
                                    <h4 style={{fontSize:"large"}}>Tech Stack</h4>
                                    <div className= "tech">
                                        {e.tech.map((image) => (
                                            <div style={{margin:"0 10px"}}>
                                                <img src={image} alt={image} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="pro-end">
                                <button onClick={() => window.open(`${e.repo}`,"_blank")}>View in GitHub</button>
                                <button onClick={() => window.open(`${e.live}`,"_blank")}>Run Demo</button>
                                </div>  
                            </div> 
                        </div>
                    </Flip> 
                    </>
                ))} 
            </div>
        </div>
    );
};

export default  Projects ;
