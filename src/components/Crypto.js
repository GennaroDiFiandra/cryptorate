import './Crypto.css';

function Crypto({ name, value }) {
  return (
    <tr className='Crypto' key={crypto.unit}>
      <td className='CryptoName'>{name}</td>
      <td className='CryptoValue'>{value}</td>
    </tr>
  );
}

export default Crypto;
