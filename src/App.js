import Map from './components/Map'
import { useState, useEffect } from 'react';

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);

      const res = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events');
      const {events} = await res.json();
      console.log(events);

      setEventData(events);
      setLoading(false);  
    }

    fetchEvents()

  }, [])

  return (
    <div>
      <h1>Welcome to the Weather Event Tracker</h1>
      { !loading ? <Map eventData={eventData} /> : <h3>Loading...</h3>}
    </div>
  );
}

export default App;
