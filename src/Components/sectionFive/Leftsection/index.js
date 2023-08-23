import React from "react";

export default function index() {
  const phone_img = "Images/Phone_img.png";
  const mail_img = " Images/mail_img.png";
  return (
    <div className="bg-[#FD166F] ">
      <div className="text-white  py-16 px-24">
        <div className=" w-32 border-b-4 border-white">
          <h3 className="  text-2xl pt-5 pb-3"> Contact us</h3>
        </div>
        <div>
          <p className="text-xl font-medium pt-3 pb-3">
            Lorem ipsum dolor sit amet consectetur. Facilisis congue tincidunt
            iaculis mollis.
          </p>
        </div>
        <div>
          <h1 className=" text-5xl uppercase  font-medium pt-3 pb-3"> Get in Touch</h1>
        </div>
        <div className="inline-flex gap-4">
          <img src={phone_img} className=" object-contain" />
          <p className="p-2 text-white text-lg"> 123456789</p>
        </div>
        <br />
        <div className="inline-flex gap-4 pb-3 mb-3">
          <img src={mail_img} className=" object-contain" />
          <p className="p-2 text-white text-lg"> Youremail@company.com</p>
        </div>
        <form className="">
        <input
            className="rounded-full bg-[#FFFFFFA1] text-black py-2 mb-4  px-4 flex placeholder:text-black outline-none  w-80"
            type="text"
            placeholder="Your Message" 
          />
             <div className="inline-flex gap-5">
          <input
            className="rounded-full  text-black bg-[#FFFFFFA1]  px-4 flex placeholder:text-black outline-none  w-80"
            type="text"
            placeholder="Your Message" 
          />
          <button className="bg-[#A629F6] cursor-pointer flex rounded-full capitalize font-medium text-white px-6  py-2">
            Send
          </button>
        </div>
        </form>
     
      </div>
    </div>
  );
}
