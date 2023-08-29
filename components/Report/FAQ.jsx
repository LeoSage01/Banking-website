import React, { useState } from "react";
import IMG from "../../img/peep.png";

const Report = ({ title, content, isActive, handleClick }) => (
  <div className="border-b-2 py-2 px-auto" onClick={handleClick}>
    <p className="font-bold mb-1 text-xs text-black">{title}</p>
    {isActive && <p className="mr-3 text-xs text-slate-600">{content}</p>}
  </div>
);

const FAQ = ({ handlePrev }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const reports = [
    {
      id: 1,
      title: "Are my credentials secure?",
      content:
        "Lorem ipsum dolor sit amet  Lorem ipsum dolor sit amet consectetur adipisicing at ab consequatur Lorem ipsum dolor sit am veritatis modi sequi ",
    },
    {
      id: 2,
      title: "Why is my transaction taking so much time to be succesful?",
      content:
        "Lorem ipsum dolor sit amet  Lorem ipsum dolor sit amet consectetur periores consectetur adipisicing elit. Labore, impedit veritatis modi sequi ",
    },
    {
      id: 3,
      title: "How to get Noxa Bank Virtual Card",
      content:
        "Lorem ipsum dolor sit amet  Lorem ipsum dolor sit amet consectetur consectetur adipisicing elit. Labore, impedit veritatis modi sequi ",
    },
    {
      id: 4,
      title: "Are my credentials secure",
      content:
        "Lorem ipsum dolor sit amet  ab consequatur Lorem ipsum dolor sit veritatis modi sequi ",
    },
    {
      id: 5,
      title: "How to get Noxa Bank Virtual Card",
      content:
        "Lorem ipsum dolor consectetur adipisicing elit. Labore, impedit veritatis modi sequi ",
    },
    {
      id: 6,
      title: "Are my credentials secure",
      content:
        "Lorem ipsum dolor sit ametconsectetur adipisicing elit. Labore, impedit veritatis modi sequi ",
    },
  ];

  return (
    <div className="w-full px-4 ">
      <div className="mx-auto pt-6 sm:pt-8 sm:pb-4">
        <div className="flex justify-end" onClick={handlePrev}>
          --
        </div>
        <div className="text-center mb-6">
          <h3 className="text-primary font-bold mb-4">Report</h3>
          <p className="text-gray-500">Frequently Asked Questions</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8 h-[85%] xs:h-[75%] md:w-[80%] max-w-[700px] mx-auto px-6 xs:px-14 pt-2 sm:pt-14 bg-white shadow-md rounded-lg pb-2 overflow-y-scroll">
        <div className="flex justify-center p-4 sm:h-40">
          <img className="sm:h-48" src={IMG} alt="" />
        </div>

        <div className="">
          <div className="border-b-2 py-4 sm:py-6 px-auto">
            <p className="font-bold text-xs sm:text-base">
              Frequently Asked Questions
            </p>
          </div>

          {reports.map((report) => (
            <Report
              key={report.id}
              title={report.title}
              content={report.content}
              isActive={activeIndex === report.id}
              handleClick={() => handleItemClick(report.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
