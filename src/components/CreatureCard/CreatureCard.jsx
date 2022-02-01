import React from 'react';
import './CreatureCard';

export default function CreatureCard({ creature }) {
  const { id, name, cooking_effect, common_locations, description, hearts_recovered, image } =
    creature;

  return (
    <div className="CreatureCard">
      <h3 className="cardTitle">{name}</h3>
      <img className="cardImage" src={image} alt={name} />
      <p className="cardEffect">{cooking_effect}</p>
      <p className="cardHearts">Restores {hearts_recovered} heart(s)</p>
      <p className="cardDescription">{description}</p>
    </div>
  );
}
