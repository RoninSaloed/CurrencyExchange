const currencies = ["UAH", "USD", "EUR", "GBP"]


export const Block = ({ value, currency, onChangeValue, onChangeCurrency }) => (
    <div className="block">
        <select onChange={(e) => onChangeCurrency(e.target.value)}>
            {currencies.map((cur) => (
                <option
                    value={cur}
                    className={currency === cur ? "active" : ""}
                    key={cur}>
                    {cur}
                </option>
            ))}
        </select>
        <input
            onChange={(e) => onChangeValue(e.target.value)}
            value={value}
            type="number"
            placeholder="0"
        >
        </input>
    </div>

)