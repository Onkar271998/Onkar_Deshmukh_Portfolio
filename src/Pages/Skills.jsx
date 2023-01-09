import React from "react";
import { stackList } from "../Pages/Skill";
import styles from "../styles/skills.module.css";
function Skills() {
  return (
    <>
      <div id="skills" className={styles.container}>
        <div className={styles.title}>Skills</div>

        <div className={styles.bigcard}>
          <div className={styles.card}>
            {stackList.map((stack) => (
              <div className={styles.innercard}>
                <img
                  src={stack.img}
                  alt={stack.name}
                  className={styles.image}
                />
                <div>{stack.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
