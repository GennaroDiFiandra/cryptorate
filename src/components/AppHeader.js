import "./AppHeader.css";

function AppHeader() {
  return (
    <header className='AppHeader'>
      <h1 className='AppHeader__title'>Crypto Rate</h1>
      <p className='AppHeader__subtitle'>
        cryptocurrencies value expressed in Bitcoin
      </p>
    </header>
  );
}

export default AppHeader;
