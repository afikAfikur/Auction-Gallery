import { useState } from "react";
import "./App.css";
import { RxCrossCircled } from "react-icons/rx";
import { PiBoxingGloveBold } from "react-icons/pi";
const Cart = ({ cart, cless }) => {
   const total = cart.reduce(
    (acc, el) => acc + Number(el.currentBidPrice),
    0
  );

  return (
    <div className="sora w-full flex  flex-col text-center gap-2">
      <div className="flex items-center justify-center gap-2">
        <PiBoxingGloveBold size={20} color="grey" />
        <h2 className="text-blue-900">Favorite Items</h2>
      </div>
      <hr />
      <div>
        <h2 className={`${cless ? "hidden" : ""} text-blue-900`}>
          No favorites yet
        </h2>
        <p className={`${cless ? "hidden" : ""} font-normal text-gray-900`}>
          Click the heart icon on any item to add it to your favorites
        </p>
      </div>

      {cart.map((el) => (
        
        
        <div
          key={el.id}
          className="border-2 flex  bg-gray-200 text-blue-900 rounded-xl items-center justify-between px-4 py-2"
        >
          <div className="flex flex-col items-start gap-2 p-2 border rounded-lg shadow-sm">
            <img
              src={el.image}
              alt={el.title}
              className="w-[80px] h-[80px] object-cover rounded-md"
            />
            <h2 className="font-semibold text-blue-900">{el.title}</h2>
            <h2 className="text-gray-700">Price: ${el.currentBidPrice}</h2>
          </div>
          <div>
            <button className="p-2 rounded-full text-gray-500 hover:bg-blue-900 hover:text-white transition-all duration-200">
              <RxCrossCircled size={25} />
            </button>
          </div>
        </div>
      ))}
      <hr />
      <div className="flex justify-between">
        <h2 className="font-semibold">Total bid ammount:</h2>
        <h2>${total}</h2>
      </div>
    </div>
  );
};
export default Cart;
