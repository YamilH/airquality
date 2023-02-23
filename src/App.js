import React, {useState, useEffect} from 'react';
import axios from "axios";
import Loader from './componentes/Loader/Loader.jsx';
import Base from './componentes/Base/Base.jsx';

import iconocaritas from './media/ic-face-green.svg'
import iconotemperatura from './media/humedad.svg';
import iconohumedad from './media/humedad.svg';
import iconoviento from './media/viento.svg';

const {
  API_URL,
  API_KEY
} = process.env;


function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 6000);
  
  }, []);

  const [baseState, setBaseState] = useState({
    city: "",
    timestamp: "",
    aqi: "",
    temperature: "",
    humidity: "",
    wind: "",
  })

  // function fetchCityData(city, state, country){
  //   fetch(`http://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=4e099eb4-585d-4aef-8d67-417d1b9de753`)
  // .then((response) => response.json())
  // .then(result => console.log(result))
  // .catch(error => console.log('error', error));
  // }

  const getCityData = async (city, state, country) => {
    try {
      const apiUrl = await axios.get(
        `${API_URL}/v2/city?city=${city}&state=${state}&country=${country}&key=${API_KEY}`
      );
      const apiCityData = await apiUrl.data?.map((e) => {
        return {
          city: e.city,
          timestamp: e.current.pollution.ts,
          aqi: e.current.pollution.aqius,
          temperature: e.current.weather.tp,
          humidity: e.current.weather.hu,
          wind: e.current.weather.ws,
        };
      });
      return apiCityData;
    } catch (error) {
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
          titulociudad={'Mendoza'}
          timestamp={'1967 10-00-00'}
          iconocaritas={iconocaritas}
          aqi={'24°'}
          referencia={'Buena como Juli'} 
          iconotemperatura={iconotemperatura} 
          valortemperatura={'23°'} 
          iconohumedad={iconohumedad} 
          valorhumedad={'23%'} 
          iconoviento={iconoviento} 
          valorviento={'10km/h'} 
        
        />
      )}
    </div>
  );
}

export default App;
