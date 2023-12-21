import './App.css';
import { useState, useEffect } from 'react';
import video from './clouds.mp4';


function App() {
  const [activity, setActivity] = useState('');

  const changeFont = () => {
    const h3Element = document.getElementsByTagName('h3')[0];
    h3Element.classList.add('change');
  }
  
  useEffect(() => {
    getActivity();
  },  [])

  const getActivity = async () => {
      const response = await fetch('http://www.boredapi.com/api/activity/');
      const data = await response.json();
      setActivity(data.activity);
      changeFont();
  }

  return (
    <div className="App">
      <div className='container'>
        <video autoPlay muted loop>
          <source src={video} type="video/mp4"/>
        </video>
        <h1>Are you bored?</h1>
        <h2>100+ Things to Do When You're Bored to Pass the Time</h2>
        <h3>{activity}</h3>
      </div>
      <button onClick={getActivity}>Press here to get an idea</button>
    </div>
  );
}

export default App;
