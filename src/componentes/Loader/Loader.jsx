import React from 'react';
import classes from './Loader.module.css';

const Loader = () => {
  return (
    <div className={classes.Container}>
    <span className={classes.Loader}>AireApp</span>
    </div>
  );
}

export default Loader;

