import './App.css';
import { useState, useEffect } from 'react';
import video from './clouds.mp4';

// http://www.boredapi.com/api/activity/

function App() {
  const [activity, setActivity] = useState('');
  
  useEffect(() => {
    const getActivity = async () => {
      const response = await fetch('http://www.boredapi.com/api/activity/');
      const data = await response.json();
      console.log(data.activity);
    }
    getActivity()
  }, [])

  return (
    <div className="App">
      <div className='container'>
        <video autoPlay muted loop>
          <source src={video} type="video/mp4"/>
        </video>
        <h1>Are you bored?</h1>
        <h2>100+ Things to Do When You're Bored to Pass the Time</h2>
      </div>
      <button>Press here to get an idea</button>
    </div>
  );
}

export default App;
