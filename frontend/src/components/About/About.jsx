import { Button, Typography } from "@mui/material";
import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>“Experience is the name everyone gives to their mistakes.” </Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img src="https://avatars.githubusercontent.com/u/54908795?v=4" alt="Avi" className="aboutAvatar" />

          <Typography
            variant="h4"
            style={{ margin: "1vmax 0", color: "black" }}
          >
           Avinash Kumar
          </Typography>

          <Typography>Full Stack Developer and Programmer</Typography>

          <Typography style={{ margin: "1vmax 0", textAlign: "center" }}>
          I have solved more than 1000 problems on various competitive programming websites.
          </Typography>
        </div>

        <div>
          <Typography
            style={{
              wordSpacing: "5px",
              lineHeight: "50px",
              letterSpacing: "5px",
              textAlign: "right",
            }}
          >
         <a className="resume1" href="https://drive.google.com/file/d/1xG3gZ7_uBObUhT_s4X1u3Al_BMgfitbe/view?usp=sharing" target="black">

             <Button ><p style={{color: "black",fontWeight:"500"}}>CLICK ME TO SEE RESUME</p></Button>
                          
          </a>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
