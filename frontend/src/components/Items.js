import React from "react";

function Items(props) {

  return (
    <div>
      <div class="w-full max-w-sm bg-white border text-black border-gray-200 rounded-lg shadow ">
        <a href="#">
          <img
            class="p-8 rounded-t-lg"
            src={props.imageURL}
            alt="product image"
          />
        </a>
        <div class="px-5 pb-5">
          <a href="#">
            <h5 class="text-xl font-semibold tracking-tight s ">
              {props.name}
            </h5>
          </a>

          <div class="flex items-center justify-between mt-5">
            <span class="text-3xl font-bold text-gray-900 ">
              {props.price}
            </span>
            <a
              onClick={() => props.updateProduct(props.id)}
              href="#"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Update
            </a>
            <a
              onClick={() => props.deleteItem(props.id)}
              href="#"
              class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Delete
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items;
