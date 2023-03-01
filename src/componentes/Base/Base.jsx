import React from 'react';
import classes from './Base.module.css';

const Base = (baseState) => {

let GrupoPrincipal;

if (baseState.aqi >= 1 && baseState.aqi <= 50) {
  GrupoPrincipal = classes.GrupoPrincipal1
} else if (baseState.aqi >= 51 && baseState.aqi <= 100) {
  GrupoPrincipal = classes.GrupoPrincipal2
} else if (baseState.aqi >= 101 && baseState.aqi <= 150) {
  GrupoPrincipal = classes.GrupoPrincipal3
} else if (baseState.aqi >= 151 && baseState.aqi <= 200) {
  GrupoPrincipal = classes.GrupoPrincipal4
} else if (baseState.aqi >= 201 && baseState.aqi <= 300) {
  GrupoPrincipal = classes.GrupoPrincipal5
} else {
  GrupoPrincipal = classes.GrupoPrincipal6
}

  return (

    <div className={classes.ContainerPage}>

    <div className={classes.Clouds}>
      <div className={classes.Cloud}></div>
      <div className={classes.Cloud}></div>
      <div className={classes.Cloud}></div>
      <div className={classes.Cloud}></div>
      <div className={classes.Cloud}></div>
      <div className={classes.Cloud}></div>
      <div className={classes.Cloud}></div>
      <div className={classes.Cloud}></div>
      <div className={classes.Cloud}></div>
      <div className={classes.Cloud}></div>
    </div>
    <div className={classes.Balloon}>
      <div className={classes.Envelope}></div>
      <div className={classes.Basket}></div>
    </div>



      <div className={classes.ContainerBase}>
        <div className={classes.Header}>
          <div className={classes.TituloCiudad}>
            <h2 className={classes.TextoTituloCiudad}>{baseState.titulociudad}</h2>
          </div>
        <div className={classes.TimeStamp}>
             <h3 className={classes.TextoTimeStamp}>{baseState.timestamp}</h3>
        </div>
        </div>
        <div className={GrupoPrincipal}>
          <div className={classes.IconoCaritasContainer}>
          <img className={classes.IconoCaritas} src={baseState.iconocaritas} alt={baseState.altcaritas}></img>
          </div>
          <div className={classes.Aqi}> <h3 className={classes.TextoAqi}>{baseState.aqi}</h3><h5 className={classes.TextoUsAqi}>US AQI</h5></div>
         <div className={classes.Referencia}> <h3 className={classes.TextoReferencia}>{baseState.referencia}</h3></div>
        </div>
        <div className={classes.GrupoSecundario}>
          <div className={classes.Temperatura}>
            <img className={classes.IconoTemperatura} src={baseState.iconotemperatura} alt={baseState.alttemperatura}></img>
            <div className={classes.ValorTemperatura}><h5 className={classes.TextoGrupoSecundario}>{baseState.valortemperatura}</h5></div>
            </div>
          <div className={classes.Humedad}>
            <img className={classes.IconoHumedad} src={baseState.iconohumedad} alt={baseState.althumedad}></img>
            <div className={classes.ValorHumedad}><h5 className={classes.TextoGrupoSecundario}>{baseState.valorhumedad}</h5></div>
          </div>
         <div className={classes.Viento}>
           <img className={classes.IconoViento} src={baseState.iconoviento} alt={baseState.altviento}></img>
            <div className={classes.ValorViento}><h5 className={classes.TextoGrupoSecundario}>{baseState.valorviento}</h5></div>
         </div>
        </div>

      </div>
    </div>
  );
}

export default Base;