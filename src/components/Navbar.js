import * as React from "react";
import classes from "./navbar.module.css";
import ProfileIcon from "./ProfileIcon";

export default function Navbar(props) {
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <p className={classes.logoname}>
          Book<span className={classes.my}>My</span>Show
        </p>
      </div>
      <div className={classes.navbaroptions}>
          <input className={classes.search} placeholder="Search Movies...."/>
          <ProfileIcon/>
      </div>
        
    </div>
  );
}
