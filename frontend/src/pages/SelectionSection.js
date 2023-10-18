import React from 'react'
import SectionComp from '../components/SectionComp'
import Fashion from "../assests/img47.jpg";
import Home from "../assests/img75.jpg";
import Leather from "../assests/img60.jpg";
import Trims from "../assests/img64.jpg";
import Buttons from "../assests/buttons.png";


function SelectionSection() {
  return (
    <div className=' flex gap-12  items-center justify-center'>
        <SectionComp img  = {Fashion} title  = "FASHION FABRICS " />
        <SectionComp img  = {Home}  title = " HOME FABRICS " />
        <SectionComp img  = {Leather}   title = " LEATHER"/>
        <SectionComp img  = {Trims}  title = "TRIMS"/>
        <SectionComp img  = {Buttons}    title = " BUTTONS" />
    </div>
  )
}

export default SelectionSection