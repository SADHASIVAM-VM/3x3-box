

import React, { useState } from 'react';

const App = () => {
  const [clicked, setClicked] = useState(0);
  const [gcolor, setGcolor] = useState(Array(9).fill(''));

  const clicking = (index) => {
    if (clicked >= 8) {
      setGcolor(Array(9).fill('bg-orange-400'));
      setClicked(0); 
    } else {
      const newColor = [...gcolor];
      newColor[index] = 'bg-green-400';
      setGcolor(newColor);
      setClicked((clicked) => clicked + 1);
    }
  };

  return (
   <div className="flex justify-center items-center h-screen flex-col ">
    <h1 className='text-xl font-bold my-2'>3X3 BOX</h1>
     <div className='grid grid-cols-3 w-[250px] gap-1 '>
      {gcolor.map((color, index) => (
        <div
          className={`w-20 h-20 border-2 ${color} cursor-pointer`}
          key={index}
          onClick={() => clicking(index)}
        />
      ))}
    </div>
   </div>
  );
};

export default App;
