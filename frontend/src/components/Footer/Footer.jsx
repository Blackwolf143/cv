import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, /*BsYoutube,*/ BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, my name is Avinash Kumar. I am a Full-Stack Developer and Programmer. I want to be a good software Developer!
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>HIRE ME</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/Blackwolf143" target="black">
          <BsGithub />
        </a>
        {/* <a href="https://youtube.com/6packprogrammer/" target="black">
          <BsYoutube />
        </a> */}
        <a href="https://www.linkedin.com/in/avinash-kumar-a76a171a2/" target="black">
          <BsLinkedin />
        </a>
        <a href="https://www.instagram.com/avinashkumarsingh4074/" target="black">
          <BsInstagram />
        </a>
      </div>
    </div> 
  );
};

export default Footer;
