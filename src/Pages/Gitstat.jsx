import React from 'react'
import styles from "../styles/gitstat.module.css";
import GitHubCalendar from "react-github-calendar"
import {Stack} from "@chakra-ui/react"
function Gitstat() {
  return (
    <div className={styles.container}>
    <div className={styles.title} >Github Stats</div>
    <GitHubCalendar username="Onkar271998" className={styles.calender}/>

    <Stack mt={5} align={"center"} >
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api?username=Onkar271998&show_icons=true&include_all_commits=true&count_private=true&hide=issues,contribs&border_radius=10&locale=en"
            alt="OnkarDeshmukh"
            height="139"
          />
          <img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=Onkar271998&border_radius=10;" alt="OnkarDeshmukh" />
        </Stack>
    </div>
  )
}

export default Gitstat