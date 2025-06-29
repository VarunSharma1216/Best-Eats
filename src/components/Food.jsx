import React from "react";
import { data } from "../data/data";

const Food = () => {
  console.log(data);
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>

      {/*Filter Row*/}
      <div>
        {/*Filter type*/}
        <div>
          <p>Filter Type</p>
          <div>
            <button>All</button>
            <button>Pizza</button>
            <button>Burger</button>
            <button>Salad</button>
            <button>Chicken</button>
          </div>
        </div>
        {/*Filter price*/}
        <div>
          <p>Filter Price</p>
          <div>
            <button>$</button>
            <button>$$</button>
            <button>$$$</button>
            <button>$$$$</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
