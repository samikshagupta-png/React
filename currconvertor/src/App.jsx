import { useState } from "react";
import Inputbox from "./component/Inputbox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import "./index.css";

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo || {});

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
  };

  const convert = () => {
    if (currencyInfo && currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
  };

  return (
    <div className="app container">
      <h1>Currency Converter</h1>

      <Inputbox
        label="From"
        amount={amount}
        onAmountChange={setAmount}
        onCurrencyChange={setFrom}
        currencyOptions={options}
        selectCurrency={from}
      />

      <Inputbox
        label="To"
        amount={convertedAmount}
        onAmountChange={setConvertedAmount}
        onCurrencyChange={setTo}
        currencyOptions={options}
        selectCurrency={to}
        amountDisable
      />

      <div className="actions">
        <button onClick={swap}>Swap</button>
        <button onClick={convert}>Convert</button>
        
      </div>

      <div className="msg">
        {amount} {from.toUpperCase()} = {convertedAmount} {to.toUpperCase()}
      </div>
    </div>
  );
}

export default App;
