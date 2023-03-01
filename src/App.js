import React, { useState, useEffect } from "react";
import Loader from "./componentes/Loader/Loader.jsx";
import Base from "./componentes/Base/Base.jsx";
import Footer from "./componentes/Footer/Footer.jsx";
import Leyenda from "./componentes/Leyenda/Leyenda.jsx";

// import iconocaritas from "./media/carabueno.svg";
// import iconotemperatura from "./media/humedad.svg";
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
		iconotemperatura: "",
	});

	useEffect(() => {
		getCityData();
	}, []);

	const getTimeStamp = () => {
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
	};

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
						iconotemperatura: data.current.weather.ic,
					});
				});
		} catch (error) {
			console.log(error);
		}
	};

	let iconocaritas;
	let referencia;

	if (baseState.aqi >= 1 && baseState.aqi <= 50) {
		iconocaritas = "carabueno.svg";
		referencia = "Bueno";
	} else if (baseState.aqi >= 51 && baseState.aqi <= 100) {
		iconocaritas = "caramoderado.svg";
		referencia = "Moderado";
	} else if (baseState.aqi >= 101 && baseState.aqi <= 150) {
		iconocaritas = "carainsalubreparagrupossensibles.svg";
		referencia = "Insalubre para grupos sensibles";
	} else if (baseState.aqi >= 151 && baseState.aqi <= 200) {
		iconocaritas = "carainsalubre.svg";
		referencia = "Insalubre";
	} else if (baseState.aqi >= 201 && baseState.aqi <= 300) {
		iconocaritas = "caramuyinsalubre.svg";
		referencia = "Muy Insalubre";
	} else {
		iconocaritas = "carapeligroso.svg";
		referencia = "Peligroso";
	}

	return (
		<div className="App">
			{loading ? (
				<Loader />
			) : (
				<>
					<Leyenda />
					<Base
						titulociudad={baseState.city}
						timestamp={baseState.timestamp}
						iconocaritas={iconocaritas}
						aqi={baseState.aqi}
						referencia={referencia}
						iconotemperatura={
							process.env.PUBLIC_URL + `${baseState.iconotemperatura}.png`
						}
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
