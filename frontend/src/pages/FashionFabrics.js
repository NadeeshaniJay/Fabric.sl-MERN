import React, { useEffect, useState } from "react";
import Items from "../components/Items";
import axios from "axios";

function FashionFabrics() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("http://localhost:8081/fabric");
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
    fetchItems();
  }, []);

  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/fabric/delete/${id}`);
      alert("Item deleted");

      // Refresh window after deleting item
      window.location = "/fashionfabrics";

      // Redirect to the home page (you should use React Router for this)
      // Example: history.push("/")
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleUpdateProduct = async (id) => { // Renamed the function
    try {
      await axios.put(`http://localhost:8081/fabric/update/${id}`);
      alert("Product Updated");

      // Redirect to the fabric details page or the fabric list page.
      // You can use React Router for navigation.
      window.location = "/fashionfabrics";
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="px-20 py-10">
        <h1 className="text-2xl font-bold">Fashion Fabrics</h1>
        <p className="opacity-50">
          Fashion is a form of self-expression and a cultural phenomenon that
          encompasses clothing, accessories, footwear, makeup, hairstyles, and
          even body modifications. It is a dynamic and constantly evolving
          aspect of human culture, reflecting societal influences, historical
          trends, and individual preferences. Here are some key aspects of
          fashion:
        </p>

        <div className="grid grid-cols-4 gap-5 p-20">
          {items.map((item) => (
            <div key={item._id} className="col-md-3">
              <Items
                id={item._id}
                name={item.name}
                code={item.code}
                qty={item.qty}
                category={item.category}
                price={item.price}
                imageURL={item.imageURL}
                deleteItem={deleteItem}
                UpdateProduct={handleUpdateProduct} // Updated the function name
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FashionFabrics;
