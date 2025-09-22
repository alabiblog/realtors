import Image from "next/image"

export default function Rent(){
    return(
        <main className="min-h-screen  w-150 mx-10 lg:max-w-3xl lg:mx-auto">
        <h1 className="text-4xl lg:text-7xl font-bold text-center mt-10">Rent Your Next Property</h1>    
        <div className="w-150  mt-15 relative">
        <Image
        width={200}
        height={200}
        src={"/r6.avif"}
        alt="1"
        className="w-150 h-100"/>
        <p className="border w-30 p-3 text-center text-3xl bg-blue-950  text-white absolute bottom-0 right-0">Rent +</p>
        </div> 
        <div className="border-b mt-5">
            <p>Project Name</p>
            <p className="text-2xl my-5">Barnebie Plaza</p>
        </div>
        <div className="border-b mt-5">
            <p>Address</p>
            <p className="text-2xl my-5">500 Terry Francois Street San Francisco</p>
        </div>
        <div className="border-b mt-5 flex gap-15">
         <p>Sqft <br/><span className="text-3xl">600</span></p>
         <p>Floor <br/><span className="text-3xl">11</span></p>
         <p>Total Rooms <br/><span className="text-3xl">6</span></p>
          </div>
           <div className="border-b mt-5">
            <p>Price</p>
            <p className="text-2xl my-5 text-3xl">$3,460</p>
        </div>
        <div className="w-150  mt-25 relative">
        <Image
        width={200}
        height={200}
        src={"/r1.avif"}
        alt="1"
        className="w-150 h-100"/>
        <p className="border w-30 p-3 text-center text-3xl bg-blue-950  text-white absolute bottom-0 right-0">Rent +</p>
        </div> 
        <div className="border-b mt-5">
            <p>Project Name</p>
            <p className="text-2xl my-5">Dolores Plaza</p>
        </div>
        <div className="border-b mt-5">
            <p>Address</p>
            <p className="text-2xl my-5">500 Terry Francois Street San Francisco</p>
        </div>
        <div className="border-b mt-5 flex gap-15">
         <p>Sqft <br/><span className="text-3xl">670</span></p>
         <p>Floor <br/><span className="text-3xl">4</span></p>
         <p>Total Rooms <br/><span className="text-3xl">6</span></p>
          </div>
           <div className="border-b mt-5">
            <p>Price</p>
            <p className="text-2xl my-5 text-3xl">$2,460</p>
        </div>
        <div className="w-150  mt-25 relative">
        <Image
        width={200}
        height={200}
        src={"/r3.avif"}
        alt="1"
        className="w-150 h-100"/>
        <p className="border w-30 p-3 text-center text-3xl bg-blue-950  text-white absolute bottom-0 right-0">Rent +</p>
        </div> 
        <div className="border-b mt-5">
            <p>Project Name</p>
            <p className="text-2xl my-5">Gumbo Building</p>
        </div>
        <div className="border-b mt-5">
            <p>Address</p>
            <p className="text-2xl my-5">500 Terry Francois Street San Francisco</p>
        </div>
        <div className="border-b mt-5 flex gap-15">
         <p>Sqft <br/><span className="text-3xl">590</span></p>
         <p>Floor <br/><span className="text-3xl">6</span></p>
         <p>Total Rooms <br/><span className="text-3xl">6</span></p>
          </div>
           <div className="border-b mt-5">
            <p>Price</p>
            <p className="text-2xl my-5 text-3xl">$3,430</p>
        </div>
        <div className="w-150  mt-25 relative">
        <Image
        width={200}
        height={200}
        src={"/r4.avif"}
        alt="1"
        className="w-150 h-100"/>
        <p className="border w-30 p-3 text-center text-3xl bg-blue-950  text-white absolute bottom-0 right-0">Rent +</p>
        </div> 
        <div className="border-b mt-5">
            <p>Project Name</p>
            <p className="text-2xl my-5">Franbort Plaza</p>
        </div>
        <div className="border-b mt-5">
            <p>Address</p>
            <p className="text-2xl my-5">500 Terry Francois Street San Francisco</p>
        </div>
        <div className="border-b mt-5 flex gap-15">
         <p>Sqft <br/><span className="text-3xl">610</span></p>
         <p>Floor <br/><span className="text-3xl">1</span></p>
         <p>Total Rooms <br/><span className="text-3xl">7</span></p>
          </div>
           <div className="border-b mt-5">
            <p>Price</p>
            <p className="text-2xl my-5 text-3xl">$3,500</p>
        </div>
        <div className="w-150  mt-25 relative">
        <Image
        width={200}
        height={200}
        src={"/r5.avif"}
        alt="1"
        className="w-150 h-100"/>
        <p className="border w-30 p-3 text-center text-3xl bg-blue-950  text-white absolute bottom-0 right-0">Rent +</p>
        </div> 
        <div className="border-b mt-5">
            <p>Project Name</p>
            <p className="text-2xl my-5">Netlife Center</p>
        </div>
        <div className="border-b mt-5">
            <p>Address</p>
            <p className="text-2xl my-5">500 Terry Francois Street San Francisco</p>
        </div>
        <div className="border-b mt-5 flex gap-15">
         <p>Sqft <br/><span className="text-3xl">470</span></p>
         <p>Floor <br/><span className="text-3xl">5</span></p>
         <p>Total Rooms <br/><span className="text-3xl">5</span></p>
          </div>
           <div className="border-b mt-5">
            <p>Price</p>
            <p className="text-2xl my-5 text-3xl">$2,460</p>
        </div>


        
        
        </main>
    )
}