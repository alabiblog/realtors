"use client"

import Aos from "aos"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import {Swiper,SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import "swiper/css/navigation"
import {Autoplay,Pagination,Navigation} from "swiper/modules"





export default function Home(){
    return(
      
        <main>

         





            <div className="hidden lg:block lg:flex lg:items-center">
                <div className="w-55  h-60">
                   <div className="w-30 h-80  items-center flex border bg-blue-700">
                       <h1 className="origin-bottom transform rotate-90 justify-center text-white text-1xl">View my listing</h1>
                   </div>
                </div>
                <div  className="w-267  h-180 relative">
                      <Image
                      height={500}
                       width={500}
                       src={"/pr1.avif"}
                       alt="1"
                       className="w-260 h-180"/>
                       <h1 className="absolute top-5 p-20 text-7xl font-bold ">Your Future Home <br/> Is Right Here</h1>
                </div>
            </div>
            <div className=" min-h-screen lg:mx-auto w-130">
                <p className="ml-30 lg:ml-0 text-center mt-20 text-2xl ">Feature Property</p>
                <div className="ml-20 relative w-full h-80  mt-20 lg:ml-13">
                     <Image
                      height={500}
                       width={500}
                       src={"/pr1.avif"}
                       alt="1"
                       className="w-full h-80"/>
                       <Link href={"/compo/property1"}><p className="w-30 text-2xl text-center p-3 text-white bg-blue-950 absolute bottom-0 right-0">Rent +</p></Link>
                 </div>
                 <div className="w-full ml-20 lg:ml-13 mt-8 py-5 border-b ">
                 <p  className="text-sm">Project Name</p>
                 <p  className="text-2xl text-gray-400">Dryzler Building</p>
                </div>
                 <div  className="w-full ml-20 lg:ml-13  mt-8 py-5 border-b ">
                 <p  className="text-sm">Address</p>
                 <p  className="text-2xl text-gray-400">500 Terry Francois Street San Francisco</p>
                </div>
                 <div  className="w-full ml-20 lg:ml-13  mt-8 py-5 border-b flex gap-10">
                    <p>Sqft <br/><span className="text-2xl text-gray-400">450</span></p>
                    <p>Floor <br/><span className="text-2xl text-gray-400">3</span></p>
                    <p>Total Rooms <br/><span className="text-2xl text-gray-400">5</span></p>
                    
                 </div>
                 <div className="w-full ml-20 lg:ml-13  mt-8 py-5 border-b ">
                 <p  className="text-sm">Price</p>
                 <p  className="text-2xl text-gray-400">$2,460</p>
                </div>


                 <div className="ml-20 relative w-full lg:ml-13 h-80  mt-20">
                     <Image
                      height={500}
                       width={500}
                       src={"/wayo.avif"}
                       alt="1"
                       className="w-full h-80"/>
                       <Link href={"/compo/property2"}><p className="w-30 text-2xl text-center p-3 text-white bg-blue-950 absolute bottom-0 right-0">Rent +</p></Link>
                 </div>
                 <div className="w-full ml-20 lg:ml-13  mt-8 py-5 border-b ">
                 <p  className="text-sm">Project Name</p>
                 <p  className="text-2xl text-gray-400">Barnebie Plaza</p>
                </div>
                 <div  className="w-full ml-20 lg:ml-13  mt-8 py-5 border-b ">
                 <p  className="text-sm">Address</p>
                 <p  className="text-2xl text-gray-400">500 Terry Francois Street San Francisco</p>
                </div>
                 <div  className="w-full ml-20 lg:ml-13  mt-8 py-5 border-b flex gap-10">
                    <p>Sqft <br/><span className="text-2xl text-gray-400">600</span></p>
                    <p>Floor <br/><span className="text-2xl text-gray-400">11</span></p>
                    <p>Total Rooms <br/><span className="text-2xl text-gray-400">6</span></p>
                
                 </div>
                 <div className="w-full ml-20 lg:ml-13  mt-8 py-5 border-b ">
                 <p  className="text-sm">Price</p>
                 <p  className="text-2xl text-gray-400">$3,460</p>
                </div>


                <div className="ml-20 relative w-full lg:ml-13  h-80  mt-20">
                     <Image
                      height={500}
                       width={500}
                       src={"/zip.avif"}
                       alt="1"
                       className="w-full h-80"/>
                       <Link href={"/compo/property3"}><p className="w-30 text-2xl text-center p-3 text-white bg-blue-950 absolute bottom-0 right-0">Rent +</p></Link>
                 </div>
                 <div className="w-full ml-20 lg:ml-13  mt-8 py-5 border-b ">
                 <p  className="text-sm">Project Name</p>
                 <p  className="text-2xl text-gray-400">Bankers Building</p>
                </div>
                 <div  className="w-full ml-20 lg:ml-13  mt-8 py-5 border-b ">
                 <p  className="text-sm">Address</p>
                 <p  className="text-2xl text-gray-400">500 Terry Francois Street San Francisco</p>
                </div>
                 <div  className="w-full ml-20 lg:ml-13  mt-8 py-5 border-b flex gap-10">
                    <p>Sqft <br/><span className="text-2xl text-gray-400">780</span></p>
                    <p>Floor <br/><span className="text-2xl text-gray-400">2</span></p>
                    <p>Total Rooms <br/><span className="text-2xl text-gray-400">7</span></p>
                
                 </div>
                 <div className="w-full ml-20 lg:ml-13  mt-8 py-5 border-b ">
                 <p  className="text-sm">Price</p>
                 <p  className="text-2xl text-gray-400">$3,325,500</p>
                </div>


                <div className="ml-20 relative w-full lg:ml-13  h-80  mt-20">
                     <Image
                      height={500}
                       width={500}
                       src={"/mzm.avif"}
                       alt="1"
                       className="w-full h-80"/>
                       <p className="w-30 text-2xl text-center p-3 text-white bg-blue-950 absolute bottom-0 right-0">Rent +</p>
                 </div>
                 <div className="w-full ml-20 lg:ml-13  mt-8 py-5 border-b ">
                 <p  className="text-sm">Project Name</p>
                 <p  className="text-2xl text-gray-400">Dolores Plaza</p>
                </div>
                 <div  className="w-full ml-20 lg:ml-13  mt-8 py-5 border-b ">
                 <p  className="text-sm">Address</p>
                 <p  className="text-2xl text-gray-400">500 Terry Francois Street San Francisco</p>
                </div>
                 <div  className="w-full ml-20 lg:ml-13  mt-8 py-5 border-b flex gap-10">
                    <p>Sqft <br/><span className="text-2xl text-gray-400">670</span></p>
                    <p>Floor <br/><span className="text-2xl text-gray-400">4</span></p>
                    <p>Total Rooms <br/><span className="text-2xl text-gray-400">6</span></p>
                
                 </div>
                 <div className="w-full ml-20 lg:ml-13  mt-8 py-5 border-b ">
                 <p  className="text-sm">Price</p>
                 <p  className="text-2xl text-gray-400">$3,450,000</p>
                </div>
           </div>

                <p className="ml-30  py-15 lg:ml-0 text-center mt-20 text-2xl ">Why Work With Me?</p>
              <div className=" lg:flex xl:flex xl:ml-1 ">
                <div className="border bg-orange-500 h-90 w-160 ml-5 lg:mt-0 lg:ml-0 lg:w-85 xl:w-105 xl:mt-0 xl:ml-0">
                  <div className="w-160 bg-white border h-85 lg:w-85 xl:w-105">
                    <p className="text-6xl font-bold text-center mt-30 text-orange-500">Exclusive</p>
                    <p className="text-2xl text-center mt-5">I'm a paragraph. Click here to add your own text and edit me.</p>
                  </div>
                </div>
                <div className="border  bg-orange-700 h-90 w-160 ml-5 mt-3 lg:mt-0 lg:w-85 lg:ml-0 xl:mt-0 xl:ml-0 xl:w-105">
                  <div className="w-160 bg-white border h-85 lg:w-85 xl:w-105">
                    <p className="text-6xl font-bold text-center mt-30 text-orange-700">Available</p>
                    <p className="text-2xl text-center mt-5">I'm a paragraph. Click here to add your own text and edit me.</p>
                  </div>
                </div>
                <div className="border  bg-blue-700 h-90 w-160 ml-5 mt-3 lg:mt-0 lg:ml-0 lg:w-85 xl:w-105 xl:mt-0 xl:ml-0">
                    <div className="w-160 bg-white border h-85 lg:w-85  xl:w-105">
                        <p className="text-6xl font-bold text-center mt-30 text-blue-700">Flexible</p>
                    <p className="text-2xl text-center mt-5">I'm a paragraph. Click here to add your own text and edit me. </p>
                  </div>
                </div>
              </div>

              <p className="text-sm ml-65 mt-20">What My Clients Say</p>
              <div className=" my-5">
              <Swiper
                 modules={[Autoplay,Pagination,Navigation]}
                autoplay={{display:3000}}
                pagination={{clickable:true}}
                 navigation
                loop={true}
                speed={1}
                className="w-170 h-70  lg:mt-20 ">
                    <SwiperSlide className="w-full h-full">
                     <p className="text-3xl p-20">“Jimoh Sherif is one of the best and reliable real estate company with affordable and satisfacting houses fast and reliable.”</p>
                    </SwiperSlide>    
                    <SwiperSlide className="w-full h-full">
                     <p className="text-3xl p-20">“just 24hrs after i request for an apartment Jimoh Sherif company provide it immediatly without wasting time the are indeed fast and reliable .”</p>
                    </SwiperSlide>
                     <SwiperSlide className="w-full h-full">
                      <p className="text-3xl p-20">“over 10 years of dealing with real estate agent i can say Jimoh Sherif Realtors are the top of there league fast afordable reliable and safty guarentee location.”</p>
                    </SwiperSlide>
                     <SwiperSlide className="w-full h-full">
                      <p className="text-3xl p-20">“i got my dream house from them after 8hrs of apply for it very fast, also i dold my house and it all weny well the are trust worthy and perfect when it comes to realtor activity.”</p>
                    </SwiperSlide>

                 </Swiper>
                 </div>
        </main>
    )
}