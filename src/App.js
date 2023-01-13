import { useEffect, useState } from 'react';
import './App.css';
import { API } from './globel';

function App() {

  const [data,setData] = useState([]);

  useEffect(() => {
    fetch(`${API}`)
      .then((res) => res.json())
      .then((text) => setData(text));
  }, []);

  return (
    <div className="App">
        Deployment practice MERN
        <div>{data}</div>
    </div>
  );
}

export default App;
