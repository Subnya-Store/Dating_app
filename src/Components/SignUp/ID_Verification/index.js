import React, { useState } from 'react'
import Link from 'next/link'
import API from '@/API/API'

export default function index({ setState, inputs, setInputs }) {
  const [image, setImage] = useState('/Images/input_image.png')
  const [file_image, setfile_image] = useState('')
  const sign_up_img = '/Images/SignIn_logo.png'
  const id_varification = '/Images/id_varification.png'

  const handleImageChange = (e) => {
    e.preventDefault()
    // Access the uploaded file
    const uploadedFile = e.target.files[0];

    // You may want to perform some validation on the uploaded file here
    setfile_image(uploadedFile)
    setInputs({ ...inputs, ID_card: uploadedFile.name })

    // Set the image in the state
    if (uploadedFile) {
      const imageURL = URL.createObjectURL(uploadedFile);

      setImage(imageURL);
    }
  };
  const ID_Verify = (e) => {
    // setState("questions")
    e.preventDefault()
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
      <div className=" md:w-fit  bg-whiteColor p-8  my-12  mx-16 rounded-2xl shadow-lg -z-10 opacity-90">
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
          <p className=' justify-between flex'>
            ID Verification
          </p>
        </div>
        <form onSubmit={(e) => {
          e.preventDefault()
          ID_Verify(e)
        }}>
          <div className="flex gap-4 ">
            <div className='flex flex-col'>
              <p> ID Card</p>
              <input

                className=" rounded-xl p-2 w-32  bg-[#FFF] mt-3  border border-[#7000ED]  outline-none "
                type="image"
                // id="myfile"
                src={image}
                // onChange={handleImageChange}
                placeholder=""
              />
              <p htmlFor="myfile" className="z-40 rounded-xl p-2 w-32  bg-[#FFF] mt-3 flex justify-center border border-[#7000ED]  outline-none ">
                upload
              </p >
              <input
                required
                className="-mt-10 mb-2 w-1 ml-10 bg-red-300 z-10"
                type="file"
                id="myfile"
                src="/Images/input_image.png"
                onChange={handleImageChange}
                placeholder=""
              />
            </div>
            <div>
              <p> Age</p>
              <input
                required
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


          {/* <div className="pt-1 pb-1 font-medium ">
            <p> Legal ID</p>
            <input
              required
              className=" rounded-xl p-2  bg-[#FFF] mt-3 flex border border-[#7000ED]  outline-none  w-72"
              type="number"
              placeholder=""
              onChange={e => setInputs({ ...inputs, LegalID: e.target.value })}
            />
          </div> */}
          <div className="pt-1 pb-1">
            <button type='submit' className="bg-[#7000ED] font-medium flex rounded-xl text-white px-6 py-2">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}