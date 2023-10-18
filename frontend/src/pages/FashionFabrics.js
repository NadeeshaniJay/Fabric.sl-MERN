import React from "react";
import Items from "../components/Items";
import Fashion from "../assests/img47.jpg";
import Home from "../assests/img75.jpg";
import Leather from "../assests/img60.jpg";
import Trims from "../assests/img64.jpg";
import Buttons from "../assests/buttons.png";

export default function FashionFabrics() {
  return (
    <div>
      <div>
        <Items
          title="Fashion Fabric"
          img={Fashion}
          price="400.00"
          descrption="Sorbet Crinkle Gauze 5 colors Triple Layers 100% Cotton Gauze by the yard Super Soft Muslin"
        />
        <Items
          title="Fashion Fabric"
          img={Home}
          price="400.00"
          descrption="Cotton Fabric No Repeat Design Yellower Series Patchwork Fabric 50cm*50cm A1 6 2|fat quarter bundle"
        />
        <Items
          title="Fashion Fabric"
          img={Leather}
          price="400.00"
          descrption=""
        />
        <Items
          title="Fashion Fabric"
          img={Trims}
          price="400.00"
          descrption=""
        />
        <Items
          title="Fashion Fabric"
          img={Buttons}
          price="400.00"
          descrption=""
        />
        <Items
          title="Fashion Fabric"
          img={Fashion}
          price="400.00"
          descrption=""
        />
      </div>
    </div>
  );
}
