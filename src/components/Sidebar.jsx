import Logo from "../img/logo2.png"
import IMG1 from "../img/person4.png"

const Sidebar = () => {
    const items = [
        {
            id: 1,
            icon: this,
            heading: "Dashboard"
        },
        {
            id: 2,
            icon: this,
            heading: "Card"
        },
        {
            id: 3,
            icon: this,
            heading: "Fund transfers"
        },
        {
            id: 4,
            icon: this,
            heading: "Payments"
        },
        {
            id: 5,
            icon: this,
            heading: "Analytics"
        },
        {
            id: 6,
            icon: this,
            heading: "Report"
        },
        {
            id: 7,
            icon: this,
            heading: "Settings"
        },
    ]

    return (
        <div className="w-[20%] h-full p-4 pr-0">
            <div className="h-full pt-4 pb-8 bg-black text-white flex flex-col w-full justify-between rounded-xl">
                <div className="">
                    <img className="mx-auto mb-4 h-4 w-12" src={Logo} alt="Logo" />

                    {items.map((item) => (
                        <div className="flex pl-16 space-y-3" key={item.id}>
                            <img src="" alt="" />
                            <span className="text-white text-base">{item.heading}</span>
                        </div>
                    ))}
                </div>

                <div className="flex pl-16">
                    <img src="" alt="" />
                    <span className="text-white text-base">Logout</span>
                </div>

                <div className="flex flex-col text-center space-y-1">
                    <div className="mx-auto h-10 w-10 rounded-full mb-1">
                        <img className="h-full"  src={IMG1} alt="" />
                    </div>
                    <p className="text-white text-sm">Georgina May</p>
                    <p className="text-white text-xs font-light">+31 880812231</p>
                </div>

            </div>
        </div>
    );
}

export default Sidebar;