import React from "react";
import classes from "./movilist.module.css";
import Movicard from "./MoviCard";
import movies from "../Movidetails";
const MoviList = (props) => {
  return (
    <div className={classes.movibox}>
      {movies.map((movi, key) => {
        console.log(key);
        return (
          <Movicard
            key={movi.id}
            name={movi.name}
            summary={movi.summary}
            poster={movi.poster}
            like={movi.likes}
            rating={movi.rating}
          />
        );
      })}
    </div>
  );
};

export default MoviList;
