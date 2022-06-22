import React, { useEffect } from "react";
import "./Home.css";
import * as THREE from "three";
import moonImage from "../../Images/moonn.jpeg";
import venusImage from "../../Images/venuss.jpg";
import spaceImage from "../../Images/space.jpg";
import { Typography } from "@mui/material";
import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
} from "react-icons/si";
import { Link } from "react-router-dom";
import { MouseOutlined } from "@mui/icons-material";



const Home = ({timelines,youtubes,skills})=>{

    useEffect(() => {

       const textureLoader = new THREE.TextureLoader();

       const moonTexture = textureLoader.load(moonImage);
       const venusTexture = textureLoader.load(venusImage);
       const spaceTexture = textureLoader.load(spaceImage);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
          75,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
        );
        camera.position.set(4, 4, 8);

    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });

    const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
    const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
    const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);
    venus.position.set(8, 5, 5);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    const pointLight2 = new THREE.PointLight(0xffffff, 0.1);

    pointLight.position.set(8, 5, 5);
    pointLight2.position.set(-8, -5, -5);

    scene.add(moon);
    scene.add(venus);
    scene.add(pointLight);
    scene.add(pointLight2);
    scene.background = spaceTexture;

    const constSpeed = 0.01;
    window.addEventListener("mousemove", (e) => {
      if (e.clientX <= window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientX > window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }

      if (e.clientY > window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientY <= window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }
    });

    const animate = () => {
      requestAnimationFrame(animate);
      moon.rotation.y += 0.001;
      venus.rotation.y += 0.001;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };

    animate();

    return window.addEventListener("scroll", () => {
      camera.rotation.z = window.scrollY * 0.001;
      camera.rotation.y = window.scrollY * 0.003;

      const skillsBox = document.getElementById("homeskillsBox");

      if (window.scrollY > 1500) {
        skillsBox.style.animationName = "homeskillsBoxAnimationOn";
      } else {
        skillsBox.style.animationName = "homeskillsBoxAnimationOff";
      }
    });

    } ,[])

    return (
        <div className="home">

          <canvas className="homeCanvas"></canvas>
          <div className="homeCanvasContainer">
        <Typography variant="h1">
          <p>A</p>
          <p>V</p>
          <p>I</p>
          <p>N</p>
          <p>A</p>
          <p>S</p>
          <p>H</p>
        </Typography>

        <div className="homeCanvasBox">
          <Typography variant="h2">DEVELOPER</Typography>
          <Typography variant="h2">DESIGNER</Typography>
          <Typography variant="h2">PROGRAMMER</Typography>
          <Typography variant="h2">DATA ANALYST</Typography>
        </div>

        <Link className="work" to="/projects">VIEW WORK</Link>
      </div>

      <div className="homeScrollBtn">
        <MouseOutlined />
      </div>

         
         <div className="homeContainer">
         <div className="specialhead">
         <Typography variant="h3">SPECIALISATIONS</Typography>
         </div>
           <div className="homeContainer2">
              <div className="special">
              <Typography variant="h4">WEB DEVELOPMENT</Typography>
              <Typography variant="h7">
                <p>I am a full stack Developer and I can Design and build a website using Node.js,React.js ,Express.js and Mongodb </p>
              </Typography>

              </div>
              <div className="special">
              <Typography variant="h4">PROGRAMMING</Typography>
              <Typography variant="h7">
                <p>I have solved more than 1000 problems on various online programing websites and on geeksforgeeks I am under top 25 
                students in my college </p>
              </Typography>

              </div>
              <div className="special">
              <Typography variant="h4">DATA ANALYSIS </Typography>
              <Typography variant="h7">
                <p>I have some data analysis experience using Python, SQL and Microshoft Excel </p>
              </Typography>

              </div>
              </div>
         </div>
         <div className="homeSkills">
         <Typography variant="h3">SKILLS</Typography>
         <div className="homeCubeSkills">
            <div className="homeCubeSkillsFaces homeCubeSkillsFaces1"> 
                <img src="https://miro.medium.com/max/1040/1*0lgunvVYa8gZ_sfMHflyvw.jpeg" alt="face1" />
            </div>
            <div className="homeCubeSkillsFaces homeCubeSkillsFaces2"> 
                <img src="https://miro.medium.com/max/766/1*uPL1uCtLBRSk6akPL2hNzg.jpeg" alt="face2" />
            </div>
            <div className="homeCubeSkillsFaces homeCubeSkillsFaces3"> 
                <img src="https://nareshit.com/wp-content/uploads/2019/01/ReactJS-online-training-nareshit.jpg" alt="face3" />
            </div>
            <div className="homeCubeSkillsFaces homeCubeSkillsFaces4"> 
                <img src="https://blog.logrocket.com/wp-content/uploads/2019/10/nodejs.png" alt="face4" />
            </div>
            <div className="homeCubeSkillsFaces homeCubeSkillsFaces5"> 
                <img src="https://sparc.org.in/wp-content/uploads/2018/12/best-C-programming-course-in-gtb-nagar-sparc-academy.png" alt="face5" />
            </div>
            <div className="homeCubeSkillsFaces homeCubeSkillsFaces6"> 
                <img src="https://www.chandigarhhelp.com/wp-content/uploads/2020/02/Top-Data-Structure-Training-Institutes-in-Chandigarh-1.jpg" alt="face6" />
            </div>

         </div>

         <div className="cubeShadow"></div>
         <div className="homeSkillsBox" id="homeSkillsBox">
          <SiCplusplus />
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiMongodb />
          <SiExpress />
          <SiReact />
          <SiNodedotjs />
          <SiThreedotjs />
        </div>
         </div>

        </div>
    )
}

export default Home;
