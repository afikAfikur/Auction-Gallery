import "./App.css";
import { RiNotificationBadgeLine } from 
"react-icons/ri";
import { GiPlagueDoctorProfile } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="poppins flex flex-col md:flex-row items-center justify-between px-[10px] md:px-[80px] pt-[20px] md:pt-[40px] border-2 pb-[10px] gap-[15px] md:gap-0">
      <div><h2 className="text-yellow-500 font-bold text-[24px] md:text-[32px] text-center md:text-left"><span className="text-blue-500">Auction</span>Gallery</h2></div>
      <div className="text-[18px] md:text-[22px] flex flex-wrap justify-center gap-[20px] md:gap-[70px]">
        <h2>Home</h2>
        <h2>Auctions</h2>
        <h2>Categories</h2>
        <h2>How to works</h2>
      </div>
      <div className="flex gap-[15px]">
<RiNotificationBadgeLine size={25} />
<GiPlagueDoctorProfile size={30}/>
      </div>
    </div>
  );
};
export default Navbar;
