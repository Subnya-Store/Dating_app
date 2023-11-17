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
      id: 3,
      heading: "Apperance"
    }
  ];

  return (
    <div className=''>
      <ul className='md:p-8 text-[#FD2579] font-semibold md:pt-9 flex md:grid'>
        {heading.map((x, i) => (
          <li
            className={`${activeIndex === i ? ' text-xs bg-[#FD2579] md:p-4 md:m-2 text-[#050062]  md:w-48 md:rounded-2xl bg-opacity-60 md:text-lg font-bold  m-1 p-1' : ' m-1 p-1 bg-white md:p-2 md:m-2 text-[#FD2579] font-bold text-xs md:text-lg'
              }`}
            key={i}
            onClick={() => (setActiveIndex(i), SetStateSetting(x.heading))}
          >
            {x.heading}
          </li>
        ))}
      </ul>

    </div>
  );
}
