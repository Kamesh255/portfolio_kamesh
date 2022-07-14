import React from 'react'
import "./Skills.css"
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';

const Skills = () => {
    return (
        <div className="skills-container" id='skills'>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600&display=swap');
            </style>
           
            <h1>Tech Skills</h1>
            <div className="aboutContent">
                <div className="iconsContainer">
                    <Slide left>
                    <div className="icon" >
                        <img src="react.png" alt="react" width="90px" height="90px "/>
                        <p>React</p>
                    </div>
                    </Slide>
                    <Slide left>
                    <div className="icon">
                        <img  src="javascript.png" alt="react" width="90px" height="90px"/>
                        <p>JavaScript</p>
                    </div>
                    </Slide>
                    <Slide left>
                    <div className="icon">
                        <img src="html.png" alt="react" width="90px" height="90px"/>
                        <p>HTML</p>
                    </div>
                    </Slide>
                    <Slide left>
                    <div className="icon">
                        <img src="css.png" alt="react" width="90px" height="90px"/>
                        <p>CSS</p>
                    </div>
                    </Slide>
                    <Slide right>
                    <div className="icon">
                        <img src="redux.png" alt="react" width="90px" height="90px"/>
                        <p>Redux</p>
                    </div>
                    </Slide>
                    <Slide right>
                    <div className="icon">
                        <img src="nodejs.png" alt="react" width="90px" height="90px"/>
                        <p>Node js</p>
                    </div>
                    </Slide>   
                    <Slide right>
                    <div className="icon">
                        <img src="tailwind.png" alt="react" width="90px" height="90px" />
                        <p>Tailwind</p>
                    </div>
                    </Slide>
                    <Slide right>
                    <div className="icon">
                        <img src="mongodb.png" alt="react" width="90px" height="90px"/>
                        <p>MongoDB</p>
                    </div>
                    </Slide>
                </div>
                <h2 style={{textDecoration:"underline", marginTop:"40px"}}>Proficiencies</h2>
                <div className="iconsContainer1">
                    <Bounce bottom>
                    <div className="icon">
                        <img src="frontend.png" alt="react" width="90px" height="90px"/>
                        <p>Frontend</p>
                    </div>
                    <div className="icon">
                        <img src="backend.png" alt="react" width="90px" height="90px"/>
                        <p>Backend</p>
                    </div>
                    <div className="icon">
                        <img src="ds.png" alt="react" width="90px" height="90px"/>
                        <p>Data Structures <br/> & Algorithms</p>
                    </div>
                    </Bounce>
                </div>
            </div>
        </div>
    )
}

export default Skills
