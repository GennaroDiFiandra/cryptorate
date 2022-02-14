import { useEffect, useRef } from 'react';
import './CryptoFilter.css';

function CryptoFilter({ onCryptoFilterChange }) {
  const inputFilter = useRef();

  useEffect(() => {
    inputFilter.current.focus();
  }, []);

  return (
    <div className="CryptoFilter">
      <input className="CryptoFilter__input" type="search" placeholder="filter by crypto name" onChange={onCryptoFilterChange} ref={inputFilter} />
    </div>
  );
}

export default CryptoFilter;
