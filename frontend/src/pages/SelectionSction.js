import React from 'react'
import SectionComp from '../components/SectionComp'
import Cart from "../assests/cart.png";

function SelectionSction() {
  return (
    <div className=' flex gap-5  items-center justify-center'>

        <SectionComp img  = {Cart} title  = "FASHION FABRICS " />
        <SectionComp img  = {Cart}  title = " HOME FABRICS " />
        <SectionComp img  = {Cart }   title = " LEATHER"/>
        <SectionComp img  = {Cart}  title = "TRIMS"/>
        <SectionComp img  = {Cart}    title = " BUTTONS" />
    </div>
  )
}

export default SelectionSction