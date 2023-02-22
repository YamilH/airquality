import React from 'react';
import classes from './Base.module.css';

const Base = () => {
  return (
    <div className={classes.ContainerPage}>
      <div className={classes.ContainerBase}>
        <div className={classes.Header}>
          <div className={classes.TituloCiudad}>
            <h2>Nombre de Ciudad</h2>
          </div>
        <div className={classes.TimeStamp}>
             <h4>TimeStamp</h4>
        </div>
        </div>
        <div className={classes.GrupoPrincipal}>
          <div className={classes.Caritas}> <h4>CARITA</h4></div>
          <div className={classes.Aqi}> <h4>57</h4></div>
         <div className={classes.Referencia}> <h4>Moderada</h4></div>
        </div>
        <div className={classes.GrupoSecundario}>
          <div className={classes.Temperatura}></div>
            <div className={classes.IconoTemperatura}>png</div>
            <div className={classes.ValorTemperatura}>27°</div>
          <div className={classes.Humedad}>
            <div className={classes.IconoHumedad}>png</div>
            <div className={classes.ValorHumedad}>55%</div>
          </div>
         <div className={classes.Viento}>
           <div className={classes.IconoViento}>png</div>
            <div className={classes.ValorViento}>3.2km/h</div>
         </div>
        </div>

      </div>
    </div>
  );
}

export default Base;