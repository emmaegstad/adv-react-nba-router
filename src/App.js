import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Header from './components/Header/Header';
import CreatureList from './views/CreatureList/CreatureList';
import CreatureDetail from './views/CreatureDetail/CreatureDetail';
import useSetCreatures from './hooks/useSetCreatures';

function App() {
  const [loading, creatures, type, setType] = useSetCreatures();

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
