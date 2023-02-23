import React, {useState, useEffect} from 'react';
import Loader from './componentes/Loader/Loader.jsx'
import Base from './componentes/Base/Base.jsx'

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 6000);
  
  }, []);

  // function fetchCityData(city, state, country){
  //   fetch(`http://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=4e099eb4-585d-4aef-8d67-417d1b9de753`)
  // .then((response) => response.json())
  // .then(result => console.log(result))
  // .catch(error => console.log('error', error));
  // }

  const getCityData = async (city, state, country) => {
    try {
      const apiUrl = await fetch(
        `http://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=4e099eb4-585d-4aef-8d67-417d1b9de753`
      );
      const apiCityData = await apiUrl.data?.map((e) => {
        return {
          city: e.city,
          timestamp: e.current.pollution.ts,
          aqi: e.current.pollution.aqius,
          temperature: e.weather.tp,
          icon: e.weather.ic,
          humidity: e.weather.hu,
          wind: e.weather.ws,
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

        <Base />
      )}
    </div>
  );
}

export default App;
