import React from "react";
import styles from "../styles/about.module.css";

function About() {
  return (
    <>
     

      <div id="about" className={styles.container}>
        
        
          <h1 className={styles.title}>About Me</h1>
          <div className={styles.innerdiv}>
            {/* <h1 className={styles.innername}>Hello !</h1> */}
            <li>
             My name is Onkar Deshmukh & I enjoy creating things that live on the internet . I'am passionate Developer,with strong administrative and communication skills ,good attention to detail and the ability to write efficient code. 
            </li>
          </div>
        </div>
      
    </>
  );
}

export default About;
