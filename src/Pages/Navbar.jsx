import React from 'react'
import { Button } from '@chakra-ui/react';


import styles from "../styles/navbar.module.css";


const Navbar = () => {
   
  const handleScroll=(target)=>{
    console.log(target)
    const targetElement = document.getElementById(target);
    targetElement.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className={styles.container}>
        <div >

        <div className={styles.myname}>Onkar Deshmukh</div>
        </div>
        <div className={styles.navin}>

        <div  onClick={() => handleScroll("about")} >About</div>
       <div  onClick={() => handleScroll("skills")}>Skills</div>
       <div  onClick={() => handleScroll("projects")}>Projects</div>
       <div   onClick={() => handleScroll("contact")}>Contact</div>
       <div >       <a href="https://drive.google.com/file/d/1fQTXut_2hizUKcab-jPZx_NBdJWZFHZh/view?usp=share_link"><Button style={{backgroundColor:"#3f6ff5",color:"white" }} >Resume</Button></a></div>
      

      
        </div>

      
    



    </div>
  )
}

export default Navbar