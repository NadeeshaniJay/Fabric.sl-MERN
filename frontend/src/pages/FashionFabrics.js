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

      window.location = "/fashionfabrics";

    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleUpdateProduct = async (id) => {

    try {
      await axios.put(`http://localhost:8081/fabric/update/${id}`);
      alert("Product Updated");
      window.location = "/fashionfabrics";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="">
        <h1 className="text-2xl font-bold px-20 py-5">Fashion Fabrics</h1>
        <p className="opacity-50 px-20">
          Fashion fabrics are an essential component of the fashion industry,
          and they play a crucial role in determining the aesthetics, comfort,
          and functionality of clothing and accessories. These fabrics are the
          materials from which garments, accessories, and textiles are crafted.
          They come in a wide range of styles, textures, patterns, and
          compositions to suit various fashion trends, seasons, and purposes.
        </p>

        <div className="grid grid-cols-4 gap-10 p-20">
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
                UpdateProduct={handleUpdateProduct}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FashionFabrics;
