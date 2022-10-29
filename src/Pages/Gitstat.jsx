import React from 'react'
import styles from "../styles/gitstat.module.css";
import GitHubCalendar from "react-github-calendar"
function Gitstat() {
  return (
    <div className={styles.container}>
    <div className={styles.title} >Github Stats</div>
    <GitHubCalendar username="Onkar271998" className={styles.calender}/>
    </div>
  )
}

export default Gitstat