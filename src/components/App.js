import { useEffect, useState } from "react";
import "./App.css";
import Message from "./Message";
import AppHeader from "./AppHeader";
import AppBody from "./AppBody";
import CryptoFilter from "./CryptoFilter";
import CryptoList from "./CryptoList";
import AppFooter from "./AppFooter";

function App() {
  const [cryptoList, setCryptoList] = useState([]);
  const [cryptoFilteredList, setCryptoFilteredList] = useState([]);
  const [hasFetchDataError, setHasFetchDataError] = useState(false);

  useEffect(() => {
    const endpoint = "https://api.coingecko.com/api/v3/exchange_rates";

    (async () => {
      try {
        const response = await fetch(endpoint);
        const data = await response.json();
        setCryptoList(Object.values(data.rates));
        setCryptoFilteredList(Object.values(data.rates));
      } catch (error) {
        setHasFetchDataError(true);
      }
    })();
  }, []);

  const onCryptoFilterChange = event => {
    setCryptoFilteredList(
      cryptoList.filter(crypto =>
        crypto.name
          .toLowerCase()
          .includes(event.target.value.toLowerCase().trim()),
      ),
    );
  };

  return (
    <div className='App'>
      <AppHeader />
      <AppBody>
        {!hasFetchDataError ? (
          <>
            <CryptoFilter onCryptoFilterChange={onCryptoFilterChange} />
            <CryptoList cryptoList={cryptoFilteredList} />
          </>
        ) : (
          <Message content='Sorry, there was a problem. Please, try to reload the page.' />
        )}
      </AppBody>
      <AppFooter />
    </div>
  );
}

export default App;
