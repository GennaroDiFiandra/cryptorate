import './CryptoFilter.css';

function CryptoFilter({ onCryptoFilterChange }) {
  return (
    <div className="CryptoFilter">
      <input className="CryptoFilter__input" type="search" placeholder="filter by crypto name" onChange={onCryptoFilterChange} />
    </div>
  );
}

export default CryptoFilter;
