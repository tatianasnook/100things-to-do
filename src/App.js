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
    text.current.classList.remove('change')
    const response = await fetch('https://www.boredapi.com/api/activity/');
    const data = await response.json();
    setActivity(data.activity);
    text.current.classList.add('change')
  }

  return (
    <div className="App">
      <div className='container'>
        <video autoPlay muted loop playsInline>
          <source src={video} type="video/mp4"/>
        </video>
        <h1>Are you bored?</h1>  
      </div>
      
      <div className='container box'>
        <h2>100+ Things to Do When You're Bored to Pass the Time</h2>
        <h3 ref={text}>{activity}</h3>
        <button onClick={getActivity}>Press here to get an idea</button>
      </div>
      
    </div>
  );
}

export default App;
