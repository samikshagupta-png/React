import React, { useId } from "react";

function Inputbox({
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
  const amountInputId = useId();

  return (
    <div className={`inputbox ${className}`}>
      <label htmlFor={amountInputId}>{label}</label>
      <input
        id={amountInputId}
        type="number"
        placeholder="Amount"
        disabled={amountDisable}
        value={amount}
        onChange={(e) =>
          onAmountChange && onAmountChange(Number(e.target.value))
        }
      />
      <select
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
  );
}

export default Inputbox;
