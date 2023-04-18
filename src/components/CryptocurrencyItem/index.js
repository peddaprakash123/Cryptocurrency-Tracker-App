import Loader from 'react-loader-spinner'
import {Component} from 'react'
import './index.css'

class CryptocurrencyItem extends Component {
  state = {listItems: [], isLoding: true}

  componentDidMount() {
    this.getListItems()
  }

  getListItems = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const modifiedDataList = data.map(eachItem => ({
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
      name: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
    }))

    this.setState({listItems: modifiedDataList, isLoding: false})
  }

  getListItems1 = () => {
    const {listItems} = this.state
    return (
      <ul className="list-card">
        {listItems.map(items => (
          <li className="list" key={items.id}>
            <div className="list-item">
              <img
                src={items.currencyLogo}
                alt={items.name}
                className="image3"
              />
              <p className="currencyName">{items.name}</p>
            </div>
            <div className="list-item">
              <p className="currency">{items.usdValue}</p>
              <p className="currency">{items.euroValue}</p>
            </div>
          </li>
        ))}
      </ul>
    )
  }

  render() {
    const {isLoding} = this.state

    return (
      <div className="nav-Container">
        <nav className="navbar">
          <p className="paragraph1">Coin Type</p>
          <div className="card">
            <p className="paragraph2">USD</p>
            <p className="paragraph3">EURO</p>
          </div>
        </nav>
        {isLoding ? (
          <div testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.getListItems1()
        )}
      </div>
    )
  }
}
export default CryptocurrencyItem