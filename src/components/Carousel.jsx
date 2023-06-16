// import React, { useState } from 'react';

// const Carousel = () => {
//   const [selected, setSelected] = useState(0);

//   const handleSelect = (index) => {
//     setSelected(index);
//   };

//   return (
//     <div className="flex justify-center">
//       <div className="w-1/3 mx-2">
//         <div
//           className={`p-4 bg-gray-200 h-${
//             selected === 0 ? '48' : '24'
//           } rounded-lg`}
//           onClick={() => handleSelect(0)}
//         >
//           <h2 className="font-bold">Item 1</h2>
//         </div>
//       </div>
//       <div className="w-1/3 mx-2">
//         <div
//           className={`p-4 bg-gray-200 h-${
//             selected === 1 ? '48' : '24'
//           } rounded-lg`}
//           onClick={() => handleSelect(1)}
//         >
//           <h2 className="font-bold">Item 2</h2>
//         </div>
//       </div>
//       <div className="w-1/3 mx-2">
//         <div
//           className={`p-4 bg-gray-200 h-${
//             selected === 2 ? '48' : '24'
//           } rounded-lg`}
//           onClick={() => handleSelect(2)}
//         >
//           <h2 className="font-bold">Item 3</h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carousel;


import React from 'react';

// const Carousel = () => {
//   return (
//     <div className="grid grid-cols-3 gap-4">
//       <div className="relative overflow-hidden group">
//         <div className="bg-gray-200 h-40 group-hover:h-full transition-all duration-500"></div>
//       </div>
//       <div className="relative overflow-hidden group">
//         <div className="bg-gray-200 h-40 group-hover:h-48 transition-all duration-500"></div>
//       </div>
//       <div className="relative overflow-hidden group">
//         <div className="bg-gray-200 h-40 group-hover:h-full transition-all duration-500"></div>
//       </div>
//     </div>
//   );
// };

// export default Carousel;

const Carousel = () => {
    return (
      <div className="flex">
        <div className="w-1/3 p-4 hover:w-1/2 bg-gray-200">Column 1</div>
        <div className="w-1/3 p-4 hover:w-2/3 bg-gray-300">Column 2</div>
        <div className="w-1/3 p-4 hover:w-full bg-gray-400">Column 3</div>
      </div>
    );
  };

  export default Carousel;

  