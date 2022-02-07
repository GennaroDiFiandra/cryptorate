import './CryptoList.css';
import Crypto from './Crypto';

function CryptoList({ cryptoList }) {
  return (
    <div className='CryptoListWrapper'>
      <table className='CryptoList'>
        <thead>
          <tr>
            <th className='CryptoHead'>Name</th>
            <th className='CryptoHead'>Value</th>
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
