import React, { useState } from 'react';

const AccordionItem = ({ title, content, isActive, handleClick }) => (
  <div
    className={`border-l-2 pl-8 pb-4 ${isActive ? 'border-black' : ''}`}
    onClick={handleClick}
  >
    <h3 className={`font-bold text-lg mb-1 ${isActive ? 'text-black' : 'text-gray-500'}`}>
      {title}
    </h3>
    {isActive && <p className='mr-3 text-xs'>{content}</p>}
  </div>
);

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
      <AccordionItem
        title="Security"
        content="Lorem ipsum dolor sit amet  Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, impedit veritatis modi sequi asperiores at ab consequatur Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, impedit veritatis modi sequi asperiores at ab consequatur  quasi eaque quo quam harum autem, nostrum nam animi adipisci quisquam placeat. Facere.."
        isActive={activeIndex === 0}
        handleClick={() => handleItemClick(0)}
      />
      <AccordionItem
        title="Technology"
        content="Consectetur adipiscing elit  Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, impedit veritatis modi sequi asperiores at ab consequatu Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, impedit veritatis modi sequi asperiores at ab consequatur r quasi eaque quo quam harum autem, nostrum nam animi adipisci quisquam placeat. Facere.."
        isActive={activeIndex === 1}
        handleClick={() => handleItemClick(1)}
      />
      <AccordionItem
        title="Innovation"
        content="Consectetur adipiscing elit  Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, impedit veritatis modi sequi asperiores at ab Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, impedit veritatis modi sequi asperiores at ab consequatur  consequatur quasi eaque quo quam harum autem, nostrum nam animi adipisci quisquam placeat. Facere.."
        isActive={activeIndex === 2}
        handleClick={() => handleItemClick(2)}
      />
      <AccordionItem
        title="Mobile app"
        content="Consectetur adipiscing elit  Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, impedit veritatis modi sequi asperiores at ab Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, impedit veritatis modi sequi asperiores at ab consequatur  consequatur quasi eaque quo quam harum autem, nostrum nam animi adipisci quisquam placeat. Facere.."
        isActive={activeIndex === 3}
        handleClick={() => handleItemClick(3)}
      />
    </div>

  );
};

export default Accordion;