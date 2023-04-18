import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrenciesList = () => (
  <div className="container">
    <h1 className="heading">Cryptocurrency Tracker</h1>
    <img
      src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
      alt="cryptocurrency"
      className="image"
    />
    <CryptocurrencyItem />
  </div>
)
export default CryptocurrenciesList