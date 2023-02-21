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
