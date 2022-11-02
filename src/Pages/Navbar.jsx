import React from 'react'
import { Button } from '@chakra-ui/react';


import styles from "../styles/navbar.module.css";
import MobNav from './MobNav';


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
       <div >       <a href={require("../images/Onkar_Deshmukh_Resume__.pdf")} download={true}><Button style={{backgroundColor:"#3f6ff5",color:"white" }} >Resume</Button></a></div>
      


        </div>

        <div className={styles.moba}>
          <MobNav/>
        </div>

      
    



    </div>
  )
}

export default Navbar