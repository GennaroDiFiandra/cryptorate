import './Crypto.css';

function Crypto({ name, value }) {
  return (
    <tr className='Crypto' key={crypto.unit}>
      <td className='Crypto__name'>{name}</td>
      <td className='Crypto__value'>{value}</td>
    </tr>
  );
}

export default Crypto;
