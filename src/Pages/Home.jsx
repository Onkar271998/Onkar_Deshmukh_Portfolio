
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
      <a href="https://drive.google.com/file/d/1fQTXut_2hizUKcab-jPZx_NBdJWZFHZh/view?usp=share_link"><Button style={{backgroundColor:"#3f6ff5",color:"white" ,marginTop:"3rem"}} >Resume</Button></a>
      </div> 
      <div className={styles.innertwo}> 
      <img src={require(`../images/me.png`)} alt="c" className={styles.profile}/> 

     </div>

    
     </div>





   
  )
}

export default Home