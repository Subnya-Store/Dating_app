import React,{useState} from 'react'
import Link from 'next/link'

export default function index({ setState, inputs, setInputs }) {
  const [image,setImage]=useState('/Images/input_image.png')
  const sign_up_img = '/Images/SignIn_logo.png/'
  const id_varification = '/Images/id_varification.png'

  const handleImageChange = (e) => {
    // Access the uploaded file
    const uploadedFile = e.target.files[0];

    // You may want to perform some validation on the uploaded file here
console.log(uploadedFile)
    // Set the image in the state
    if (uploadedFile) {
      const imageURL = URL.createObjectURL(uploadedFile);
      // console.log(imageURL,uploadedFile)
      setImage(imageURL);
    }
  };

  return (
    <div>
      <div className=" md:w-fit  bg-white p-8  my-12  mx-16 rounded-2xl shadow-lg -z-10 opacity-90">
        <div className=" flex">
          <div className="flex justify-between w-80">

            <img className="flex" src={sign_up_img} />

            <div className=' w-32'>
              <Link href='signin' className="  text-[#7000ED]">
                Already have a account? <br />Sign In. </Link>
            </div>
          </div>
        </div>
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
                onChange={handleImageChange}
                placeholder=""
              />
              <label for="myfile" className=" rounded-xl p-2 w-32  bg-[#FFF] mt-3 flex justify-center border border-[#7000ED]  outline-none ">
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
                type="date"
                placeholder=""
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
            type="text"
            placeholder=""
          />
        </div>
        <div className="pt-1 pb-1">
          <button onClick={() => setState("questions")} className="bg-[#7000ED] font-medium flex rounded-xl text-white px-6 py-2">
            Next
          </button>
        </div>
      </div>
    </div>
  )
}