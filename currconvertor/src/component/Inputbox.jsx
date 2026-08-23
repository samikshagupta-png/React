import React from "react";
import "./index.css";

function CurrencyConverter({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "USD",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  return (
    <div className={`container ${className}`}>
      <h1>Currency Converter</h1>
      <form>
        <div className="amount">
          <p>{label || "Enter amount"}</p>
          <input
            type="number"
            placeholder="Amount"
            disabled={amountDisable}
            value={amount}
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
          />
        </div>

        <div className="dropdown">
          <div className="from">
            <p>From</p>
            <div className="select-container">
              <select
                name="from"
                value={selectCurrency}
                onChange={(e) =>
                  onCurrencyChange && onCurrencyChange(e.target.value)
                }
                disabled={currencyDisable}
              >
                {currencyOptions.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="to">
            <p>To</p>
            <div className="select-container">
              <select name="to">
                {currencyOptions.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="msg">1 USD = 80 INR</div>
        <button id="btn" type="button">
          Get Exchange Rate
        </button>
      </form>
    </div>
  );
}

export default CurrencyConverter;
