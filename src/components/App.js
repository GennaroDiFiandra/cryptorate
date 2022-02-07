import { useEffect, useState } from 'react';
import './App.css';
import AppHeader from './AppHeader';
import AppBody from './AppBody';
import CryptoFilter from './CryptoFilter';
import CryptoList from './CryptoList';
import AppFooter from './AppFooter';
import Message from './Message';

function App() {
  const [cryptoList, setCryptoList] = useState([])
  const [cryptoFilteredList, setCryptoFilteredList] = useState(cryptoList)
  const [hasFetchDataError, setHasFetchDataError] = useState(false)

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
        setHasFetchDataError(true)
      }
    }

    fetchData()

  }, [])

  return (
    <div className="App">
      <AppHeader />
      <AppBody>
        {(!hasFetchDataError) ?
          <>
            <CryptoFilter onCryptoFilterChange={onCryptoFilterChange} />
            <CryptoList cryptoList={cryptoFilteredList} />
          </> :
          <div className='MessageWrapper'>
            <Message content='Sorry, there was a problem. Please, try to reload the page.' />
          </div>
        }
      </AppBody>
      <AppFooter />
    </div>
  );
}

export default App;
