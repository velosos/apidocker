import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios.get('api').then(res => setPeople(res.data));
  }, [])

  return (
    people.map((person, index) => {
      return <p key={index}>
        {person.id}
        {person.name}
        {person.age}
      </p>
    })
  );
}

export default App;
