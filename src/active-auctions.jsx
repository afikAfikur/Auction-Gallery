import { useEffect, useState } from "react";
import "./App.css";
import { PiBoxingGloveBold } from "react-icons/pi";
import Cart from "./cart";
const Active = () => {
  const [list, setList] = useState([]);
  const [act, setAct] = useState([]); // track active buttons
  const [toasts, setToasts] = useState([]); // multiple toasts
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const loaddata = async () => {
      const res = await fetch("data.json");
      const data = await res.json();
      setList(data);
    };
    loaddata();
  }, []);

  const handleBidClick = (el) => {
    if (act.includes(el.id)) {
      setAct(act.filter((id) => id !== el.id));
    } else {
      setAct([...act, el.id]);
    }
    if (!cart.some((item) => item.id === el.id)) {
      setCart([...cart, el]);
    }

    setCless(true);
    const newToast = { id: Date.now(), message: `${el.title} is added to cart` };
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
    }, 3000);
    <Cart el={el}></Cart>;
  };
  const [cless, setCless] = useState(false);

  return (
    <div className="relative sora flex flex-col md:flex-row items-start justify-between mx-4 md:mx-[300px] mt-[50px] gap-8 md:gap-[40px] lg:gap-[100px]">
      <div className="fixed top-4 right-0 z-50 flex flex-col gap-2">
        {toasts.map((t) => (
          <div
            key={t.id}
            className="bg-blue-600 text-white px-5 py-3 rounded-l-full shadow-lg animate-slide-left"
          >
            {t.message}
          </div>
        ))}
      </div>

      <div className="flex-1 flex flex-col gap-[20px] w-full">
        <h2 className="text-blue-900 font-semibold text-[24px] ">
          Active Auctions
        </h2>
        <h2>Discover and bid on extraordinary items</h2>
        <div className="overflow-x-auto rounded-xl border">
          <table className="min-w-full border-collapse">
            <thead className="bg-gray-100 text-blue-900">
              <tr>
                <th className="px-[20px] py-[15px] text-left">Items</th>
                <th className="px-[20px] py-[15px] text-left">Current Bid</th>
                <th className="px-[20px] py-[15px] text-left">Time Left</th>
                <th className="px-[20px] py-[15px] text-left">Bid Now</th>
              </tr>
            </thead>

            <tbody className="text-blue-900 text-center divide-y divide-gray-200">
              {list.map((el) => (
                <tr
                  key={el.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <img
                        className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] object-cover rounded-md"
                        src={el.image}
                        alt=""
                      />
                      <h3 className="font-medium">{el.title}</h3>
                    </div>
                  </td>
                  <td className="p-4 font-semibold">${el.currentBidPrice}</td>
                  <td className="p-4">{el.timeLeft}</td>
                  <td className="p-4">
                    <button
                      onClick={() => handleBidClick(el)}
                      disabled={act.includes(el.id)}
                      className={`flex items-center justify-center mx-auto p-2 rounded-full transition ${
                        act.includes(el.id)
                          ? "bg-blue-900 text-white"
                          : "bg-blue-100 text-blue-900 hover:bg-blue-200"
                      }`}
                    >
                      <PiBoxingGloveBold size={20} color="red" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center md:w-[300px] p-[30px] border-2 rounded-xl ">
        <h className="text-blue-900 font-semibold mt- text-[24px]">Cart</h>
        <Cart cless={cless} setCart={setCart} cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Active;
