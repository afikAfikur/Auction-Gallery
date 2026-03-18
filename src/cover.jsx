import "./App.css";
import banner from './assets/Banner-min.jpg';

const Cover = () => {

 
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight, // scroll down by one screen height
      behavior: "smooth"       // smooth scrolling
    });
  };

  return (
    <div className="relative">
      <img className='h-[300px] md:h-[500px] lg:h-[700px] w-full object-cover' src={banner} alt="" />
      <div className="absolute top-[30%] md:top-[40%] left-[5%] md:left-[10%] 
            w-[90%] md:w-1/2 lg:w-1/5 
            sora flex flex-col gap-[15px] md:gap-[20px] text-white">
        <p className="font-bold text-[20px] md:text-[28px] lg:text-[32px]">
          Bid on Unique Items from Around the World
        </p>
        <p className="font-light text-sm md:text-base">
          Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
        </p>
        <button
          onClick={scrollToNext} // <-- added scroll functionality
          className="bg-white text-black py-2 rounded-xl w-fit px-4 font-semibold 
                     hover:bg-blue-500 hover:text-white hover:scale-105 
                     transition-all duration-300"
        >
          Explore Auctions
        </button>
      </div>
    </div>
  );
};

export default Cover;