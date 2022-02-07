import { useEffect, useState } from 'react';
import './App.css';
import AppHeader from './AppHeader';
import AppBody from './AppBody';
import CryptoFilter from './CryptoFilter';
import CryptoList from './CryptoList';
import AppFooter from './AppFooter';

function App() {
  const [cryptoList, setCryptoList] = useState([])
  const [cryptoFilteredList, setCryptoFilteredList] = useState(cryptoList)

  const onCryptoFilterChange = (event) => {
    setCryptoFilteredList(cryptoList.filter(crypto => crypto.name.toLowerCase().includes(event.target.value.toLowerCase())))
  }

  useEffect(() => {
    const endpoint = 'https://api.coingecko.com/api/v3/exchange_rates'

    const fetchData = async () => {
      try {
        const response = await fetch(endpoint)
        const data = await response.json()
        setCryptoList(Object.values(data.rates))
        setCryptoFilteredList(Object.values(data.rates))
      } catch (error) {
        console.log('error', error)
      }
    }

    fetchData()

  }, [])

  return (
    <div className="App">
      <AppHeader />
      <AppBody>
        <CryptoFilter onCryptoFilterChange={onCryptoFilterChange} />
        <CryptoList cryptoList={cryptoFilteredList} />
      </AppBody>
      <AppFooter />
    </div>
  );
}

export default App;
