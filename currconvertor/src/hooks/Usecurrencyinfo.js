import { useEffect, useState } from "react";

function useCurrencyInfo(have, want, amount) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.api-ninjas.com/v1/convertcurrency?have=${have}&want=${want}&amount=${amount}`,
          {
            headers: {
              'X-Api-Key': 'YOUR_API_KEY_HERE'
            }
          }
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching currency data:", error);
      }
    };

    fetchData();
  }, [have, want, amount]);

  return data;
}

export default useCurrencyInfo;
