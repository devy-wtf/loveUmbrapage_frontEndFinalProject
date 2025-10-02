import React from 'react';

function MerchCard({ title, description }) {
  return (
    <div className="merch-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default MerchCard;
