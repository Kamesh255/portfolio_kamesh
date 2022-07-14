import React from "react";
import "./Home.css"



const Home = () => { 
    const resume = () => {
        window.open("https://drive.google.com/file/d/1fWzzldU_fvgveMzyzd-KlG-M7zQBnGu1/view?usp=sharing", "_blank")
    }
    const linkedin = () => {
        window.open("https://www.linkedin.com/in/kamesh-hedau-b22349226/", "_blank")
    }
    const github = () => {
        window.open("https://github.com/Kamesh255", "_blank")
    }

    return (
        <>
            <div className="hom-container" id="home">
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600&display=swap');
                </style>
                <img style={{ borderRadius: "100%" }} src="Kamesh.png" alt="profile" width="30%" className="hom_img" />
                <div className= "hom-box">
                    <h4>Hello, I'm <br /> <span className="name">Kamesh Hedau</span> </h4>
                    <h4 style={{margin:"20px 0"}}>I'm a full-stack web developer.</h4>
                    {/* <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 😎",
                    1000,
                    "Full Stack Web Developer 💻",
                    1000,
                    "MERN Stack Dev 📱",
                    1000,
                    "React/Redux Dev 🌐",
                    1000,
                  ]}
                />
              </h1>
            </span> */}
                    <p >I am passionate about building challenging projects and excelling in their development, and looking forward to create a mark for myself as a Software Developer.</p>
                    <div className="social">
                        <button className="tooltip" onClick={() => github()}>
                            <img style={{ margin: "0 4px", cursor: "pointer" }} src="github1.png" alt="github" width="35px" />
                            <span className="tooltiptext">GitHub</span>
                        </button>
                        <button className="tooltip" onClick={() => linkedin()}>
                            <img style={{ margin: "0 4px", cursor: "pointer" }} src="linkedin.png" alt="linkedin" width="35px" />
                            <span className="tooltiptext">Linkedin</span>
                        </button> 
                    <button className="homeBtns" onClick={() => resume()}> View Resume </button>
                     
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home