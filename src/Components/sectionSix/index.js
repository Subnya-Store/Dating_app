import React from "react";
import Image from "next/image";

export default function index() {
  return (
    <div >
      <div className="bg-gradient-to-r from-[#D74EFF] to-[#FF80B4] ">
        <div className="flex flex-col md:flex-row justify-evenly items-center px-10 py-5">
          <div className="w-full flex flex-col justify-center text-white items-center text-center">
            <div className="text-3xl">
              Featured Product
            </div>
            <div>
              It is designed to help build self esteem, self confidence and give you a little bit of an edge in social arenas. Check out some of our customer reviews here.
            </div>
            <Image
              src={'/Images/badge.png'}
              width={300}
              height={300}
            />
          </div>
          <div className=" overflow-auto   py-10 flex justify-center items-center   w-full  ">
            <div className="container mx-auto ">
              <div className=" flex  justify-center flex-col m-auto text-center items-center">
                <Image
                  src="/Images/footer-logo.png"
                  width={200}
                  height={220}
                  className="object-contain pb-4"
                  alt="Picture"
                />
              </div>
              <div className=" w-auto flex align-middle justify-center mt-3 gap-4">
                <a href="/">
                  <Image
                    src="/Images/Facebook-img.png"
                    width={45}
                    height={45}
                    className=" object-contain"
                    alt="Picture"
                  />
                </a>
                <a href="/">
                  <Image
                    src="/Images/instagram-img.png"
                    width={45}
                    height={45}
                    className=" object-contain"
                    alt="Picture"
                  />
                </a>
                <a href="/">
                  <Image
                    src="/Images/Twitter-img.png"
                    width={45}
                    height={45}
                    className=" object-contain"
                    alt="Picture"
                  />
                </a>
              </div>
            </div>

          </div>
          <div className="w-full flex flex-col justify-center items-center ">
            <div className="text-white">
              INFO
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col justify-center items-center">
                <div className="font-extrabold text-lg text-white">Phone no.</div>
                <div>(413) 450-8056</div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="font-extrabold text-lg text-white">Email</div>
                <div>info@yourdestinydating.com</div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col justify-center items-center">
                <div className="font-extrabold text-lg text-white">Address</div>
                <div>196 Pondview Dr
                  Amherst, MA 01002
                  USA</div>
              </div>

            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center ">
            <div className="text-white">
              Quick Links
            </div>
            <ul>
              <li>Legal Disclaimer</li>
              <li>Privacy Policy</li>
              <li>Contact</li>
              <li>Sitemap</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center  text-lg capitalize font-medium align-center ">
        <p className="py-2"> Copyrights &copy; 2023. All Rights Reserved.</p>
      </div>
    </div>
  );
}
