import './header.css';
import dollar from '../image/iconHeader/dollar.svg'
import euro from '../image/iconHeader/euro.svg'
import hryvnia from '../image/iconHeader/hryvnia.svg'
import sterling from '../image/iconHeader/sterling.svg'
import React from 'react';



export function Header() {
    const [rate, setRate] = React.useState({})


    React.useEffect(() => {
        fetch("https://api.apilayer.com/fixer/latest?apikey=K09GEnCLXXyWzokZ5HLYKWB5nREun6xo&base=USD&symbols=EUR,UAH,GBP,USD")
            .then(res => res.json())
            .then(json => {
                setRate(json.rates)
                console.log(json.rates)
            }).catch(err => {
                console.warn(err)
            })
    }, [])


    return (
        <div className="header">
            <div className="headerBody">
                <div className='headerCur'>
                    <img className='image' src={dollar}></img>
                    <div >{"$ " + rate["USD"]}</div>
                </div>
                <div className='headerCur'>
                    <img className='image' src={euro}></img>
                    <div>{"$ " + rate["EUR"]}</div>
                </div>                <div className='headerCur'>
                    <img className='image' src={hryvnia}></img>
                    <div>{"$ " + rate["UAH"]}</div>
                </div>                <div className='headerCur'>
                    <img className='image' src={sterling}></img>
                    <div>{"$ " + rate["GBP"]}</div>
                </div>
            </div>
        </div>
    )
}



