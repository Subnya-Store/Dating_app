import React from "react";

export default function index() {
  const Create_account = "Images/Create_account.png";
  const Enjoydate = "Images/Enjoydate.png";
  const Comparison = "Images/Comparison.png";

  return (
    <div className="felx  pl-5">
      <div className=" justify-end flex">
        <h3 className="border-b-4 border-[#212121] text-xl pt-3 pb-3 w-32 text-right font-bold text-[#FD166F]">
          How it works
        </h3>
      </div>
      <div className=" justify-end flex pt-4  ">
        <h1 className="flex text-3xl font-bold w-54 text-right">
          You’re Just
        </h1>
      </div>
      <div className=" justify-end flex  pb-4 ">
        <h1 className="flex text-3xl font-bold w-54 text-right  text-[#7000ED]">
          3 Steps Away
        </h1>
      </div>
      <ul className="flex justify-between w-52 ">
        <li>
          <img className="flex" src={Create_account} />
        </li>
        <li>
          <p className="  text-2xl font-bold  ">
            Create <br />
            Account
          </p>
        </li>
      </ul>
      <div className=" justify-end flex pt-4 pb-4">
        <p className="flex  font-medium text-sm">
          Lorem ipsum dolor sit amet consectetur. Facilisis congue tincidunt
          iaculis mollis eget. Facilisis dolor nisi tincidunt augue volutpat
          amet diam odio lacus. Urna tellus sed scelerisque.
        </p>
      </div>
      <ul className="flex justify-between w-52">
        <li>
          <img className="flex" src={Enjoydate} />
        </li>
        <li>
          <p className="  text-2xl font-bold  ">
            Enjoy
            <br />
            Date
          </p>
        </li>
      </ul>
      <div className=" justify-end flex pt-4 pb-4">
        <p className="flex font-medium  text-sm">
          Lorem ipsum dolor sit amet consectetur. Facilisis congue tincidunt
          iaculis mollis eget. Facilisis dolor nisi tincidunt augue volutpat
          amet diam odio lacus. Urna tellus sed scelerisque.
        </p>
      </div>
      <ul className="flex justify-between w-72">
        <li>
          <img className="flex" src={Comparison} />
        </li>
        <li>
          <p className="  text-2xl font-bold  ">
            Comparison
            <br />
            your partner
          </p>
        </li>
      </ul>
      <div className=" justify-end flex pt-4 pb-4">
        <p className="flex font-medium  text-sm">
        
          Lorem ipsum dolor sit amet consectetur. Facilisis congue tincidunt
          iaculis mollis eget. Facilisis dolor nisi tincidunt augue volutpat
          amet diam odio lacus. Urna tellus sed scelerisque.
        </p>
      </div>
    </div>
  );
}
