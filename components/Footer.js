import { Button, Input, TextField } from "@mui/material";
import { IoChatboxEllipses } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";



export default function Footer(){
    let year = new Date().getFullYear()
    return(
        <main className="w-170 lg:w-full bg-blue-950 relative ">
            <div className=" flex-cols-1 lg:flex lg:flex-row ">
                <div className="ml-1  w-100 lg:ml-5 ">
                     <div className="flex items-center gap-3 p-5">
                     <p className="shadow h-4 w-4 rounded-full bg-orange-200"></p>
                     <span className="text-2xl text-white ">Leave Me A Message</span>
                    </div>
                     <form className="p-5">
                        <div  className="mt-5">
                       <TextField
                       fullWidth
                       type="text"
                       label="Fisrt Name"
                       id="firstName"
                       placeholder="Enter First Name"/>
                      </div>
                       <div className="mt-5">
                        <TextField
                       fullWidth
                       type="text"
                       label="Last Name"
                       id="lastName"
                       placeholder="Enter Last Name"/>
                       </div>
                       <div  className="mt-5">
                        <TextField
                       fullWidth
                       label="Email"
                       id="email"
                       type="text"
                       placeholder="Enter Email"/>
                       </div>
                       <div  className="mt-5">
                        <TextField
                       fullWidth
                       type="tel"
                       id="phone"
                       label="Phone Number"
                       placeholder="+234"/>
                       </div>
                       <div  className="mt-5">
                        <TextField
                       fullWidth
                       label="Message"
                       id="message"
                       rows={5}
                       multiline
                       placeholder=""/>
                       </div>
                       <div className="p-5">
                        <Button fullWidth >Submit</Button>
                        </div>
                     </form>
                </div>
                <div className="ml-1  w-100 lg:ml-5 ">
                    <div className="flex items-center gap-3 p-5">
                     <p className="shadow h-4 w-4 rounded-full bg-orange-400"></p>
                     <span className="text-2xl text-white ">Email / Call Me</span>
                    </div>
                    <div className="p-10">
                        <p className="text-white">Tel: *****************</p>
                        <p className="mt-2 text-white">Email: jimohsherif000@gmail.com</p>
                        <p className="mt-2 text-white">Address: 500 maitama Abuja</p>
                    </div>
                    <div className="flex items-center gap-3 ml-10">
                        <FaFacebookF  className="text-white"/>
                        <FaLinkedinIn className="text-white"/>
                        <FaYoutube className="text-white"/>
                        <FaTwitter className="text-white"/>
                    </div>
                </div>
                <div className="ml-1  w-100 lg:ml-5 ">
                       <div className="mt-5 flex items-center gap-3 p-5 lg:mt-0">
                     <p className="shadow h-4 w-4 rounded-full bg-blue-700"></p>
                     <span className="text-2xl text-white ">Quick Links</span>
                    </div>
                    <div className="p-5">
                        <p className="mt-2 text-white">Home</p>
                        <p className="mt-2 text-white"> Buy</p>
                        <p className="mt-2 text-white">Rent</p>
                        <p className="mt-2 text-white">Sell</p>
                        <p className="mt-2 text-white">About</p>
                        <p className="mt-2 text-white">FAQ</p>
                        <p className="mt-2 text-white">Contact</p>
                    </div>
                </div>
            </div>
          <p className="text-white ml-7 py-5">© {year} by Jimoh Sherif Powered and Authorised </p>
          <IoChatboxEllipses className="fixed border h-15 w-15 p-3 rounded-full bg-blue-700 text-5xl text-white absolute bottom-10 right-5"/>
         </main>
    )
}