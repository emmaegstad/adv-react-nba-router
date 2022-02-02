import React from 'react';
import './CreatureList.css';
import CreatureCard from '../../components/CreatureCard/CreatureCard';
import Filter from '../../components/Filter/Filter';

export default function CreatureList({ creatures, type, setType }) {
  const creatureList = creatures;

  return (
    <div className="CreatureList">
      <Filter type={type} setType={setType} />
      <div className="creature-list_cards">
        {creatureList.map((creature) => {
          return <CreatureCard key={creature.id} creature={creature} />;
        })}
      </div>
    </div>
  );
}
