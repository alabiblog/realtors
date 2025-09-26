"use client"

import Image from "next/image";
import { PiLessThanOrEqualLight } from "react-icons/pi";
import { PiGreaterThanOrEqualThin } from "react-icons/pi";
import { MdOutlineDoorSliding } from "react-icons/md";
import { GiSecurityGate } from "react-icons/gi";
import { PiElevator } from "react-icons/pi";
import { GiWashingMachine } from "react-icons/gi";
import { FaDog } from "react-icons/fa6";
import {  TextField } from "@mui/material";
import { useState } from "react";
import {Swiper,SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import "swiper/css/navigation"
import {Autoplay,Pagination,Navigation} from "swiper/modules"
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { useFormik, validateYupSchema } from "formik";
// import { useState } from "react";
import * as yup from "yup"
import { db } from "@/config/firebase/config";



const Schema = yup.object().shape({
  firstName: yup.string().required("First Name Is Required"),
  lastName: yup.string().required("Last Name Is Required"),
  email: yup.string().required("Email Is Required"),
  phone: yup.string().required("Phone Number Is Required"),
 })

export default function Property1(){
   const[visible,setVisible]=useState(false)
   const[open,setOpen]= useState(false)
    const{handleBlur,handleChange,handleSubmit,touched,errors,values}=useFormik({
       initialValues: {
         firstName: "",
         lastName: "",
         email: "",
         phone: "",
       },
       onSubmit:async(values,{resetForm})=>{
             await addDoc (collection(db, "intrested in property"),{
               firstName: values.firstName,
               lastName: values.lastName,
               email: values.email,
               phone: values.phone,
               timeStamp: new Date().getTime()
 
             }).then(()=>{
               setOpen(true)
               resetForm()
             })
             .catch((error)=>{
               console.error
               setOpen(false)
              })
            
       },
              
       validationSchema: Schema
     })
     

    return(
        <main className="lg:max-w-3xl lg:mx-auto">
            <div className="border-b w-165 ml-2 p-5 flex gap-120 lg:ml-10 lg:w-180">
                <div className="flex items-center gap-1">
                <PiLessThanOrEqualLight />
                <p className="font-semibold lg:text-3xl"><span></span> Previous</p>
                 </div>
                 <div className="flex items-center gap-1">
                <p className="font-semibold lg:text-3xl"><span></span> Next</p>
                <PiGreaterThanOrEqualThin />
                 </div>
            </div>
            <h1 className="mt-10 text-3xl font-bold text-center">Dryzler Building</h1>
            <p className="text-center itelic">500 Terry Francois Street San Francisco</p>
            <div  className="w-120 ml-20 lg:ml-13  mt-8 py-5 border-b flex gap-10 lg:ml-20 lg:w-140">
                    <p>Price <br/><span className="text-2xl text-gray-400">$2,460</span></p>
                    <p>Neighborhood <br/><span className="text-2xl text-gray-400">Mission Bay</span></p>
                    <p>Sqft <br/><span className="text-2xl text-gray-400">450</span></p>
                    <p>Floor <br/><span className="text-2xl text-gray-400">3</span></p>
                    <p>Total Rooms <br/><span className="text-2xl text-gray-400">5</span></p>
                    
                 </div>
                 <div className="ml-10 relative w-150 h-80  mt-20 lg:ml-13">
                     <Image
                      height={900}
                       width={900}
                       src={"/pr1.avif"}
                       alt="1"
                       className="w-150 h-80"/>
                 </div>
                 <p className="text-sm ml-10 mt-20">About</p>
                 <p className="p-10">This item is connected to a text field in your content collection. Double <br/> click what you want to edit and then select "Change Content" to add your <br/> own content to the collection. Want to view and manage all your <br/> collections? Click the Content Manager icon on the add panel to your left. <br/> In the Content Manager, you can update items, add new fields, create <br/> dynamic pages and more.</p>
               <div className="flex gap-5 ml-10">
                <div>
                <GiSecurityGate className="ml-3 text-5xl"/>
                <p className="text-sm mt-5">Door Man</p>
                </div>
                <div>
                <MdOutlineDoorSliding className=" text-5xl"/>
                <p  className="text-sm mt-5">Storage</p>
                </div>
                <div>
                <PiElevator className="text-5xl"/>
                <p  className="text-sm mt-5">Elevator</p>
                </div>
                <div>
                <GiWashingMachine className="ml-3 text-5xl"/>
                <p  className="text-sm mt-5">Washer/Dryer</p>
                </div>
                <div>
                <FaDog className=" text-5xl"/>
                <p  className="text-sm mt-5">No Pet</p>
                </div>
               </div>
               <div className=" mt-20 grid grid-cols-2 gap-10 ml-10">
                <div onClick={()=>setVisible(!visible)} className="ml-10 relative w-60 h-80  lg:w-80 lg:ml-0">
                     {visible? "" :<Image
                      height={900}
                       width={900}
                       src={"/sc1.png"}
                       alt="1"
                       className="w-60 h-80 lg:w-80"/>}
                 </div>
                 <div onClick={()=>setVisible(!visible)} className="ml-30 relative w-60 h-80 lg:ml-10 lg:w-80">
                     {visible? "" :<Image
                      height={900}
                       width={900}
                       src={"/sc2.png"}
                       alt="1"
                       className="w-60 h-80 lg:w-80"/>}
                 </div>
                 <div onClick={()=>setVisible(!visible)} className="ml-10 relative w-60 h-80 lg:w-80 lg:ml-0">
                      {visible? "" :<Image
                      height={900}
                       width={900}
                       src={"/sc3.png"}
                       alt="1"
                       className="w-60 h-80 lg:w-80"/>}
                 </div>
                 <div onClick={()=>setVisible(!visible)} className="ml-30 relative w-60 h-80 lg:ml-10 lg:w-80">
                    {visible? "" :<Image
                      height={900}
                       width={900}
                       src={"/sc4.png"}
                       alt="1"
                       className="w-60 h-80 lg:w-80"/>}
                 </div>
               </div>
                <p className="text-sm ml-10 mt-20">Building Info</p>
                 <p className="p-10">This item is connected to a text field in your content collection.<br/> Double click what you want to edit and then select "Change Content"<br/> to add your own content to the collection. Want to view and manage <br/> all your collections? Click the Content Manager icon on the add panel <br/> to your left. In the Content Manager, you can update items, add new <br/> fields, create dynamic pages and more.</p>
                <div className="mx-2 w-170 bg-gray-100 lg:w-180">
                  <h1 className="text-4xl font-bold p-10 text-black">Interested in <br/> this <br/> property?</h1>
                  <form
                  onSubmit={handleSubmit} className="ml-1 lg:ml-5">
                    <div className="flex gap-3 ml-3">
                    <div className="w-80">
                        <TextField
                        fullWidth
                        id="firstName"
                        type="text"
                        label="First Name*"
                        placeholder="Enter First Name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}/>
                     {touched.firstName && errors.firstName ? <span className="text-sm text-red-500">{errors.firstName}</span> : null}
                    </div>
                    <div className="w-80">
                        <TextField
                        fullWidth
                        id="lastName"
                        type="text"
                        label="Last Name*"
                        placeholder="Enter last Name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}/>
                     {touched.lastName && errors.lastName ? <span className="text-sm text-red-500">{errors.lastName}</span> : null}

                    </div>
                    </div>
                    <div className="w-165 ml-2 mt-5" >
                        <TextField
                        fullWidth
                        id="email"
                        type="text"
                        label="Email*"
                        placeholder="Enter Email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}/>
                     {touched.email && errors.email ? <span className="text-sm text-red-500">{errors.email}</span> : null}

                    </div>
                    <div className="w-165 ml-2 mt-5" >
                        <TextField
                        fullWidth
                        id="phone"
                        type="tel"
                        label="Phone Number*"
                        placeholder="Enter Phone"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone}/>
                     {touched.phone && errors.phone ? <span className="text-sm text-red-500">{errors.phone}</span> : null}

                    </div>
                    <div className="ml-2 my-3">
                    <button type="submit" className="mt-10 text-2xl w-30 p-2 bg-blue-700 text-white">Submit</button>
                     </div>
                  </form>
                  </div>
                  <div className="">
                     <div className=" w-165 ml-2 p-5 flex gap-120 lg:ml-10">
                <div className="flex items-center gap-1">
                <PiLessThanOrEqualLight />
                <p className="font-semibold lg:text-3xl"><span></span> Previous</p>
                 </div>
                 <div className="flex items-center gap-1">
                <p className="font-semibold lg:text-3xl"><span></span> Next</p>
                <PiGreaterThanOrEqualThin />
                 </div>
            </div>
                  </div>
                <div
                className={` fixed top-0 right-0 z-50 h-full w-full bg-gray-100 duration-1000 ease-in-out ${visible? "translate-x-0" : "translate-x-full"}`}>
                 <button onClick={()=>setVisible(false)} className="text-3xl text-black absolute right-5 font-bold top-5 ">✕</button>
                 <Swiper
                 modules={[Autoplay,Pagination,Navigation]}
                autoplay={{display:3000}}
                pagination={{clickable:true}}
                 navigation
                loop={true}
                speed={1}
                className="w-150 h-150 p-10  mt-40 lg:mt-20">
                    <SwiperSlide className="w-full h-full">
                      <Image
                      fill
                      src={"/scc1.png"}
                      alt="1"/>
                    </SwiperSlide>
                    <SwiperSlide className="w-full h-full">
                      <Image
                      fill
                      src={"/scc2.png"}
                      alt="1"/>
                    </SwiperSlide>
                     <SwiperSlide className="w-full h-full">
                      <Image
                      fill
                      src={"/scc3.png"}
                      alt="1"/>
                    </SwiperSlide>
                     <SwiperSlide className="w-full h-full">
                      <Image
                      fill
                      src={"/scc4.png"}
                      alt="1"/>
                    </SwiperSlide>

                 </Swiper>
                </div>
                 <Dialog open={open} onClick={()=>setOpen(false)}>
                <DialogTitle>Successfully</DialogTitle>
                <DialogContent>
                    <Typography>Interest Submit Successfully</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>setOpen(false)} color="primary" variant="contained" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </main>
    )
}