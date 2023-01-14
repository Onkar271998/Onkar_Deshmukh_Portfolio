import styles from "../styles/Contact.module.css";

const Contact= () => {
  return (
    <div id="contact" className={styles.contactMeSection}>
   
      <h1 className={styles.title}>Contact Me</h1>

     

      <div className={styles.contactMeContent}>
        <div className={styles.contactMeFirstSection}>
          <div>
            <a href="mailto:Onkar271998@gmail.com"  target="_blank">
              <img src={require(`../images/download.png`)} alt="" />
              <h4>Onkar271998@gmail.com</h4>
            </a>
          </div>
          <div>
            <a href="https://github.com/Onkar271998"  target="_blank">
              <img src={require(`../images/github.png`)} alt="" />
              <h4>@OnkarDeshmukh</h4>
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/onkar-deshmukh-6a89a8213/"  target="_blank">
              <img src={require(`../images/download (1).png`)} alt="" />
              <h4>@OnkarDeshmukh</h4>
            </a>
          </div>
          <div>
            <a href="tel:+917498514749"  target="_blank">
              <img src={require(`../images/download (2).png`)} alt="" />
              <h4>+91 7498514749</h4>
            </a>
          </div>
        </div>

        <div className={styles.contactMeSecondSection}>
          <img
            style={{
              width: "500px",
              height: "auto",
            }}
            src={require(`../images/contactus.png`)}
            alt="err"
          />
        </div>
      </div>
  
    </div>
  );
};

export default Contact;
