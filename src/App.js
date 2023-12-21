import './App.css';
import { useState, useEffect, useRef } from 'react';
import video from './clouds.mp4';


function App() {
  const text = useRef();
  const [activity, setActivity] = useState('');

  useEffect(() => {
    getActivity();
  },  [])

  const getActivity = async () => {
    text.current.classList.remove('change');

    try {
      const response = await fetch('http://www.boredapi.com/api/activity/');
      if (!response.ok) {
        throw new Error('Failed to fetch activity');
      }

      const data = await response.json();
      setActivity(data.activity);
      text.current.classList.add('change');
    } catch (error) {
      console.error('Error fetching activity:', error.message);
    }
  };

  return (
    <div className="App">
      <div className='container'>
        <video autoPlay muted loop>
          <source src={video} type="video/mp4"/>
        </video>
        <h1>Are you bored?</h1>
        <h2>100+ Things to Do When You're Bored to Pass the Time</h2>
        <h3 ref={text}>{activity}</h3>
      </div>
      <button onClick={getActivity}>Press here to get an idea</button>
    </div>
  );
}

export default App;
