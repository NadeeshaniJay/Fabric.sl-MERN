import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UpdateProduct() {

  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [qty, setQty] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    // Fetch fabric details by ID and populate the state
    const fabricId = {fabricId};
    axios.get(`http://localhost:8081/fabric/update/${fabricId}`)
      .then((response) => {
        const fabric = response.data;
        setName(fabric.name);
        setCode(fabric.code);
        setQty(fabric.qty);
        setCategory(fabric.category);
        setPrice(fabric.price);
        setImageURL(fabric.imageURL);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fabricId = {fabricId};
    try {
      const updatefabric = { name, code, qty, category, price, imageURL };
      await axios.put(`http://localhost:8081/fabric/update/${fabricId}`, updatefabric);
      alert("Product Updated");
    
      // Redirect to the fabric details page or the fabric list page.
      // You can use React Router for navigation.
      window.location = "/fasionfabrics";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-20">
      <h1>UPDATE PRODUCT</h1>

      <form onSubmit={handleSubmit}>
        {/* Update the input fields to allow editing of fabric details */}
        <div className="mb-6">
          <label for="name" className="block mb-2 text-sm font-medium text-gray-900">
            Product name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="productname"
            id="name"
            value={name}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>

        <div className="mb-6">
          <label for="code" className="block mb-2 text-sm font-medium text-gray-900">
            Product code
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="code"
            id="code"
            value={code}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>

        <div className="mb-6">
          <label for="qty" className="block mb-2 text-sm font-medium text-gray-900">
            Product Quantity
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="qty"
            id="qty"
            value={code}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>

        <div className="mb-6">
          <label for="category" className="block mb-2 text-sm font-medium text-gray-900">
            Product Category
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="category"
            id="category"
            value={category}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        {/* Add similar input fields for other fabric details (code, qty, category, price, imageURL) */}
        {/* Make sure to set their values from the state (e.g., value={code}) */}
        <button
          type="submit"
          className="text-white bg-blue-700 hover-bg-blue-800 focus-ring-4 focus-outline-none focus-ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Update Product
        </button>
      </form>
    </div>
  );
}
