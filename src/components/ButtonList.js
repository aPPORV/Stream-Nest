// import React from 'react';
// import Button from './Button';

// const ButtonList = () => {
//   const buttonNames = [
//     "All",
//     "Gaming",
//     "Songs",
//     "Cricket",
//     "Soccer",
//     "News",
//     "Cooking",
//     "Soccer", // You might want to remove this duplicate
//   ];

//   return (
//     <div className='flex'>
//       {buttonNames.map((name, index) => (
//         <Button key={index} name={name} />
//       ))}
//     </div>
//   );
// };

// export default ButtonList;

import React from 'react';
import Button from './Button';

const ButtonList = () => {
  const buttonNames = [
    "All",
    "Gaming",
    "Songs",
    "Cricket",
    "Soccer",
    "News",
    "Cooking",
    "Travel",
    "Education",
    "Technology",
    "Movies",
    "Fitness",
  ];

  return (
    <div className='flex items-center'>
      {buttonNames.map((name, index) => (
        <Button key={index} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
