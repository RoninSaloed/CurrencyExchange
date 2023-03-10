import './input.css';

const currencies = ["UAH", "USD", "EUR", "GBP"]


export const Block = ({ value, onChangeValue, onChangeCurrency }) => (
    <div className="block">
        <select className="blockSelect" onChange={(e) => onChangeCurrency(e.target.value)}>
            {currencies.map((cur) => (
                <option
                    value={cur}
                    className="currency"
                    key={cur}>
                    {cur}
                </option>
            ))}
        </select>
        <input
            className="blockInput"
            onChange={(e) => onChangeValue(e.target.value)}
            value={value}
            type="number"
            placeholder="0">
        </input>
    </div>

)