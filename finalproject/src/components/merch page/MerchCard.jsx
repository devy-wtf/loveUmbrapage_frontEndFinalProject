function MerchCard({ title, description }) {
  return (
    <div className="merch-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="buy-button">Buy</button>
    </div>
  );
}

export default MerchCard;