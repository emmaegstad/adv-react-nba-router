import React from 'react';
import { Link } from 'react-router-dom';
import './CreatureCard.css';

export default function CreatureCard({ creature }) {
  const { id, name, image } = creature;

  return (
    <div className="CreatureCard">
      <h3 className="card-title">{name}</h3>
      <Link to={`/creature/${id}`}>
        <img className="card-image" src={image} alt={name} />
        <p>Find Out More</p>
      </Link>
    </div>
  );
}
