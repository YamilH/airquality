import React, {useState, useEffect} from 'react';
import Loader from './componentes/Loader/Loader.jsx'

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 6000);
  
  }, []);

  function fetchCityData(city, state, country){
    fetch(`http://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=4e099eb4-585d-4aef-8d67-417d1b9de753`)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  }

  return (
    <div className="App">
              {
        loading ? (

        <Loader />
      ) : (
        <h1>Hola ya cargó</h1>
      )}
    </div>
  );
}

export default App;
