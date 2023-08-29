import IMG1 from "./img/person4.png";
import pencil from "./img/edit-2.png";
import { useState } from "react";
import EditprofileModal from "./Editprofilemodal";
import EditPersonalInformationModal from "./EditPersonalInformationModal";
import EditAddressModal from "./EditAddressModal";
import { useEffect } from "react";

const ProfilePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [isPersonalInfoModalOpen, setIsPersonalInfoModalOpen] = useState(false);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [country, setCountry] = useState("");
  const [cityState, setCityState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [fullName, setFullName] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const handleEditClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleEditPersonal = () => {
    setIsPersonalInfoModalOpen(!isPersonalInfoModalOpen);
  };

  const handleEditAddress = () => {
    setIsAddressModalOpen(!isAddressModalOpen);
  };

  const handleProfileImageChange = (file) => {
    setProfileImage(file);
  };

  useEffect(() => {
    const newFullName = `${firstName} ${lastName}`;
    setFullName(newFullName);
  }, [firstName, lastName]);

  return (
    <div className='h-full flex flex-col gap-2 '>
      <div className='flex flex-col gap-1'>
        <p className='  text-base mb-2 text-black font-bold pl-[1rem]'>
          My Profile
        </p>
        <div className='w-[95%] py-2 border border-Box2 border-2px rounded-[10px] flex justify-between pr-4 gap-2 '>
          <div className=' flex  gap-2 items-center pl-[1rem] '>
            <div className='mx-auto h-[42px] w-[42px] xs:h-[60px] xs:w-[60px] mb-1'>
              {profileImage ? (
                <img
                  className='h-full rounded-full'
                  src={URL.createObjectURL(profileImage)}
                  alt='Profile'
                />
              ) : (
                <img
                  className='h-full rounded-full'
                  src={IMG1}
                  alt='Default Profile'
                />
              )}
            </div>
            <div className=' flex flex-col gap-1'>
              <p className=' text-base text-black font-bold'>
                {fullName}
              </p>
              <p className='  text-base text-text  font-bold'>
                Account owner
              </p>
            </div>
          </div>

          <div
            onClick={handleEditPersonal}
            className=' flex  justify-center  gap-2 w-[74px] h-[38px] items-center rounded-[22px] border border-[1px] p-[10px] my-auto'
          >
            <p className=' leading-[17px]  font-light'>
              Edit
            </p>
            <img
              src={pencil}
              alt='pencil'
              className=' w-[18px] h-[18px] bg-white '
            />
          </div>
        </div>
      </div>
      <div>
        <div className='w-[95%] pb-4 border-Box2 border-[2px] rounded-[10px] flex flex-col '>
          <div className=' flex justify-between gap-6 pr-4'>
            <p className='  text-base text-black font-bold mt-[1rem] pl-[1rem] '>
              Personal Information
            </p>
            <div
              onClick={handleEditClick}
              className=' flex  justify-center w-[74px] gap-2 items-center rounded-[22px]  border border-1px p-[10px] mt-[2rem]'
            >
              <p className='text-[14px] leading-[17px]  font-light'>
                Edit
              </p>
              <img
                src={pencil}
                alt='pencil'
                className=' w-[18px] h-[18px] bg-white '
              />
            </div>
          </div>

          <div className=' pl-6 flex gap-4 sm:gap-[6rem] flex-col sm:flex-row'>
            <div className=' flex flex-col gap-4 '>
              <div className='flex flex-col gap-2 '>
                <h3 className='text-[16px] leading-[19px] font-semi text-text '>
                  First Name
                </h3>
                <p className='  text-base font-semi text-black '>
                  {firstName}
                </p>
              </div>
              <div className='flex flex-col gap-3 '>
                <h3 className='text-[16px] leading-[19px] font-semi text-text '>
                  Email Address
                </h3>
                <p className='  text-base font-semi text-black '>
                  {email}
                </p>
              </div>
            </div>
            <div className=' flex flex-col gap-5 '>
              <div className='flex flex-col gap-3 '>
                <h3 className='text-[16px] leading-[19px] font-semi text-text '>
                  Last name
                </h3>
                <p className='  text-base font-semi text-black '>
                  {lastName}
                </p>
              </div>
              <div className='flex flex-col gap-3 '>
                <h3 className='text-[16px] leading-[19px] font-semi text-text '>
                  Phone
                </h3>
                <p className='  text-base font-semi text-black '>
                  {phone}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='w-[95%] mb-4 pb-4 mb- border border-Box2 border-[2px] rounded-[10px] flex flex-col '>
          <div className=' flex justify-between pr-4'>
            <p className='  text-base text-black font-bold mt-[1rem] pl-[1rem]'>
              Address
            </p>
            <div
              onClick={handleEditAddress}
              className=' flex  justify-center  w-[74px] h-[38px] items-center gap-2  rounded-[22px] border border-1px p-[10px] mt-[2rem]'
            >
              <p className='text-[14px] leading-[17px]  font-light'>
                Edit
              </p>
              <img
                src={pencil}
                alt='pencil'
                className=' w-[18px] h-[18px] bg-white '
              />
            </div>
          </div>

          <div className=' flex gap-4 sm:gap-[5rem] flex-col sm:flex-row pl-4'>
            <div className='flex flex-col gap-3 '>
              <h3 className='text-[16px] leading-[19px] font-semi text-text '>
                Country
              </h3>
              <p className='  text-base font-semi text-black '>
                {country}
              </p>
            </div>
            <div className='flex flex-col gap-3 '>
              <h3 className='text-[16px] leading-[19px] font-semi text-text '>
                City/state
              </h3>
              <p className='  text-base font-semi text-black '>
                {cityState}
              </p>
            </div>
            <div className='flex flex-col gap-3 '>
              <h3 className='text-[16px] leading-[19px] font-semi text-text '>
                Postal Code
              </h3>
              <p className='  text-base font-semi text-black '>
                {postalCode}
              </p>
            </div>
          </div>
        </div>
      </div>

      <EditprofileModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        firstName={firstName}
        setFirstName={setFirstName}
        email={email}
        setEmail={setEmail}
        lastName={lastName}
        setLastName={setLastName}
        phone={phone}
        setPhone={setPhone}
      />

      <EditPersonalInformationModal
        isOpen={isPersonalInfoModalOpen}
        onClose={() => setIsPersonalInfoModalOpen(false)}
        fullName={fullName}
        setFullName={setFullName}
        profileImage={profileImage}
        setProfileImage={setProfileImage}
        handleProfileImageChange={handleProfileImageChange}
      />

      {/* Modal for Address */}
      <EditAddressModal
        isOpen={isAddressModalOpen}
        onClose={() => setIsAddressModalOpen(false)}
        country={country}
        setCountry={setCountry}
        cityState={cityState}
        setCityState={setCityState}
        postalCode={postalCode}
        setPostalCode={setPostalCode}
      />
    </div>
  );
};

export default ProfilePage;
