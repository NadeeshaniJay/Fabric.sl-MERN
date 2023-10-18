import React from "react";

function Items(props) {
  return (
    <div>
      <div>
        <h1>{props.title}</h1>
      </div>

      <div className=" grid grid-cols-2 md:grid-cols-3 gap-10 ">
        <div class=" w-100 h-100 rounded-lg shadow">
          <a href="#">
            <img class="p-8 rounded-t-lg" src={props.img} alt="product image" />
          </a>
          <div class="px-5 pb-5">
            <a href="#">
              <h5 class="text-sm font-semibold tracking-tight text-gray-900">
                {props.description}
              </h5>
            </a>
            <div class="flex items-center justify-between">
              <span class="text-2xl font-bold text-gray-900">{props.price}</span>
              <a
                href="#"
                class="text-white bg-violet-500 hover:bg-red-500 focus:ring-4 font-sm rounded-lg text-sm px-5 py-2 text-center"
              >
                Buy
              </a>
              <a
                href="#"
                class="text-white bg-gray-500 hover:bg-blue-500 focus:ring-4 font-sm rounded-lg text-sm px-5 py-2 text-center"
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items;
