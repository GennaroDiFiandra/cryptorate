import './CryptoFilter.css';

function CryptoFilter({ onCryptoFilterChange }) {
  return (
    <div className="CryptoFilter">
      <input className="CryptoFilterInput" type="search" placeholder="filter by crypto name" onChange={onCryptoFilterChange} />
    </div>
  );
}

export default CryptoFilter;
