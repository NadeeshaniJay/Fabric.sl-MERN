import React from "react";
import axios from "axios";

export default function AddProduct() {
  
  const [name, setName] = React.useState("");
  const [code, setCode] = React.useState("");
  const [qty, setQty] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [imageURL, setImageURL] = React.useState("");

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newProduct = { name, code, qty, category, price, imageURL };
      await axios.post("http://localhost:8081/fabric/add", newProduct);
      alert("Product Added");
      
      window.location = "/addproduct";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-20 mx-80">
      <div className="text-2xl text-violet-500 font-bold">
        <h1>ADD PRODUCT</h1>
      </div>
      <form onSubmit={handleSubmit} >
        <div className="mb-6">
          <label
            for="name"
            className="block mb-2 text-sm font-medium text-gray-900 my-10"
          >
            Poduct Name
          </label>
          <input
          onChange={(e) => setName(e.target.value)}
            type="productname"
            id="name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="code"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Poduct Code
          </label>
          <input
            onChange={(e) => setCode(e.target.value)}
            type="code"
            id="code"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="mb-6">
          <label for="qty" className="block mb-2 text-sm font-medium text-gray-900">
            Quantity
          </label>
          <input
            onChange={(e) => setQty(e.target.value)}
            type="qty"
            id="qty"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="category"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Prodct Category
          </label>
          <input
            onChange={(e) => setCategory(e.target.value)}
            type="category"
            id="category"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="price"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Price
          </label>
          <input

            onChange={(e) => setPrice(e.target.value)}
            type="price"
            id="price"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>

        
        <div class="mb-6">
          <label
            for="imageURL" 
            class="block mb-2 text-sm font-medium text-gray-900"
            >
            Prodct image URL
          </label>
          <input
            onChange={(e) => setImageURL(e.target.value)}
            type="text"
            id="imageURL"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>

        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
