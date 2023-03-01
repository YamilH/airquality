import React, {useState} from "react";
import classes from "./Leyenda.module.css";
import hamburger from './../../media/hamburger.svg'

const Leyenda = () => {

  const [ley, setLey] = useState(false);

  const handleLey = () => {
    setLey(!ley);
  };

  return (
    <div className={classes.Container}>

      <div onClick={handleLey} className={classes.Hamburger}>
      <img src={hamburger}></img>
      </div>

      <div className={`${classes.Container} ${ley ? classes.LeyendasIn : classes.LeyendasOut}`}>
      
      <div className={classes.Leyenda1}>
        <h3 className={classes.Title}>Bueno</h3>
        <h3 className={classes.Valor}>0-50</h3>
      </div>

      <div className={classes.Leyenda2}>
        <h3 className={classes.Title}>Moderado</h3>
        <h3 className={classes.Valor}>50-100</h3>
      </div>

      <div className={classes.Leyenda3}>
        <h3 className={classes.Title}>Insalubre para grupos sensibles</h3>
        <h3 className={classes.Valor}>101-150</h3>
      </div>

      <div className={classes.Leyenda4}>
        <h3 className={classes.Title}>Insalubre</h3>
        <h3 className={classes.Valor}>151-200</h3>
      </div>

      <div className={classes.Leyenda5}>
        <h3 className={classes.Title}>Muy Insalubre</h3>
        <h3 className={classes.Valor}>200-300</h3>
      </div>

      <div className={classes.Leyenda6}>
        <h3 className={classes.Title}>Peligroso</h3>
        <h3 className={classes.Valor}>350+</h3>
      </div>
      </div>
    </div>    
  );
}

export default Leyenda;