import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import CreatureList from './views/CreatureList/CreatureList';
import { fetchCreatures } from './services/creatures';

function App() {
  const [loading, setLoading] = useState(true);
  const [creatures, setCreatures] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCreatures();
      setCreatures(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <p className="loader">Loading...</p>;

  return (
    <div className="App">
      <Header />
      <CreatureList creatures={creatures} />
    </div>
  );
}

export default App;
