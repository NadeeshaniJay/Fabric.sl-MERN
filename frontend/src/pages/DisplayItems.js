import React from "react";
import Fashion from "../assests/img47.jpg";
import Home from "../assests/img75.jpg";
import Leather from "../assests/img60.jpg";
import Trims from "../assests/img64.jpg";
import Buttons from "../assests/buttons.png";

function DisplayItems() {
  return (
    <div>
        <div>
            <h1>FASHION FABRICS</h1>
        </div>
        
      <div className=" grid grid-cols-2 md:grid-cols-3 gap-10 ">
        <div class=" w-100 h-100 rounded-lg shadow">
          <a href="#">
            <img class="p-8 rounded-t-lg" src={Buttons} alt="product image" />
          </a>
          <div class="px-5 pb-5">
            <a href="#">
              <h5 class="text-sm font-semibold tracking-tight text-gray-900">
                Double Crepe Cotton Fabric | Double Gauze Soft Fabric | Fabric
                Skirt Sleepwear
              </h5>
            </a>
            <div class="flex items-center justify-between">
              <span class="text-2xl font-bold text-gray-900">
                Rs.690.00
              </span>
              <a
                href="#"
                class="text-white bg-violet-500 hover:bg-red-500 focus:ring-4 font-sm rounded-lg text-sm px-5 py-2 text-center"
              >
                Buy
              </a>
              <a
                href="#"
                class="text-white bg-gray-500 hover:bg-blue-500 focus:ring-4  font-sm rounded-lg text-sm px-5 py-2 text-center"
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>

        <div class=" w-100 h-100 rounded-lg shadow">
          <a href="#">
            <img class="p-8 rounded-t-lg" src={Fashion} alt="product image" />
          </a>
          <div class="px-5 pb-5">
            <a href="#">
              <h5 class="text-sm font-semibold tracking-tight text-gray-900">
                Double Crepe Cotton Fabric | Double Gauze Soft Fabric | Fabric
                Skirt Sleepwear
              </h5>
            </a>
            <div class="flex items-center justify-between">
              <span class="text-2xl font-bold text-gray-900">
                Rs.690.00
              </span>
              <a
                href="#"
                class="text-white bg-red-500 hover:bg-red-700 focus:ring-4  font-sm rounded-lg text-sm px-5 py-2 text-center"
              >
                Buy
              </a>
              <a
                href="#"
                class="text-white bg-red-500 hover:bg-red-700 focus:ring-4  font-sm rounded-lg text-sm px-5 py-2 text-center"
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>

        <div class=" w-100 h-100 rounded-lg shadow ">
          <a href="#">
            <img class="p-8 rounded-t-lg" src={Home} alt="product image" />
          </a>
          <div class="px-5 pb-5">
            <a href="#">
              <h5 class="text-sm font-semibold tracking-tight text-gray-900">
                Double Crepe Cotton Fabric | Double Gauze Soft Fabric | Fabric
                Skirt Sleepwear
              </h5>
            </a>
            <div class="flex items-center justify-between">
              <span class="text-2xl font-bold text-gray-900">
                Rs.690.00
              </span>
              <a
                href="#"
                class="text-white bg-red-500 hover:bg-red-700 focus:ring-4  font-sm rounded-lg text-sm px-5 py-2 text-center"
              >
                Buy
              </a>
              <a
                href="#"
                class="text-white bg-red-500 hover:bg-red-700 focus:ring-4  font-sm rounded-lg text-sm px-5 py-2 text-center"
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>

        <div class=" w-100 h-100 rounded-lg shadow ">
          <a href="#">
            <img class="p-8 rounded-t-lg" src={Leather} alt="product image" />
          </a>
          <div class="px-5 pb-5">
            <a href="#">
              <h5 class="text-sm font-semibold tracking-tight text-gray-900">
                Double Crepe Cotton Fabric | Double Gauze Soft Fabric | Fabric
                Skirt Sleepwear
              </h5>
            </a>
            <div class="flex items-center justify-between">
              <span class="text-2xl font-bold text-gray-900">
                Rs.690.00
              </span>
              <a
                href="#"
                class="text-white bg-red-500 hover:bg-red-700 focus:ring-4  font-sm rounded-lg text-sm px-5 py-2 text-center"
              >
                Buy
              </a>
              <a
                href="#"
                class="text-white bg-red-500 hover:bg-red-700 focus:ring-4  font-sm rounded-lg text-sm px-5 py-2 text-center"
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>

        <div class=" w-100 h-100 rounded-lg shadow ">
          <a href="#">
            <img class="p-8 rounded-t-lg" src={Trims} alt="product image" />
          </a>
          <div class="px-5 pb-5">
            <a href="#">
              <h5 class="text-sm font-semibold tracking-tight text-gray-900">
                Double Crepe Cotton Fabric | Double Gauze Soft Fabric | Fabric
                Skirt Sleepwear
              </h5>
            </a>
            <div class="flex items-center justify-between">
              <span class="text-2xl font-bold text-gray-900">
                Rs.690.00
              </span>
              <a
                href="#"
                class="text-white bg-red-500 hover:bg-red-700 focus:ring-4  font-sm rounded-lg text-sm px-5 py-2 text-center"
              >
                Buy
              </a>
              <a
                href="#"
                class="text-white bg-red-500 hover:bg-red-700 focus:ring-4  font-sm rounded-lg text-sm px-5 py-2 text-center"
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

export default DisplayItems;
