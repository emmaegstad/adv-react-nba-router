import './CreatureDetail.css';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchCreatureById } from '../../services/creatures';

export default function CreatureDetail() {
  const params = useParams();
  const id = params.id;
  const [creature, setCreature] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCreatureById(id);
      setCreature(data.data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading && <p className="loader">Loading...</p>);

  return (
    <div className="CreatureDetail">
      <h3 className="detail-title">{creature.name}</h3>
      <img className="detail-image" src={creature.image} alt={name} />

      {creature.cooking_effect && (
        <div className="detail-effect">
          <span className="bold">Effects:</span>
          <p className="detail-effect_cooking">{creature.cooking_effect}</p>
          <p className="detail-hearts">Restores {creature.hearts_recovered} heart(s)</p>
        </div>
      )}

      <div className="detail-description">
        <span className="bold">Description:</span>
        <p>{creature.description}</p>
      </div>

      {creature.common_locations && (
        <div className="detail-locations">
          <p className="bold">Common Locations:</p>
          {creature.common_locations.map((location) => {
            return <p key={location}>{location}</p>;
          })}
        </div>
      )}
      <Link to="/">Back to Home</Link>
    </div>
  );
}
