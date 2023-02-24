import React, { useState, useEffect } from "react";
import Loader from "./componentes/Loader/Loader.jsx";
import Base from "./componentes/Base/Base.jsx";

import iconocaritas from "./media/ic-face-green.svg";
import iconotemperatura from "./media/humedad.svg";
import iconohumedad from "./media/humedad.svg";
import iconoviento from "./media/viento.svg";

import axios from "axios";

function App() {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 6000);
	}, []);

	const [baseState, setBaseState] = useState({
		city: "",
		timestamp: "",
		aqi: "",
		temperature: "",
		humidity: "",
		wind: "",
	});

  useEffect(()=>{
    getCityData();
  }, []);

	// function fetchCityData(city, state, country){
	//   fetch(`http://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=4e099eb4-585d-4aef-8d67-417d1b9de753`)
	// .then((response) => response.json())
	// .then(result => console.log(result))
	// .catch(error => console.log('error', error));
	// }

	const getCityData = () => {
		try {
			const apiUrl = axios.get(`${process.env.REACT_APP_API_URL}/v2/nearest_city?key=${process.env.REACT_APP_API_KEY}`);
			apiUrl
				.then(response => response.json())
				.then(data => {
					setBaseState({
						city: data.city,
						timestamp: data.current.pollution.ts,
						aqi: data.current.pollution.aqius,
						temperature: data.current.weather.tp,
						humidity: data.current.weather.hu,
						wind: data.current.weather.ws,
					});
				});
        // .catch(error => console.log(error));
    } catch(error) {
			  console.log(error);
		}
	};

  return (
    <div className="App">
              {
        loading ? (

        <Loader />
      ) : (

        <Base 
          titulociudad={baseState.city}
          timestamp={'1967 10-00-00'}
          iconocaritas={iconocaritas}
          aqi={'24'}
          referencia={'Buena'} 
          iconotemperatura={iconotemperatura} 
          valortemperatura={'23°C'} 
          iconohumedad={iconohumedad} 
          valorhumedad={'23%'} 
          iconoviento={iconoviento} 
          valorviento={'10km/h'} 
        
        />
      )}
    </div>
  )
};

export default App;
