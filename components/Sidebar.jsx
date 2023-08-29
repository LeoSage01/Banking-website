import Logo from "../img/logo2.png"
import IMG1 from "../img/person4.png"
import { IoSettingsOutline } from "react-icons/io5"
import { HiOutlineCreditCard } from "react-icons/hi2"
import { MdOutlineReportGmailerrorred, MdDashboard } from "react-icons/md"
import { IoIosAnalytics } from "react-icons/io"
import { MdPayments } from "react-icons/md"
import { BiTransferAlt, BiLogOut } from "react-icons/bi"
import { useState } from "react"
import { Link } from "react-router-dom"
import Dashboard from "../pages/Dashboard"
import Card from "../components/Card/Card"




const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState("")

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (id) => {
        setActive(id);
    };


    const items = [
        {
            id: 1,
            icon: <MdDashboard />,
            heading: "Dashboard",
            to: "/dashboard"
        },
        {
            id: 2,
            icon: <HiOutlineCreditCard />,
            heading: "Card",
            to: "/card"
        },
        {
            id: 3,
            icon: <BiTransferAlt />,
            heading: "Fund transfers",
            to: "/transfer"
        },
        {
            id: 4,
            icon: <MdPayments />,
            heading: "Payments",
            to: "/payment"
        },
        {
            id: 5,
            icon: <IoIosAnalytics />,
            heading: "Analytics",
            to: "/analytics"
        },
        {
            id: 6,
            icon: <MdOutlineReportGmailerrorred />,
            heading: "Report",
            to: "/report"
        },
        {
            id: 7,
            icon: <IoSettingsOutline />,
            heading: "Settings",
            to: "/setting"
        },
    ]

    return (
        <>
            <div className="hidden lg:block w-[240px] max-w-[500px]">
                <div className="h-full  px-6 pt-4 pb-8 bg-black text-white flex flex-col justify-between rounded-xl">
                    <div className="flex flex-col justify-center gap-5 mx-auto">
                        <img className="mx-auto mb-4 h-4 w-12" src={Logo} alt="Logo" />

                        {items.map((item) => (
                            <Link
                                to={item.to}
                                key={item.id}
                                className={`flex items-center gap-4 cursor-pointer ${active === item.id ? "text-white" : "text-gray-500"
                                    }`}

                            >
                                <span>{item.icon}</span>
                                <span className="text-sm">{item.heading}</span>
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 pl-4 text-gray-500">
                        <BiLogOut />
                        <span className="text-sm">Logout</span>
                    </div>


                    <div className="flex flex-col text-center space-y-1">
                        <div className="mx-auto h-10 w-10 rounded-full mb-1">
                            <img className="h-full" src={IMG1} alt="" />
                        </div>
                        <p className="text-white text-sm">Georgina May</p>
                        <p className="text-white text-xs font-light">+31 880812231</p>
                    </div>

                </div>
            </div>

            <div className="lg:hidden flex">
                <button className="absolute top-4 left-4" onClick={toggleMenu} >
                    <svg className="w-8 h-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div className="lg:hidden w-[200px] absolute  h-full">
                    <div className="h-full px-6 pt-4 pb-8 bg-black text-white flex flex-col justify-between lg:rounded-xl">
                       
                        <div className="flex flex-col justify-center gap-5 mx-auto">
                            <button className="absolute top-2 right-2" onClick={toggleMenu} >
                                <svg className="w-8 h-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                            <img className="mx-auto mt-2 mb-4 h-4 w-12" src={Logo} alt="Logo" />

                            {items.map((item) => (
                                <Link
                                    to={item.to}
                                    key={item.id}
                                    className={`flex items-center gap-4 cursor-pointer ${active === item.id ? "text-white" : "text-gray-500"
                                        }`}

                                >
                                    <span>{item.icon}</span>
                                    <span className="text-sm">{item.heading}</span>
                                </Link>
                            ))}
                        </div>

                        <div className="flex items-center gap-4 pl-4 text-gray-500">
                            <BiLogOut />
                            <span className="text-sm">Logout</span>
                        </div>


                        <div className="flex flex-col text-center space-y-1">
                            <div className="mx-auto h-10 w-10 rounded-full mb-1">
                                <img className="h-full" src={IMG1} alt="" />
                            </div>
                            <p className="text-white text-sm">Georgina May</p>
                            <p className="text-white text-xs font-light">+31 880812231</p>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
}

export default Sidebar;





