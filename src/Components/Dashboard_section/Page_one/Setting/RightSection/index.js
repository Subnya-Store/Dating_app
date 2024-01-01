import React, { useState, useEffect } from "react";
import Image from "next/image";
import API from "@/API/API";
import apiUrl from "@/API/constant";

export default function index() {
  const [Inputs, setInputs] = useState({
    full_name: '',
    username: '',
    phone: '',
    email: '',
    images: ''
  })
  const [images, setImages] = useState('')
  useEffect(() => {
    API.fetchGet('/get_setting')
      .then(x => {
        setInputs({
          full_name: x.data.full_name,
          username: x.data.username,
          phone: x.data.phone,
          email: x.data.email,
          images: x.data.img
        });
        console.log(x)
      })
      .catch(x => console.log(x))
  }, [])

  const handleImageChange = (e) => {
    // Access the uploaded file
    const uploadedFile = e.target.files[0];

    setInputs({ ...Inputs, images: uploadedFile })
    if (uploadedFile) {
      const imageURL = URL.createObjectURL(uploadedFile);
      setImages(imageURL)

      console.log(imageURL)
    }

  };

  const SubmitData = e => {
    e.preventDefault()
    
    const formData = new FormData();
    formData.append('images', Inputs.images);
    formData.append('full_name', Inputs.full_name);
    formData.append('username', Inputs.username);
    formData.append('email', Inputs.email);
    formData.append('phone', Inputs.phone);

    API.fetchPost(formData, '/setting')
      // API.fetchPost(Inputs,'/setting')
      .then(x => console.log(x))
      .catch(x => console.log(x))
  }
  console.log(Inputs, 'thiss')
  return (

    <div className="bg-[#FFF] p-10  md:w-[90%] h-[60%] overflow-y-scroll rounded-3xl  shadow-2xl">
      <h4 className="text-black  py-3 md:text-3xl capitalize font-bold text-xl">
        Account
      </h4>
      <hr />
      <div className=" my-2">
        <h6 className="text-black md:text-base text-sm  font-semibold capitalize">
          Avatar
        </h6>
        <div className=" my-4">
          <ul className=" md:flex justify-evenly w-[55%] items-center">
            <li>
              {images ?
                <Image
                  src={images}
                  width={80}
                  height={80}
                  className=" rounded-full mr-2 object-contain"
                  alt="Picture of the author"
                />
                : <Image
                  src={Inputs.images}
                  width={80}
                  height={80}
                  className=" rounded-full mr-2 object-contain"
                  alt="Picture of the author"
                />}
            </li>
            <li>
              <div className="flex justify-center items-center flex-col">

                <div className="w-[144.78px] h-[37.54px] text-center flex justify-center items-center my-2 bg-pinkColor rounded-[8.94px] border border-violet-700">
                  <label htmlFor="myfile" className=" text-whiteColor text-base  font-medium capitalize m-auto">
                    Upload
                  </label>
                  <input type="file" id="myfile" className="hidden" onChange={handleImageChange} />
                </div>
              </div>
            </li>

          </ul>
        </div>
        <hr />
      </div>
      <div className=" my-4">
        <form>
          <div className=" grid  grid-cols-2  gap-4">

            <div>
              <label className="block text-black pb-2  md:text-base text-sm font-semibold capitalize">
                Full name
              </label>
              <input
                type="text"
                onChange={e => setInputs({ ...Inputs, full_name: e.target.value })}
                placeholder={Inputs.full_name}
                className="bg-whiteColor text-blackColor placeholder:text-pinkColor w-[100%] outline-none rounded-md  py-2 px-3 border border-[#05006]"
              />
            </div>
            <div>
              <label className="block text-blackColor text-black pb-2  md:text-base text-sm font-semibold capitalize">
                User name
              </label>
              <input
                type="text"
                onChange={e => setInputs({ ...Inputs, username: e.target.value })}
                placeholder={Inputs.username}
                className="bg-whiteColor  text-blackColor placeholder:text-pinkColor w-[100%] outline-none rounded-md  py-2 px-3 border border-[#05006]"
              />
            </div>
          </div>
          <span className=" block my-5">
            {" "}
            <hr />
          </span>

          <div className=" grid  grid-cols-2  gap-4">
            <div>
              <label className="block text-black pb-2 text-lg font-semibold capitalize  md:text-base ">
                Email Address
              </label>
              <input
                type="email"
                onChange={e => setInputs({ ...Inputs, email: e.target.value })}
                placeholder={Inputs.email}
                className="bg-whiteColor  text-blackColor placeholder:text-pinkColor w-[100%] outline-none rounded-md  py-2 px-3 border border-[#05006]"
              />
            </div>
            <div>
              <label className="block  text-blackColor text-black pb-2 text-lg font-semibold capitalize  md:text-base ">
                Phone Number
              </label>
              <input
                type="number"
                onChange={e => setInputs({ ...Inputs, phone: e.target.value })}
                placeholder={Inputs.phone}
                className="bg-whiteColor  text-blackColor placeholder:text-pinkColor w-[100%] outline-none rounded-md  py-2 px-3 border border-[#05006]"
              />
            </div>
            <button onClick={SubmitData} className="bg-whiteColor  p-2 rounded-xl text-blackColor">
              Update now!
            </button>
          </div>
         
        </form>
      </div>
    </div>
  );
}
