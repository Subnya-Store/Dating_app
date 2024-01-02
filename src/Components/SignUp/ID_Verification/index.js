import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import API from '@/API/API'
import { useRouter } from 'next/router'

export default function index({ setState, inputs, setInputs }) {
  const router= useRouter()
  const [image, setImage] = useState('/Images/input_image.png')
  const [file_image, setfile_image] = useState('')
  const sign_up_img = '/Images/SignIn_logo.png'
  const id_varification = '/Images/id_varification.png'
  // useEffect(()=>{
  //   console.log(router)
  // },[])
  console.log(router.query.name)
  console.log(router.query.username)
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
    formData.append('username', router?.query?.username||inputs?.username);
    formData.append('full_name', router?.query?.name||inputs?.full_name);

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
    <div className='h-full w-full mt-16'>
      <div className="mx-4 max-w-md bg-whiteColor p-8 rounded-2xl shadow-lg -z-10 opacity-90 flex flex-col">
        <p className=" text-3xl md:text-4xl font-bold py-4 capitalize">ID Verification</p>
        <form onSubmit={(e) => {
          e.preventDefault();
          ID_Verify(e);
        }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className='flex flex-col'>
              <p>ID Card</p>
              <input
                className="rounded-xl p-2 w-20 md:w-48 bg-[#FFF] mt-3 border border-[#7000ED] outline-none"
                type="image"
                src={image}
                placeholder=""
              />
              <label htmlFor="file-upload" className="z-40 rounded-xl p-2 w-full md:w-48 bg-[#FFF] mt-3 flex justify-center border border-[#7000ED] outline-none">
                Upload
                <input
                  required
                  className="opacity-0 absolute"
                  type="file"
                  id="file-upload"
                  onChange={handleImageChange}
                  placeholder=""
                />
              </label>
            </div>
            <div className="flex flex-col">
              <p>Age</p>
              <input
                required
                className="rounded-xl p-2 w-full md:w-48 bg-[#FFF] mt-3 border border-[#7000ED] outline-none"
                type="number"
                placeholder=""
                onChange={e => setInputs({ ...inputs, age: e.target.value })}
              />
              <div className='pt-6 pl-2 hidden md:flex'>
                <img className="w-full md:w-auto" src={id_varification} alt="ID Verification" />
              </div>
            </div>
          </div>

          <div className="pt-4 md:pt-1 pb-1">
            <button type='submit' className="bg-[#7000ED] font-medium flex rounded-xl text-white px-6 py-2">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}