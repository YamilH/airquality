import React from 'react';
import classes from './Search.module.css';

const Search = () => {

function fetchCityData(city, state, country){
      fetch(`${process.env.REACT_APP_API_URL}/v2/city?city=${city}&state=${state}&country=${country}&key=${process.env.REACT_APP_API_KEY}`)
    .then((response) => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    }

  return (
    <div className={classes.Container}>
      <form className={classes.BuscadorContainer}>
        <div className={classes.Buscador}>
          <input type='text' placeholder='Ciudad'></input>
          <input type='text' placeholder='Provincia'></input>
          <input type='text' placeholder='País'></input>

        </div>
        <button onClick={fetchCityData}>
          Buscar
        </button>
      </form>
    </div>
  );
}

export default Search;