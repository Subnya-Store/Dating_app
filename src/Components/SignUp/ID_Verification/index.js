import React, { useState } from 'react'
import Link from 'next/link'
import API from '@/API/API'

export default function index({ setState, inputs, setInputs }) {
  const [image, setImage] = useState('/Images/input_image.png')
  const [file_image, setfile_image] = useState('')
  const sign_up_img = '/Images/SignIn_logo.png'
  const id_varification = '/Images/id_varification.png'
  console.log(file_image, 'checkin')
  const handleImageChange = (e) => {
    // Access the uploaded file
    const uploadedFile = e.target.files[0];

    // You may want to perform some validation on the uploaded file here
    setfile_image(uploadedFile)
    setInputs({ ...inputs, ID_card: uploadedFile.name })

    // Set the image in the state
    if (uploadedFile) {
      const imageURL = URL.createObjectURL(uploadedFile);
      // console.log(imageURL,uploadedFile)
      setImage(imageURL);
    }
  };
  const ID_Verify = (e) => {
    // setState("questions")

    const formData = new FormData();
    formData.append('images', file_image);
    formData.append('age', inputs.age);
    formData.append('legal_id', inputs.LegalID);
    formData.append('username', inputs.username);
    formData.append('full_name', inputs.full_name);

    API.fetchPost(
      formData
      ,
      '/verify_id'
    )
      .then(x => {
        if (x.data.msg == 'Id verification request!') {
          setState("questions")
        }
      })
      .catch(x => {
        console.log(x)
      })
  }
  return (
    <div>
      <div className=" md:w-fit  bg-white p-8  my-12  mx-16 rounded-2xl shadow-lg -z-10 opacity-90">
        {/* <div className=" flex">
          <div className="flex justify-between w-80">

            <img className="flex" src={sign_up_img} />

            <div className=' w-32'>
              <Link href='signin' className="  text-[#7000ED]">
                Already have a account? <br />Sign In. </Link>
            </div>
          </div>
        </div> */}
        <div className=" text-4xl font-bold py-4 capitalize">
          <div className=' justify-between flex'>
            ID Verification
          </div>
        </div>

        <div className=" flex">
          <div className="flex gap-4 ">
            <div className='flex flex-col'>
              <label> ID Card</label>
              <input
                className=" rounded-xl p-2 w-32  bg-[#FFF] mt-3  border border-[#7000ED]  outline-none "
                type="image"
                // id="myfile"
                src={image}
                // onChange={handleImageChange}
                placeholder=""
              />
              <label htmlFor="myfile" className=" rounded-xl p-2 w-32  bg-[#FFF] mt-3 flex justify-center border border-[#7000ED]  outline-none ">
                upload
              </label >
              <input
                className="hidden"
                type="file"
                id="myfile"
                src="/Images/input_image.png"
                onChange={handleImageChange}
                placeholder=""
              />
            </div>
            <div>
              <label> Age</label>
              <input
                className=" rounded-xl p-2 w-34  bg-[#FFF] mt-3 flex border border-[#7000ED]  outline-none"
                type="number"
                placeholder=""
                onChange={e => setInputs({ ...inputs, age: e.target.value })}
              />
              <div className=' pt-6 pl-2'>
                <img className="flex" src={id_varification} />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-1 pb-1 font-medium ">
          <label> Legal ID</label>
          <input
            className=" rounded-xl p-2  bg-[#FFF] mt-3 flex border border-[#7000ED]  outline-none  w-72"
            type="number"
            placeholder=""
            onChange={e => setInputs({ ...inputs, LegalID: e.target.value })}
          />
        </div>
        <div className="pt-1 pb-1">
          <button onClick={ID_Verify} className="bg-[#7000ED] font-medium flex rounded-xl text-white px-6 py-2">
            Next
          </button>
        </div>
      </div>
    </div>
  )
}