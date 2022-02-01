import React from 'react';
import './CreatureCard.css';

export default function CreatureCard({ creature }) {
  const { name, cooking_effect, description, hearts_recovered, image } = creature;

  return (
    <div className="CreatureCard">
      <h3 className="card-title">{name}</h3>
      <img className="card-image" src={image} alt={name} />
      <p className="card-effect">Effect: {cooking_effect}</p>
      <p className="card-hearts">Restores {hearts_recovered} heart(s)</p>
      <p className="card-description">{description}</p>
    </div>
  );
}
