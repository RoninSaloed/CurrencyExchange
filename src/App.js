import { Block } from './components/input';
import './App.css';
import React, { useEffect, useRef } from 'react';
import { Header } from './components/header';
import coins from './image/iconExchange/coins.svg'
import transfer from './image/iconExchange/transfer.svg'


function App() {
  const [fromCurrency, setFromCurrency] = React.useState("UAH")
  const [toCurrency, setToCurrency] = React.useState("UAH")
  const [fromValue, setFromValue] = React.useState(1)
  const [toValue, setToValue] = React.useState(1)


  // const [rate, setRate] = React.useState({})
  const ratesRef = useRef({})
  React.useEffect(() => {
    fetch("https://api.apilayer.com/fixer/latest?apikey=K09GEnCLXXyWzokZ5HLYKWB5nREun6xo&base=USD&symbols=EUR,UAH,GBP,USD")
      .then(res => res.json())
      .then(json => {
        ratesRef.current = json.rates
        changeToPrice(1)
      }).catch(err => {
        console.warn(err)
      })
  }, [])


  const changeFromPrice = (value) => {
    const price = value / ratesRef.current[fromCurrency]
    const result = price * ratesRef.current[toCurrency]
    setFromValue(value)
    setToValue(result.toFixed(2))
  }
  const changeToPrice = (value) => {

    const result = (ratesRef.current[fromCurrency] / ratesRef.current[toCurrency]) * value
    setFromValue(result.toFixed(2))
    setToValue(value)
  }


  React.useEffect(() => {
    changeFromPrice(fromValue)
  }, [fromCurrency])


  React.useEffect(() => {
    changeToPrice(toValue)
  }, [toCurrency])



  return (
    <div className="App">
      <Header name={ratesRef.current[1]}></Header>
      <div className='main'>
        <div className='headerText'>
          <img className='coins' src={coins}></img>
          <div className='text'>
            <div className='title'>Currency</div>
            <div className='subTitle'>EXCHANGE</div>
          </div>
        </div>
        <div className='blockBody'>
          <Block value={fromValue}
            currency={fromCurrency}
            onChangeCurrency={setFromCurrency}
            onChangeValue={changeFromPrice}>
          </Block>
          <div className='eclipseBlock'>
            <div className='eclipseBody'>
              <img className='eclipse' src={transfer}></img>
            </div>
          </div>
          <Block
            value={toValue}
            currency={toCurrency}
            onChangeCurrency={setToCurrency}
            onChangeValue={changeToPrice}>
          </Block>
        </div>
      </div>
    </div>
  );
}
export default App;
