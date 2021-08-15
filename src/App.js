import Map from './components/Map';
import SearchDomain from './components/SearchDomain';
import './App.css';
import { useState } from 'react';

function App() {

  const [locationMap, setLocationMap] = useState({});

  function addLocationMap(lat,lng){
    setLocationMap({lat,lng});
  }

  return (
    <>
      <SearchDomain addLocationMap={addLocationMap}/>
      <Map locationMap={locationMap}/>
    </>
  );
}

export default App;
