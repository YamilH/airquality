import React from 'react';
import classes from './Loader.module.css';

const Loader = () => {
  return (
    <div className={classes.Container}>
    <span className={classes.Loader}>Respira</span>
    <span className={classes.Frase}>"¡la calidad del aire,</span>
    <span className={classes.Frase}>en el lugar donde estés!"</span>
    </div>
  );
}

export default Loader;

