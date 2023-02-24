import React, { useState, useEffect } from "react";
import Loader from "./componentes/Loader/Loader.jsx";
import Base from "./componentes/Base/Base.jsx";
import Footer from "./componentes/Footer/Footer.jsx";

import iconocaritas from "./media/carabueno.svg";
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

	useEffect(() => {
		getCityData();
	}, []);

	function getTimeStamp() {
		var now = new Date();
		return (
			now.getMonth() +
			1 +
			"/" +
			now.getDate() +
			"/" +
			now.getFullYear() +
			" " +
			now.getHours() +
			":" +
			(now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes()) +
			":" +
			(now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds())
		);
	}

	const getCityData = () => {
		try {
			fetch(
				`${process.env.REACT_APP_API_URL}/v2/nearest_city?key=${process.env.REACT_APP_API_KEY}`
			)
				.then((response) => response.json())
				.then(function ({ data }) {
					setBaseState({
						city: data.city,
						timestamp: getTimeStamp(),
						aqi: data.current.pollution.aqius,
						temperature: data.current.weather.tp + " °C",
						humidity: data.current.weather.hu + " %",
						wind: data.current.weather.ws + " km/h",
					});
				});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="App">
			{loading ? (
				<Loader />
			) : (
				<>


					<Base
						titulociudad={baseState.city}
						timestamp={baseState.timestamp}
						iconocaritas={iconocaritas}
						aqi={baseState.aqi}
						referencia={"Buena"}
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
	);
}

export default App;
