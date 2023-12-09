// Card.js
import React from 'react';

const Card = ({ card }) => {
  return (
    <div className={`card priority-${card.priority}`}>
      <h3>{card.title}</h3>
      <p>{card.description}</p>
      <div className="meta">
        <span>Status: {card.status}</span>
        <span>User: {card.user}</span>
        <span>Priority: {card.priority}</span>
      </div>
    </div>
  );
};

export default Card;
