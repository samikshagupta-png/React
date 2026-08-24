import { useEffect, useState } from "react";

function useCurrencyInfo(baseCurrency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://2024-03-06.currency-api.pages.dev/v1/currencies/${baseCurrency}.json`
        );
        const result = await response.json();
        setData(result[baseCurrency]); // contains all conversion rates
      } catch (error) {
        console.error("Error fetching currency data:", error);
      }
    };

    fetchData();
  }, [baseCurrency]);

  return data;
}

export default useCurrencyInfo;
