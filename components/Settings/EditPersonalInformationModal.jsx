
import {AiOutlineClose}  from  'react-icons/ai';

// eslint-disable-next-line react/prop-types
const EditPersonalInformationModal = ({ isOpen, onClose, fullName, setFullName, profileImage, setProfileImage, handleProfileImageChange }) => {
  

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Personal Information submitted:', { fullName, profileImage });
    onClose();
  };

 
  const handleFileInputChange = (e) => {
    const file = e.target.files && e.target.files.length > 0 ? e.target.files[0] : null;
    if (file) {
      handleProfileImageChange(file);
      setProfileImage(file);
    }
  };


  return (
    <>
      {isOpen && (
        <div className="absolute top-10  flex items-center justify-center">
          <div className="bg-white w-[700px] h-[600px] border border-primary border-[2px] flex flex-col gap-8  relative  p-8 rounded-md">
            <h3 className=" text-black font-bold">Edit Personal Information</h3>
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-7">
              <div className="flex flex-col gap-2">
                <label htmlFor="fullName" className="text-black  font-bold">Full Name:</label>
                <input
                  type="text"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-[400px] border border-primary rounded-[5px] outline-dark-primary p-2"
                />
              </div>

              <div className="flex flex-col gap-1 mt-6">
                <label htmlFor="profileImage" className="text-black  font-bold">Profile Image:</label>
                <input type="file" id="profileImage" className="w-[220px] h-[50px] border border-primary rounded-[5px] outline-dark-primary p-2" onChange={handleFileInputChange} accept="image/*" />
              </div>
              <button type="submit" className="w-[100px] py-2 mt-5 rounded-[5px] bg-primary text-white">Save</button>
              <button type="button" onClick={onClose} className="absolute top-[5%] left-[90%] bg-white border border-primary border-[2px] w-50 h-50 rounded-[50px] p-2">
                <AiOutlineClose className="w-[20px] h-[20px]" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditPersonalInformationModal;
