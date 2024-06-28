import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function UpdateProduct(props) {
  const [fabricId, setFabricId] = useState("");
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [qty, setQty] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [imageURL, setImageURL] = useState("");
  const { id } = useParams(); 

  useEffect(() => {
    const fabricId = id;
    console.log(fabricId);
    async function fetchData() {
      await axios
      .get(`http://localhost:8081/fabric/get/${fabricId}`)
      .then((response) => {
        const fabric = response.data;
        console.log(fabric.fabric);
        setFabricId(fabric.fabric._id);
        setName(fabric.fabric.name);
        setCode(fabric.fabric.code);
        setQty(fabric.fabric.qty);
        setCategory(fabric.fabric.category);
        setPrice(fabric.fabric.price);
        setImageURL(fabric.fabric.imageURL);
      })
      .catch((error) => {
        console.log(error);
      });
    }
    fetchData();    
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fabricId = id;

    try {
      const updatefabric = { name, code, qty, category, price, imageURL,fabricId };
      await axios.put(`http://localhost:8081/fabric/update/${fabricId}`,updatefabric);
      alert("Product Updated");

      window.location = "/fashionfabrics";
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-20">
      <h1>UPDATE PRODUCT</h1>

      <form onSubmit={handleSubmit}>
        
        <div className="mb-6">
          <label
            for="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
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
          <label
            for="code"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Product code
          </label>
          <input
            onChange={(e) => setCode(e.target.value)}
            type="code"
            id="code"
            value={code}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>

        <div className="mb-6">
          <label
            for="qty"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Product Quantity
          </label>
          <input
            onChange={(e) => setQty(e.target.value)}
            type="qty"
            id="qty"
            value={qty}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>

        <div className="mb-6">
          <label
            for="category"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Product Category
          </label>
          <input
            onChange={(e) => setCategory(e.target.value)}
            type="category"
            id="category"
            value={category}
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
            value={price}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>

        <div className="mb-6">
          <label
            for="imageURL"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            imageURL
          </label>
          <input
            onChange={(e) => setImageURL(e.target.value)}
            type="imageURL"
            id="imageURL"
            value={imageURL}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>

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
