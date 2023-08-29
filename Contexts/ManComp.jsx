import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PersonalInfo from '../components/PersonalInfo';
import ContactInfo from './ContactInfo';
import EmploymentInfo from './EmploymentInfo';
import Identification from './Identification';
import SecurityInfo from './SecurityInfo';

const ManComp = () => {

  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    const storedStep = sessionStorage.getItem('currentStep');
    if (storedStep) {
      setCurrentStep(parseInt(storedStep));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('currentStep', currentStep.toString());
  }, [currentStep]);


  const handleStepClick = (step) => {
    setCurrentStep(step);
  };

  const handleReset = () => {
    setCurrentStep(1);
  };


  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };



  return (
    <>
      <div className="bg-primary flex justify-center items-center pb-4 lg:w-[15%]">
        <div className="hidden lg:flex flex-col items-center  gap-1 mt-[2rem]">
          <Link
            className={`${currentStep === 1 ? 'bg-white text-primary' : 'bg-white text-primary'
              } px-3 py-1.5 rounded-[50px] w-[35px] h-[35px] font-semibold`}
            onClick={handleReset}
          >
            1
          </Link>
          <div className="flex flex-col justify-center items-center">
            <div
              className={`w-[2px] h-[80px] ${currentStep >= 2 ? 'bg-white' : 'bg-gray-300'
                }`}
            ></div>
          </div>
          <Link
            className={`${currentStep >= 2 ? 'bg-white text-primary' : 'bg-gray-300 text-white'
              } px-3 py-1.5 rounded-[50px] w-[35px] h-[35px] font-semibold`}
            onClick={() => handleStepClick(2)}
          >
            2
          </Link>
          <div className="flex flex-col justify-center items-center">
            <div
              className={`w-[2px] h-[80px] ${currentStep >= 3 ? 'bg-white' : 'bg-gray-300'
                }`}
            ></div>
          </div>
          <Link
            className={`${currentStep >= 3 ? 'bg-white text-primary' : 'bg-gray-300 text-white'
              } px-3 py-1.5 rounded-[50px] w-[35px] h-[35px]`}
            onClick={() => handleStepClick(3)}
          >
            3
          </Link>
          <div className="flex flex-col justify-center items-center">
            <div
              className={`w-[2px] h-[80px] ${currentStep >= 4 ? 'bg-white' : 'bg-gray-300'
                }`}
            ></div>
          </div>
          <Link
            className={`${currentStep >= 4 ? 'bg-white text-primary' : 'bg-gray-300 text-white'
              } px-3 py-1.5 rounded-[50px] w-[35px] h-[35px]`}
            onClick={() => handleStepClick(4)}
          >
            4
          </Link>
          <div className="flex flex-col justify-center items-center">
            <div
              className={`w-[2px] h-[80px] ${currentStep >= 5 ? 'bg-white' : 'bg-gray-300'
                }`}
            ></div>
          </div>
          <Link
            className={`${currentStep >= 5 ? 'bg-white text-primary' : 'bg-gray-300 text-white'
              } px-3 py-1.5 rounded-[50px] w-[35px] h-[35px]`}
            onClick={() => handleStepClick(5)}
          >
            5
          </Link>
        </div>

        <div className="lg:hidden flex items-center mt-[2rem]">
          <Link
            className={`${currentStep === 1 ? 'bg-white text-primary' : 'bg-white text-primary'
              } px-3 py-1.5 rounded-[50px] w-[35px] h-[35px] font-semibold`}
            onClick={handleReset}
          >
            1
          </Link>
          <div className="flex  justify-center items-center">
            <div
              className={`w-[40px] h-[2px] ${currentStep >= 2 ? 'bg-white' : 'bg-gray-300'
                }`}
            ></div>
          </div>
          <Link
            className={`${currentStep >= 2 ? 'bg-white text-primary' : 'bg-gray-300 text-white'
              } px-3 py-1.5 rounded-[50px] w-[35px] h-[35px] font-semibold`}
            onClick={() => handleStepClick(2)}
          >
            2
          </Link>
          <div className="flex flex-col justify-center items-center">
            <div
              className={`w-[40px] h-[2px] ${currentStep >= 3 ? 'bg-white' : 'bg-gray-300'
                }`}
            ></div>
          </div>
          <Link
            className={`${currentStep >= 3 ? 'bg-white text-primary' : 'bg-gray-300 text-white'
              } px-3 py-1.5 rounded-[50px] w-[35px] h-[35px]`}
            onClick={() => handleStepClick(3)}
          >
            3
          </Link>
          <div className="flex flex-col justify-center items-center">
            <div
              className={`w-[40px] h-[2px] ${currentStep >= 4 ? 'bg-white' : 'bg-gray-300'
                }`}
            ></div>
          </div>
          <Link
            className={`${currentStep >= 4 ? 'bg-white text-primary' : 'bg-gray-300 text-white'
              } px-3 py-1.5 rounded-[50px] w-[35px] h-[35px]`}
            onClick={() => handleStepClick(4)}
          >
            4
          </Link>
          <div className="flex flex-col justify-center items-center">
            <div
              className={`w-[40px] h-[2px] ${currentStep >= 5 ? 'bg-white' : 'bg-gray-300'
                }`}
            ></div>
          </div>
          <Link
            className={`${currentStep >= 5 ? 'bg-white text-primary' : 'bg-gray-300 text-white'
              } px-3 py-1.5 rounded-[50px] w-[35px] h-[35px]`}
            onClick={() => handleStepClick(5)}
          >
            5
          </Link>
        </div>




      </div>

      <div className="lg:pl-[5rem] flex items-center py-20 mx-auto">

        {currentStep === 1 && <PersonalInfo handleNext={handleNext} />}
        {currentStep === 2 && <ContactInfo handleNext={handleNext} />}
        {currentStep === 3 && <EmploymentInfo handleNext={handleNext} />}
        {currentStep === 4 && <Identification handleNext={handleNext} />}
        {currentStep === 5 && <SecurityInfo handleNext={handleNext} />}


      </div>

    </>
  )
}

export default ManComp