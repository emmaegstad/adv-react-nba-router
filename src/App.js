import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Header from './components/Header/Header';
import CreatureList from './views/CreatureList/CreatureList';
import CreatureDetail from './views/CreatureDetail/CreatureDetail';
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
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <CreatureList creatures={creatures} />
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
