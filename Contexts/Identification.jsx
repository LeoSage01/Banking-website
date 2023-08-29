import { useState } from "react";
import Upload from "../img/Vector (5).png";
import IMG1 from "../img/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// eslint-disable-next-line react/prop-types
const Identification = ({ handleNext }) => {
  const [documentType, setDocumentType] = useState("");
  const [idNumber, setIdNumber] = useState("");

  const [uploadedImage, setUploadedImage] = useState(null);

  const handleDocumentTypeChange = (e) => {
    setDocumentType(e.target.value);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (documentType === "BVN") {
      // Skip image upload for BVN document type
      setUploadedImage(null);
    } else {
      setUploadedImage(file);
    }
  };

  const handleIdNumberChange = (e) => {
    setIdNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Document Type:", documentType);
    console.log("ID Number:", idNumber);
    console.log("Uploaded Image:", uploadedImage);

    setDocumentType("");
    setIdNumber("");
    setUploadedImage(null);

    handleNextClick();
  };

  const handleNextClick = () => {
    if (!documentType || !idNumber || !uploadedImage) {
      toast.error("Please fill in all fields.");
      return;
    }

    handleNext();
  };

  return (
    <div className="flex flex-col justify-center items-center w-[85%] pt-5 ">
      <div>
        <ToastContainer position="top-right" />
      </div>
      <div className="flex flex-row  gap-3 relative ">
        
        <div className="flex flex-col gap-3 ">
          <h3 className="font-bold text-[25px] leading-[30px] text-primary flex justify-center ">
            Sign Up
          </h3>
          <h4 className="font-semi-bold text-black  text-[24px] flex  sm:pl-[0] pl-[2rem] justify-center leading-[29px]">
            Identification
          </h4>
        </div>
      </div>

      <div className="flex flex-col mt-14 ">
        <form
          onSubmit={handleSubmit}
          className="sm:justify-start  sm:items-start justify-center flex flex-col items-center gap-5 "
        >
          <div className="flex  flex-col gap-2  md:pl-[0rem]  pl-[4rem]">
            <label className="font-400 text-[18px] text-primary leading-[22px] font-Inter ">
              Document Type:
            </label>
            <select
              value={documentType}
              onChange={handleDocumentTypeChange}
              required
              className="xxl:w-[309px] sm:w-[309px] w-[309px] h-[63px] rounded-[8px] outline-primary border-2 border-primary pl-2 "
            >
              <option value="">Select Document Type</option>
              <option value="NIN">NIN</option>
              <option value="BVN">Bvn</option>
              <option value="driver-license">Drivers License</option>
              <option value="national-id">National ID</option>
            </select>
          </div>
          {documentType && documentType !== "BVN" && (
            <div className="   md:w-[600px] w-[300px] h-[200px] bg-fair border-dashed border-[4px] md:ml-[0rem] ml-[4rem] pl-[2.5rem] border border-box flex flex-col justify-center">
              <img
                src={Upload}
                alt="Upload"
                className="w-[23px] h-[25px] flex md:ml-[15rem] ml-[6rem]"
              />
              <label className="font-400 text-[18px] leading-[22px] text-primary font-Inter md:pl-[10rem] pl-[0rem] mt-4">
                Choose Image to upload:
              </label>
              <input
                type="file"
                onChange={handleImageUpload}
                accept="image/*"
                required
                className="flex md:pl-[10rem] pl-[0rem] text-primary outline-primary w-[500px] rounded-[8px] mt-2"
              />
              {uploadedImage && (
                <div>
                  <img
                    src={URL.createObjectURL(uploadedImage)}
                    alt="Uploaded"
                  />
                  {/* Render the uploaded image or any other content related to the uploaded image */}
                </div>
              )}
            </div>
          )}

          {documentType === "BVN" ? (
            <div className="flex flex-col gap-2 md:pl-[0rem] pl-[4rem]">
              <label className="font-400 text-[18px] leading-[22px] text-primary font-Inter">
                Input Your BVN:
              </label>
              <input
                type="text"
                value={idNumber}
                onChange={handleIdNumberChange}
                required
                className="xxl:w-[787px] sm:w-[587px] w-[309px] h-[63px] rounded-[8px] outline-primary border-2 border-primary pl-2 "
              />
            </div>
          ) : (
            <div className="flex flex-col gap-2 md:pl-[0rem] pl-[4rem]">
              <label className="font-400 text-[18px] leading-[22px] text-primary  font-Inter ">
                ID Number:
              </label>
              <input
                type="text"
                value={idNumber}
                onChange={handleIdNumberChange}
                required
                placeholder="enter a 16 digits code"
                className="xxl:w-[787px] sm:w-[587px] w-[309px] h-[63px] rounded-[8px] outline-primary border-2 border-primary pl-2 "
              />
            </div>
          )}

          <div className="flex justify-center  lg:pl-[0rem] pl-[4rem] mt-9">
            <button
              className="hover:animate-bounce lg:w-[400px] lg:h-[63px] w-[200px] h-[63px] pl-[1rem]  bg-primary text-white font-600 text-[20px] text-center leading-[24px] rounded-[8px] hover:bg-dark-primary"
              onClick={handleNextClick}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Identification;
