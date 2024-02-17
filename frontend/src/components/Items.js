import React from "react";

function Items(props) {
  return (
    <div className="hover:scale-110">
      <div className="w-full max-w-sm bg-white border text-black border-gray-200 rounded-lg shadow ">
        <img className="p-5 rounded-t-lg" src={props.imageURL} alt="product" />

        <div className="px-5 pb-5">
          <h5 className="text-xl font-semibold tracking-tight ">
            {props.name}
          </h5>

          <span className="text-xl font-bold text-gray-900 ">
            In Stock = {props.qty}
          </span>

          <div className="flex items-center justify-between mt-5">
            <span className="text-2xl font-bold text-gray-900 ">
              {props.price}
            </span>

            <a
              onClick={() => props.updateProduct(props.id)}
              href="#"
              className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-3 py-2.5 text-center"
            >
              Update
            </a>
            <a
              onClick={() => props.deleteItem(props.id)}
              href="#"
              className="text-white bg-red-500 hover:bg-red-700 focus:ring-4 font-medium rounded-lg text-sm px-3 py-2.5 text-center"
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
