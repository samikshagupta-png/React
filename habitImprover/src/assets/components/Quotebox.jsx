import { useEffect, useState } from 'react';
import './Quotebox.css';
function QuoteBox() {
  const [quote, setQuote] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://api.api-ninjas.com/v2/quotes?category=inspirational', {
      headers: { 'X-Api-Key': 'NZhPAxnpD3cEU3PqK0lmkzpy7NJbVB5wxpky5Pjm' } 
    })
      .then(res => {
        if (!res.ok) throw new Error(`Error ${res.status}`);
        return res.json();
      })
      .then(data => {
        if (data && data.length > 0) {
          setQuote(`${data[0].quote} — ${data[0].author}`);
        } else {
          setQuote("No quotes found");
        }
      })
      .catch(err => setError(err.message));
  }, []);

  return (
    <div className='quote-content'>
      <p className='quote-text'>{error ? `Failed to load quote: ${error}` : (quote || "Loading motivational quote...")}</p>
    </div>
  );
}

export default QuoteBox;
