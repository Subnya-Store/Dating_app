import React, { useState } from 'react';

export default function Index({ SetStateSetting }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const heading = [
    {
      id: 0,
      heading: "Account"
    },
    {
      id: 1,
      heading: "Notifications"
    },
    {
      id: 2,
      heading: "Data Export"
    },
    {
      id:3,
      heading:"Apperance"
    },
    {
      id: 4,
      heading: "Privacy Settings"
    }
  ];

  return (
    <div className="">
      <ul className='p-8 text-[#FD2579] font-semibold pt-9'>
        {heading.map((x, i) => (
          <li
            className={`${
              activeIndex === i ? 'bg-[#FD2579] p-4 m-2 text-[#050062]  w-48 rounded-2xl bg-opacity-60 text-lg' : 'bg-white p-2 m-2 text-[#FD2579]  text-lg'
            }`}
            key={i}
            onClick={() => (setActiveIndex(i),SetStateSetting(x.heading))} 
          >
            {x.heading}
          </li>
        ))}
      </ul>
      
    </div>
  );
}
