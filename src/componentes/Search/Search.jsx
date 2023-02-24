import React from 'react';
import classes from './Search.module.css';

const Search = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.BuscadorContainer}>
        <select className={classes.Buscador}>
          <option>Juli</option>
          <option>Dejate</option>
          <option>De</option>
          <option>Joder</option>
        </select>
      </div>
    </div>
  );
}

export default Search;