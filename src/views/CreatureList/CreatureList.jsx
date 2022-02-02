import React from 'react';
import './CreatureList.css';
import CreatureCard from '../../components/CreatureCard/CreatureCard';

export default function CreatureList({ creatures }) {
  const creatureList = creatures.data.non_food;

  return (
    <div className="CreatureList">
      {creatureList.map((creature) => {
        return <CreatureCard key={creature.id} creature={creature} />;
      })}
    </div>
  );
}
