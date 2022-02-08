import { useState, useEffect } from 'react';
import {
  fetchAllCreatures,
  fetchFoodCreatures,
  fetchNonFoodCreatures,
} from '../services/creatures';

export default function useSetCreatures() {
  const [loading, setLoading] = useState(true);
  const [creatures, setCreatures] = useState([]);
  const [type, setType] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      if (type === 'all') {
        const data = await fetchAllCreatures();
        setCreatures(data);
      } else if (type === 'food') {
        const data = await fetchFoodCreatures();
        setCreatures(data);
      } else {
        const data = await fetchNonFoodCreatures();
        setCreatures(data);
      }
      setLoading(false);
    };
    fetchData();
  }, [type]);

  return [loading, creatures, type, setType];
}
