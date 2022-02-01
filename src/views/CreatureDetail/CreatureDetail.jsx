import './CreatureDetail.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCreatureById } from '../../services/creatures';

export default function CreatureDetail() {
  const params = useParams();
  const id = params.id;
  const [loading, setLoading] = useState(true);
  const [creature, setCreature] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCreatureById(id);
      console.log(data.data);
      setCreature(data.data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading && <p className="loader">Loading...</p>);

  return <div className="CreatureDetail">{creature.name}</div>;
}
