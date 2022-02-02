import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Header from './components/Header/Header';
import CreatureList from './views/CreatureList/CreatureList';
import CreatureDetail from './views/CreatureDetail/CreatureDetail';
import { fetchAllCreatures, fetchFoodCreatures, fetchNonFoodCreatures } from './services/creatures';

function App() {
  const [loading, setLoading] = useState(true);
  const [creatures, setCreatures] = useState([]);
  const [type, setType] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      if (type === 'all') {
        const data = await fetchAllCreatures();
        setCreatures(data);
        setLoading(false);
      } else if (type === 'food') {
        const data = await fetchFoodCreatures();
        setCreatures(data);
        setLoading(false);
      } else {
        const data = await fetchNonFoodCreatures();
        setCreatures(data);
        setLoading(false);
      }
    };
    fetchData();
  }, [type]);

  if (loading) return <p className="loader">Loading...</p>;

  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <CreatureList creatures={creatures} type={type} setType={setType} />
          </Route>
          <Route path="/creature/:id">
            <CreatureDetail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
