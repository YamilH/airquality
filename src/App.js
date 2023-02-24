import React, {useState, useEffect} from 'react';
import Loader from './componentes/Loader/Loader.jsx'
import Base from './componentes/Base/Base.jsx'
import Search from './componentes/Search/Search.jsx'
import Footer from './componentes/Footer/Footer.jsx'

import iconocaritas from "./media/ic-face-green.svg";
import iconotemperatura from "./media/humedad.svg";
import iconohumedad from "./media/humedad.svg";
import iconoviento from "./media/viento.svg";

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
			fetch(`${process.env.REACT_APP_API_URL}/v2/nearest_city?key=${process.env.REACT_APP_API_KEY}`)
				.then((response) => response.json())
				.then(function ({ data }){
					// console.log("data", data);

					// const timestamp = parseISO(data.current.pollution.ts);
					// const formattedTimestamp = format(timestamp, "PPpp");

					setBaseState({
						city: data.city,
						timestamp: data.current.pollution.ts,
						aqi: data.current.pollution.aqius,
						temperature: data.current.weather.tp,
						humidity: data.current.weather.hu,
						wind: data.current.weather.ws,
					});
				});
        // .catch(function (error) {
				// 	console.log(error)
				// });
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
        <>
        <Search />

        <Base 
          titulociudad={baseState.city}
          timestamp={baseState.timestamp}
          iconocaritas={iconocaritas}
          aqi={baseState.aqi}
          referencia={'Buena'} 
          iconotemperatura={iconotemperatura} 
          valortemperatura={baseState.temperature} 
          iconohumedad={iconohumedad} 
          valorhumedad={baseState.humidity} 
          iconoviento={iconoviento} 
          valorviento={baseState.wind} 
        
        />

        <Footer />
       </>
      )}
    </div>
  )
};

export default App;
