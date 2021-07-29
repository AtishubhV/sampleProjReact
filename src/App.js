import "./styles.css";
import axios from 'axios';
import { useEffect, useState } from 'react';
export default function App() {
  const [data, setData] = useState([]);
  let result = [];
  const fetchData = async (prd) => {
    if (prd)
      result = await axios(
        'https://d32g4oov80zbhg.cloudfront.net/' + prd,
      );
    else
      result = await axios(
        'https://d32g4oov80zbhg.cloudfront.net/',
      );
    console.log(result);
    setData(result.data);
  };
  useEffect(() => {


    fetchData();
  }, []); // Only re-run the effect if count changes
  return (
    <div className="App">
      <h1>My Products</h1>
      <table>

        {data.map((item) => (
          <tr>
            <td>
              {item.Name}
            </td>
            <td>
              {item.Age}
            </td>
            <td>
              {item.Game}
            </td>
          </tr>
        ))
        }
      </table>
      <input type='button' value="Get Products!" onClick={() => fetchData('products')} />
      <input type='button' value="Reset" onClick={() => fetchData()} />
    </div>
  );
}
