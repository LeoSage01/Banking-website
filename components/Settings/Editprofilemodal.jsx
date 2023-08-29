import { AiOutlineClose } from "react-icons/ai";


// eslint-disable-next-line react/prop-types
const EditProfileModal = ({ isOpen, onClose, firstName, setFirstName, email, setEmail, lastName, setLastName, phone, setPhone }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', { firstName, email, lastName, phone });
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="absolute top-10  flex items-center justify-center ">
          <div className="bg-white w-[700px] h-[600px] border border-primary border-[2px] flex flex-col gap-5  p-8 rounded-md">
            <h3 className=" text-black font-bold ">Edit Personal Information</h3>
            <form onSubmit={handleFormSubmit} className=' flex flex-col gap-5'>
              <div  className="flex flex-col gap-1 mt-5 ">
                <label htmlFor="firstName" className="text-black pb-1  font-bold ">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                    className=" w-[400px]  border border-primary rounded-[5px] outline-dark-primary p-2 "
                />
              </div>
              <div className="flex flex-col gap-1 ">
                <label htmlFor="email" className="text-black pb-1  font-bold ">Email Address:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                    className=" w-[400px]  border border-primary rounded-[5px] outline-dark-primary p-2 "
                />
              </div>
              <div className="flex flex-col gap-1 ">
                <label htmlFor="lastName" className="text-black pb-1  font-bold ">Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                    className=" w-[400px]  border border-primary rounded-[5px] outline-dark-primary p-2 "
                />
              </div>
              <div className="flex flex-col gap-1 ">
                <label htmlFor="phone" className="text-black pb-1  font-bold ">Phone:</label>
                <input
                  type="text"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                    className=" w-[400px]  border border-primary rounded-[5px] outline-dark-primary p-2 "
                />
              </div>
              <button className=' w-[100px] py-2 mt-5 rounded-[5px] bg-primary text-white ' type="submit">Save</button>
               <button type="button" onClick={onClose} className="absolute  top-[5%] left-[90%] bg-white border border-primary border-[2px] w-50 h-50 rounded-[50px] p-2 "><AiOutlineClose className='w-[20px] h-[20px] '/></button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfileModal;
