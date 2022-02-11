import './CryptoList.css';
import Crypto from './Crypto';

function CryptoList({ cryptoList }) {
  return (
    <div className='CryptoList__wrapper'>
      <table className='CryptoList'>
        <thead>
          <tr>
            <th className='CryptoList__head'>Name</th>
            <th className='CryptoList__head'>Value</th>
          </tr>
        </thead>
        <tbody>
          {
            cryptoList
              .filter(crypto => crypto.type === 'crypto' && crypto.name !== 'Bitcoin')
              .map(crypto => <Crypto key={crypto.unit} name={crypto.name} value={crypto.value} />)
          }
        </tbody>
      </table>
    </div>
  );
}

export default CryptoList;
