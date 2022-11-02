
import React from 'react'
import {Button} from "@chakra-ui/react"
import styles from "../styles/home.module.css";

function Home() {
  return (
    <div className={styles.container}>

      <div className={styles.innerone}>
      <h1 className={styles.head1}>Hello I'am</h1>
      <h1 className={styles.head2}>Onkar Deshmukh</h1>
      <h1 className={styles.head3}>Full Stack Web Developer</h1> 
      
       <img src={require(`../images/mern.png`)} alt="c" className={styles.mern}/>
      <a href={require("../images/Onkar_Deshmukh_Resume__.pdf")} download={true}><Button style={{backgroundColor:"#3f6ff5",color:"white" ,marginTop:"3rem"}} >Resume</Button></a>
      </div> 
      <div className={styles.innertwo}> 
      <img src={require(`../images/me.png`)} alt="c" className={styles.profile}/> 

     </div>

    
     </div>





   
  )
}

export default Home