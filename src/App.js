import React, { useState } from 'react';

import { NavBar } from './NavBar/NavBar';
import { StickyNavBar } from './NavBar/StickyNavBar';

function App() {
  const [darkMood, setDarkMood] = useState(false);
  return (
    <div className={darkMood ? 'dark relative' : 'relative'}>
      <NavBar darkMood={darkMood} setDarkMood={setDarkMood} />
      <StickyNavBar darkMood={darkMood} />
      <div className='bg-[#0a0c10] dark:bg-[#0a0c10] h-screen'>
        <h1 className='text-white dark:text-white'>The Beginning</h1>
      </div>
    </div>
  );
}

export default App;
