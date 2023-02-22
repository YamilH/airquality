import React from 'react';
import classes from './Base.module.css';

const Base = () => {
  return (
    <div className={classes.ContainerPage}>
      <div className={classes.ContainerBase}>
        <div className={classes.TituloCiudad}>
        <h2>Nombre de Ciudad</h2>
        </div>
        <div className={classes.GrupoPrincipal}></div>
        <div className={classes.GrupoPrincipal}></div>
        <div className={classes.GrupoPrincipal}></div>
    </div>
    </div>
  );
}

export default Base;