import {AiOutlineClose}  from  'react-icons/ai';

// eslint-disable-next-line react/prop-types
const EditAddressModal = ({ isOpen, onClose, country, setCountry, cityState, setCityState, postalCode, setPostalCode }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Address submitted:', { country, cityState, postalCode });
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="absolute top-10 flex items-center justify-center ">
            <div className="bg-white w-[700px] h-[600px] border border-primary border-[2px] flex flex-col gap-6 relative  p-8 rounded-md">
              <h3 className=" text-black font-bold pb-1 ">Edit Address</h3>
            <form onSubmit={handleFormSubmit} className=' flex flex-col gap-7 '>
             <div className="flex flex-col gap-1 ">
                <label htmlFor="firstName"  className="text-black  font-bold pb-1 ">Country:</label>
                <input
                  type="text"
                  id="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                    className=" w-[400px] border border-primary rounded-[5px] outline-dark-primary p-2 "
                />
              </div>

              <div className="flex flex-col gap-1 ">
                <label htmlFor="firstName"  className="text-black  font-bold pb-1 ">City/State:</label>
                <input
                  type="text"
                  id="cityState"
                  value={cityState}
                  onChange={(e) =>  setCityState(e.target.value)}
                    className=" w-[400px] border border-primary rounded-[5px] outline-dark-primary p-2 "
                />
              </div>

              <div className="flex flex-col gap-1 ">
                <label htmlFor="firstName"  className="text-black font-bold pb-1 ">Postal Code:</label>
                <input
                  type="text"
                  id="postalCode"
                  value={postalCode}
                  onChange={(e) =>  setPostalCode(e.target.value)}
                    className=" w-[400px] border border-primary rounded-[5px] outline-dark-primary p-2 "
                />
              </div>
              <button type="submit" className=' w-[100px] py-2 mt-5 rounded-[5px] bg-primary text-white ' >Save</button>
                <button type="button" onClick={onClose} className="absolute  top-[5%] left-[90%] bg-white border border-primary border-[2px] w-50 h-50 rounded-[50px] p-2 "><AiOutlineClose className='w-[20px] h-[20px]'/></button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditAddressModal;
