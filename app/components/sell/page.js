"use client"

import { db } from "@/config/firebase/config";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Input, TextField, Typography } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { useFormik, validateYupSchema } from "formik";
import { useState } from "react";
import * as yup from "yup" 





const Schema = yup.object().shape({
  firstName: yup.string().required("First Name Is Required"),
  lastName: yup.string().required("Last Name Is Required"),
  email: yup.string().required("Email Is Required"),
  neighbour: yup.string().required("Neighours Status Is Required"),
  address: yup.string().required("Address Is Required"),
  floor: yup.string().required("Floor Number Is Required"),
  totalBedrooms: yup.string().required("Total Bedrooms Is Required"),
  buildingHistory: yup.string().required("Building History Is Required"),

})

export default function Sell(){
 const[open,setOpen]= useState(false)
    

    const{handleBlur,handleChange,handleSubmit,touched,errors,values}=useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        neighbour: "",
        address: "",
        floor: "",
        totalBedrooms: "",
        buildingHistory: "",
        petAllowed: "",
        noPet: "",
        doorMan: "",
        elevetor: "",
        storage: "",
        washer: "",
        naturalLight: "",
        laudringRoom: "",
        highCeiling: "",
        others: "",
      },
      onSubmit:async(values,{resetForm})=>{
            await addDoc (collection(db, "sell"),{
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email,
              neighbour: values.neighbour,
              address: values.address,
              floor: values.floor,
              totalBedrooms: values.totalBedrooms,
              buildingHistory: values.buildingHistory,
              petAllowed: values.petAllowed,
              noPet: values.noPet,
              doorMan: values.doorMan,
              elevetor: values.elevetor,
              storage: values.storage,
              washer: values.storage,
              naturalLight: values.naturalLight,
              laudringRoom: values.laudringRoom,
              highCeiling: values.highCeiling,
              others: values.others,
              timeStamp: new Date().getTime()

            }).then(()=>{
              setOpen(true)
              resetForm()
            })
            .catch((error)=>{
              console.error
              setOpen(false)
              alert("Unable to submit")
            })
           
            
      },
      validationSchema: Schema
    })
    
    return(
        <main className="min-h-screen  w-150 mx-10 lg:max-w-3xl lg:mx-auto">
         <h1 className="text-3xl font-bold text-center mt-15 lg:text-6xl ">The Fastest & Easiest Way to Sell Your Property</h1>
          <form onSubmit={handleSubmit}
          className="bg-gray-100">
          
          <div className="lg:flex">
          <div className="mt-5 mx-2 lg:w-full">
            <TextField
              fullWidth
              type="text"
              placeholder="Enter Name*"
              label="First name*"
              id="firstName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
          />
          {touched.firstName && errors.firstName ? <span className="text-sm text-red-500">{errors.firstName}</span> : null}
          </div>
          <div  className="mt-5 mx-2 lg:w-full">
            <TextField
              fullWidth
              type="text"
              placeholder="Enter Last name*"
              label="Last name*"
              id="lastName"
               onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
          />
          {touched.lastName && errors.lastName ? <span className="text-sm text-red-500">{errors.lastName}</span> : null}
          </div>
          </div>
          <div className="lg:flex">
           <div  className="mt-5 mx-2 lg:w-full">
            <TextField
              fullWidth
              type="text"
              placeholder="@gmail.com"
              label="Email*"
              id="email"
               onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
          />
         {touched.email && errors.email ? <span className="text-sm text-red-500">{errors.email}</span> : null}
          </div>
          <div  className="mt-5 mx-2 lg:w-full">
            <TextField
              fullWidth
              type="number"
              placeholder=""
              label="Neighborhood"
              id="neighbour"
               onChange={handleChange}
              onBlur={handleBlur}
              value={values.neighbour}
          />
          {touched.neighbour && errors.neighbour ? <span className="text-sm text-red-500">{errors.neighbour}</span> : null}
          </div>
          </div>
          <div  className="mt-5 mx-2">
            <TextField
              fullWidth
              type="text"
              placeholder="Enter Full address"
              label="Full address"
              id="address"
               onChange={handleChange}
              onBlur={handleBlur}
              value={values.address}
          />
          {touched.address && errors.address ? <span className="text-sm text-red-500">{errors.address}</span> : null}
          </div>
          <div  className="mt-5 mx-2">
            <TextField
              fullWidth
              type="number"
              placeholder="Enter Floor Number"
              label="Floor"
              id="floor"
               onChange={handleChange}
              onBlur={handleBlur}
              value={values.floor}
          />
          {touched.floor && errors.floor ? <span className="text-sm text-red-500">{errors.floor}</span> : null}
          </div>
          <div  className="mt-5 mx-2">
            <TextField
              fullWidth
              type="number"
              placeholder="Total Bedrooms"
              label="Total Bedrooms"
              id="totalBedrooms"
               onChange={handleChange}
              onBlur={handleBlur}
              value={values.totalBedrooms}
          />
          {touched.totalBedrooms && errors.totalBedrooms ? <span className="text-sm text-red-500">{errors.totalBedrooms}</span> : null}

          </div>
          <div  className="mt-5 mx-2">
            <TextField
              fullWidth
              type="text"
              rows={10}
              multiline
              placeholder=""
              label="Building History"
              id="buildingHistory"
               onChange={handleChange}
              onBlur={handleBlur}
              value={values.buildingHistory}
          />
          {touched.buildingHistory && errors.buildingHistory ? <span className="text-sm text-red-500">{errors.buildingHistory}</span> : null}
          
          </div>
          <p className="ml-2 text-1xl mt-10">Pet Policy</p>
           <div className="flex gap-70 ml-2">
          <div className="flex items-center gap-2">
            <input type="checkbox" id="petAllowed"  onChange={handleChange} onBlur={handleBlur}  value={values.petAllowed}></input>
            <p>Pets Allowed</p>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="noPet" onChange={handleChange} onBlur={handleBlur} value={values.noPet}></input>
            <p>No Pets</p>
          </div>
          </div>
          <p className="ml-2 text-1xl mt-10">Amenities</p>
        <div className="ml-2 mt-2">
            <div className="flex items-center gap-2">
            <input type="checkbox" id="doorMan" onChange={handleChange} onBlur={handleBlur} value={values.doorMan}></input>
            <p>Door Man</p>
            </div>
            <div className="flex items-center gap-2">
            <input type="checkbox" id="elevetor" onChange={handleChange} onBlur={handleBlur} value={values.elevetor}></input>
            <p>Elevetor</p>
            </div>
            <div className="flex items-center gap-2">
            <input type="checkbox" id="storage" onChange={handleChange} onBlur={handleBlur} value={values.storage}></input>
            <p>Storage</p>
            </div>
            <div className="flex items-center gap-2">
            <input type="checkbox" id="washer" onChange={handleChange} onBlur={handleBlur} value={values.washer}></input>
            <p>Washer/Dryer</p>
            </div>
            <div className="flex items-center gap-2">
            <input type="checkbox" id="naturalLight" onChange={handleChange} onBlur={handleBlur} value={values.naturalLight}></input>
            <p>Natural Light</p>
            </div>
            <div className="flex items-center gap-2">
            <input type="checkbox" id="laudringRoom" onChange={handleChange} onBlur={handleBlur} value={values.laudringRoom}></input>
            <p>Laundring Room</p>
            </div>
            <div className="flex items-center gap-2">
            <input type="checkbox" id="highCeiling" onChange={handleChange} onBlur={handleBlur} value={values.highCeiling}></input>
            <p>High Room</p>
            </div>
            <div className="flex items-center gap-2">
            <input type="checkbox" id="others" onChange={handleChange} onBlur={handleBlur} value={values.others}></input>
            <p>Others</p>
            </div>
         </div>
         <div >
          <button type="submit" className="border mt-10 p-2 py-2 text-2xl bg-blue-700 text-white">Submit</button>
       </div>
       
       </form>

       <Dialog open={open} onClick={()=>setOpen(false)} >
                <DialogTitle>Successfully</DialogTitle>
                <DialogContent>
                    <Typography>House Detail Submitted Successfully</Typography>
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