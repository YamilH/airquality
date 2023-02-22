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
