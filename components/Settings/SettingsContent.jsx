import ProfilePage from "./ProfilePage"


const SettingsContent = () => {
  return (
    <div className="h-[100%] py-4 flex gap-1">

      {
        <div className="hidden w-[20%] h-[100%] sm:flex flex-col gap-7 items-center px-2 pt-[1rem] ">
        <div className="w-[119px] h-[43px] rounded-[12px] bg-Box2 flex justify-center items-center ">
          <p className=" text-[16px] leading-[19px] text-primary font-semi-bold ">My Profile</p>
        </div>

        <div className=" flex flex-col gap-8 items-center mt-[1rem] ">
          <div><p className="leading-[19px] text-text font-semi">Card Maintenance</p></div>
          <div><p className="leading-[19px] text-text font-semi">Privacy and Security</p></div>
          <div><p className="leading-[19px] text-text font-semi">Account Statement</p></div>
        </div>

        <div className="mt-[2rem] ">
          <p className="text-[16px] leading-[19px] text-out font-semi">Delete Account</p>
        </div>

      </div>}

      <div className="hidden sm:block w-[.1%]  bg-ashed border border-dashed "></div>
      <div className="w-[79%] mx-auto pt-[1rem] ">
        <ProfilePage />
      </div>
    </div>
  )
}

export default SettingsContent