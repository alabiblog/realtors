"use client"

import Link from "next/link";
import { useState } from "react";
{/* <VscMenu  className="text-3xl ml-2 mt-7 text-blue-700 lg:ml-0 lg:mt-0 lg:text-7xl"/> */}

import { VscMenu } from "react-icons/vsc";

export default function Navbar(){
      const [visible,setVisible]=useState(false)  
    return(
        <main className="w-170 lg:w-full bg-gray-50 h-50 lg:h-30 border-b ">
        <div className="flex justify-between items-center">
        <div className="flex lg:gap-20 lg:items-center lg:p-5 lg:ml-5">
         <button onClick={()=>setVisible(!visible)}>{visible ? "" : <VscMenu className="text-3xl ml-2 mt-7 text-blue-700 lg:ml-0 lg:mt-0 lg:text-7xl"/>}</button>
         <div className="hidden lg:block lg:flex">
         <div className="border-r w-25">
         <p className="text-sm ml-7">I want to</p>
         <div className="flex items-center gap-3">
         <p className="border h-4 w-4 rounded-full bg-red-400"></p>
         <Link href={"/components/buy"}><span className="text-2xl hover:text-red-400">Buy +</span></Link>
         </div>
         </div>
          <div className="border-r w-30 ml-2">
         <p className="text-sm ml-7">I want to</p>
         <div className="flex items-center gap-3">
         <p className="border h-4 w-4 rounded-full bg-blue-700"></p>
         <Link href={"/components/rent"}><span className="text-2xl hover:text-blue-700">Rent +</span></Link>
         </div>
         </div>
          <div className="border-r w-25 ml-2">
         <p className="text-sm ml-7">I want to</p>
         <div className="flex items-center gap-3">
         <p className="border h-4 w-4 rounded-full bg-orange-400"></p>
        <Link href={"/components/sell"}><span className="text-2xl hover:text-orange-400">Sell +</span></Link> 
         </div>
         </div>
         </div>
         </div>
         <p className="text-2xl mt-7 lg:mt-0  lg:mr-15">Jimoh Sherif / Real Estate <br/><span className="text-sm">Tel: 09030501762</span></p>
         </div>
          <div className="flex ml-10 mt-10 lg:hidden">
         <div className="border-r w-25">
         <p className="text-sm ml-7">I want to</p>
         <div className="flex items-center gap-3">
         <p className="border h-4 w-4 rounded-full bg-red-400"></p>
        <Link href={"/components/buy"}><span className="text-2xl">Buy +</span></Link> 
         </div>
         </div>
          <div className="border-r w-30 ml-2">
         <p className="text-sm ml-7">I want to</p>
         <div className="flex items-center gap-3">
         <p className="border h-4 w-4 rounded-full bg-blue-700"></p>
         <Link href={"/components/rent"}><span className="text-2xl">Rent +</span></Link>
         </div>
         </div>
          <div className="border-r w-25 ml-2">
         <p className="text-sm ml-7">I want to</p>
         <div className="flex items-center gap-3">
         <p className="border h-4 w-4 rounded-full bg-orange-400"></p>
         <Link href={"/components/sell"}><span className="text-2xl">Sell +</span></Link>
         </div>
         </div>
         </div>
         <div
         className={`fixed top-0 left-0 z-50 h-full w-full bg-blue-700 duration-1000 ease-in-out ${visible? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex justify-between">
          <button onClick={()=>setVisible(false)} className="font-bold text-3xl ml-4 mt-11 text-white lg:ml-10 lg:mt-5 lg:text-7xl">✕</button>
          <p className="text-4xl  mt-10 mr-5 text-white">Jimoh Sherif / Real Estate</p> 
          </div>
          <div className="flex justify-between mt-40 p-10">
            <div>
                <p className="text-sm text-white">Menu</p>
                <Link href={"/"}><p onClick={()=>setVisible(false)} className="text-2xl text-white mt-15">Home</p></Link>
                <Link href={"/components/buy"}><p onClick={()=>setVisible(false)} className="text-2xl text-white mt-3">Buy</p></Link>
                <Link href={"/components/rent"}><p onClick={()=>setVisible(false)} className="text-2xl text-white mt-3">Rent</p></Link>
                <Link href={"/components/sell"}><p onClick={()=>setVisible(false)} className="text-2xl text-white mt-3">Sell</p></Link>
                <p onClick={()=>setVisible(false)} className="text-2xl text-white mt-3">About</p>
                <p onClick={()=>setVisible(false)} className="text-2xl text-white mt-3">FAQ</p>
                <p onClick={()=>setVisible(false)} className="text-2xl text-white mt-3">Contact</p>
                
            </div>
            <div>
                <p className="text-sm text-white">Social</p>
                <p onClick={()=>setVisible(false)} className="text-2xl text-white mt-15">Facebook</p>
                <p onClick={()=>setVisible(false)} className="text-2xl text-white mt-3">Pintrest</p>
                <p onClick={()=>setVisible(false)} className="text-2xl text-white mt-3">Linkindin</p>
                <p onClick={()=>setVisible(false)} className="text-2xl text-white mt-3">Twitter</p>
              </div>
              <div>
                <p className="text-sm text-white">Contact</p>
                <p onClick={()=>setVisible(false)} className="text-2xl text-white mt-15">info@mysite.com</p>
                <p onClick={()=>setVisible(false)} className="text-2xl text-white mt-3">500 Terry Francine St.</p>
                <p onClick={()=>setVisible(false)} className="text-2xl text-white mt-3">San Francisco,</p>
                <p onClick={()=>setVisible(false)} className="text-2xl text-white mt-3">CA 94158</p>
                <p onClick={()=>setVisible(false)} className="text-2xl text-white mt-3">Tel: 123-323-434</p>
               
            </div>
          </div>
         
         </div>
        </main>
    )
}