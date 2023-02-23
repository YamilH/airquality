import React from 'react';
import classes from './Base.module.css';

const Base = (props) => {
  return (
    <div className={classes.ContainerPage}>
      <div className={classes.ContainerBase}>
        <div className={classes.Header}>
          <div className={classes.TituloCiudad}>
            <h2>{props.titulociudad}</h2>
          </div>
        <div className={classes.TimeStamp}>
             <h3>{props.timestamp}</h3>
        </div>
        </div>
        <div className={classes.GrupoPrincipal}>
          <div className={classes.IconoCaritasContainer}>
          <img className={classes.IconoCaritas} src={props.iconocaritas} alt={props.altcaritas}></img>
          </div>
          <div className={classes.Aqi}> <h3 className={classes.ValorAqi}>{props.aqi}</h3><h5>US AQI</h5></div>
         <div className={classes.Referencia}> <h3>{props.referencia}</h3></div>
        </div>
        <div className={classes.GrupoSecundario}>
          <div className={classes.Temperatura}>
            <img className={classes.IconoTemperatura} src={props.iconotemperatura} alt={props.alttemperatura}></img>
            <div className={classes.ValorTemperatura}>{props.valortemperatura}</div>
            </div>
          <div className={classes.Humedad}>
            <img className={classes.IconoHumedad} src={props.iconohumedad} alt={props.althumedad}></img>
            <div className={classes.ValorHumedad}>{props.valorhumedad}</div>
          </div>
         <div className={classes.Viento}>
           <img className={classes.IconoViento} src={props.iconoviento} alt={props.altviento}></img>
            <div className={classes.ValorViento}>{props.valorviento}</div>
         </div>
        </div>

      </div>
    </div>
  );
}

export default Base;