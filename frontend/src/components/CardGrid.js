import React from 'react';

const CardGrid = ({ cards }) => {
    return (
        <div className="card-grid">
            {cards.map(card => (
                <div className="card" key={card.id}>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                </div>
            ))}
        </div>
    );
};

export default CardGrid;
