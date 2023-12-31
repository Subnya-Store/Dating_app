import API from '@/API/API'
import Link from 'next/link'
import React from 'react'


export default function index({ setState, setInputs, inputs, toast }) {

  const countries = [
    { Country: "Afghanistan" },
    { Country: "Albania" },
    { Country: "Algeria" },
    { Country: "Andorra" },
    { Country: "Angola" },
    { Country: "Antigua and Barbuda" },
    { Country: "Argentina" },
    { Country: "Armenia" },
    { Country: "Australia" },
    { Country: "Austria" },
    { Country: "Azerbaijan" },
    { Country: "Bahamas" },
    { Country: "Bahrain" },
    { Country: "Bangladesh" },
    { Country: "Barbados" },
    { Country: "Belarus" },
    { Country: "Belgium" },
    { Country: "Belize" },
    { Country: "Benin" },
    { Country: "Bhutan" },
    { Country: "Bolivia" },
    { Country: "Bosnia and Herzegovina" },
    { Country: "Botswana" },
    { Country: "Brazil" },
    { Country: "Brunei" },
    { Country: "Bulgaria" },
    { Country: "Burkina Faso" },
    { Country: "Burundi" },
    { Country: "Côte d'Ivoire" },
    { Country: "Cabo Verde" },
    { Country: "Cambodia" },
    { Country: "Cameroon" },
    { Country: "Canada" },
    { Country: "Central African Republic" },
    { Country: "Chad" },
    { Country: "Chile" },
    { Country: "China" },
    { Country: "Colombia" },
    { Country: "Comoros" },
    { Country: "Congo (Congo-Brazzaville)" },
    { Country: "Costa Rica" },
    { Country: "Croatia" },
    { Country: "Cuba" },
    { Country: "Cyprus" },
    { Country: "Czechia (Czech Republic)" },
    { Country: "Democratic Republic of the Congo (Congo-Kinshasa)" },
    { Country: "Denmark" },
    { Country: "Djibouti" },
    { Country: "Dominica" },
    { Country: "Dominican Republic" },
    { Country: "Ecuador" },
    { Country: "Egypt" },
    { Country: "El Salvador" },
    { Country: "Equatorial Guinea" },
    { Country: "Eritrea" },
    { Country: "Estonia" },
    { Country: "Eswatini" },
    { Country: "Ethiopia" },
    { Country: "Fiji" },
    { Country: "Finland" },
    { Country: "France" },
    { Country: "Gabon" },
    { Country: "Gambia" },
    { Country: "Georgia" },
    { Country: "Germany" },
    { Country: "Ghana" },
    { Country: "Greece" },
    { Country: "Grenada" },
    { Country: "Guatemala" },
    { Country: "Guinea" },
    { Country: "Guinea-Bissau" },
    { Country: "Guyana" },
    { Country: "Haiti" },
    { Country: "Holy See" },
    { Country: "Honduras" },
    { Country: "Hungary" },
    { Country: "Iceland" },
    { Country: "India" },
    { Country: "Indonesia" },
    { Country: "Iran" },
    { Country: "Iraq" },
    { Country: "Ireland" },
    { Country: "Israel" },
    { Country: "Italy" },
    { Country: "Jamaica" },
    { Country: "Japan" },
    { Country: "Jordan" },
    { Country: "Kazakhstan" },
    { Country: "Kenya" },
    { Country: "Kiribati" },
    { Country: "Kuwait" },
    { Country: "Kyrgyzstan" },
    { Country: "Laos" },
    { Country: "Latvia" },
    { Country: "Lebanon" },
    { Country: "Lesotho" },
    { Country: "Liberia" },
    { Country: "Libya" },
    { Country: "Liechtenstein" },
    { Country: "Lithuania" },
    { Country: "Luxembourg" },
    { Country: "Macedonia (North Macedonia)" },
    { Country: "Madagascar" },
    { Country: "Malawi" },
    { Country: "Malaysia" },
    { Country: "Maldives" },
    { Country: "Mali" },
    { Country: "Malta" },
    { Country: "Marshall Islands" },
    { Country: "Mauritania" },
    { Country: "Mauritius" },
    { Country: "Mexico" },
    { Country: "Micronesia" },
    { Country: "Moldova" },
    { Country: "Monaco" },
    { Country: "Mongolia" },
    { Country: "Montenegro" },
    { Country: "Morocco" },
    { Country: "Mozambique" },
    { Country: "Myanmar (formerly Burma)" },
    { Country: "Namibia" },
    { Country: "Nauru" },
    { Country: "Nepal" },
    { Country: "Netherlands" },
    { Country: "New Zealand" },
    { Country: "Nicaragua" },
    { Country: "Niger" },
    { Country: "Nigeria" },
    { Country: "North Korea" },
    { Country: "Norway" },
    { Country: "Oman" },
    { Country: "Pakistan" },
    { Country: "Palau" },
    { Country: "Palestine State" },
    { Country: "Panama" },
    { Country: "Papua New Guinea" },
    { Country: "Paraguay" },
    { Country: "Peru" },
    { Country: "Philippines" },
    { Country: "Poland" },
    { Country: "Portugal" },
    { Country: "Qatar" },
    { Country: "Romania" },
    { Country: "Russia" },
    { Country: "Rwanda" },
    { Country: "Saint Kitts and Nevis" },
    { Country: "Saint Lucia" },
    { Country: "Saint Vincent and the Grenadines" },
    { Country: "Samoa" },
    { Country: "San Marino" },
    { Country: "Sao Tome and Principe" },
    { Country: "Saudi Arabia" },
    { Country: "Senegal" },
    { Country: "Serbia" },
    { Country: "Seychelles" },
    { Country: "Sierra Leone" },
    { Country: "Singapore" },
    { Country: "Slovakia" },
    { Country: "Slovenia" },
    { Country: "Solomon Islands" },
    { Country: "Somalia" },
    { Country: "South Africa" },
    { Country: "South Korea" },
    { Country: "South Sudan" },
    { Country: "Spain" },
    { Country: "Sri Lanka" },
    { Country: "Sudan" },
    { Country: "Suriname" },
    { Country: "Sweden" },
    { Country: "Switzerland" },
    { Country: "Syria" },
    { Country: "Tajikistan" },
    { Country: "Tanzania" },
    { Country: "Thailand" },
    { Country: "Timor-Leste" },
    { Country: "Togo" },
    { Country: "Tonga" },
    { Country: "Trinidad and Tobago" },
    { Country: "Tunisia" },
    { Country: "Turkey" },
    { Country: "Turkmenistan" },
    { Country: "Tuvalu" },
    { Country: "Uganda" },
    { Country: "Ukraine" },
    { Country: "United Arab Emirates" },
    { Country: "United Kingdom" },
    { Country: "United States of America" },
    { Country: "Uruguay" },
    { Country: "Uzbekistan" },
    { Country: "Vanuatu" },
    { Country: "Venezuela" },
    { Country: "Vietnam" },
    { Country: "Yemen" },
    { Country: "Zambia" },
    { Country: "Zimbabwe" }
  ];

  const Country = [
    {
      country: 'United States',
      cities: [
        'Alabama',
        'Alaska',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'Florida',
        'Georgia',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Pennsylvania',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming'
      ]
    }
  ];


  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setInputs({ ...inputs, country: selectedCountry });
  };

  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    setInputs({ ...inputs, city: selectedCity });
  };

  const filteredCities = Country.find((c) => c.country === inputs.country)?.cities || [];

  const sign_up_img = '/Images/SignIn_logo.png'
  const Make_acount = () => {
    // setState("email_vericaction")
    API.fetchPost(inputs, '/register')
      .then(x => {
        if (x.data.message == 'Verification email sent') {
          setState("email_vericaction")
        } else {

          toast.error(x.data.check, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          })
        }

      })
      .catch(x => console.log(x))
  }
  return (
    <div>
      <div className=" md:w-fit  bg-whiteColor p-8  my-12  mx-16 rounded-2xl shadow-lg -z-10 opacity-90">
        <div className=" flex">
          <ul className="flex justify-between w-80">
            <li>
              <img className="flex" src={sign_up_img} />
            </li>
            <li className=' w-32'>
              <Link href='signin' className="  text-[#7000ED]">
                Already have a account? <br />Sign In.
              </Link>
            </li>
          </ul>
        </div>
        <p className=" text-4xl font-bold py-4 capitalize"> Account Details</p>
        <div className="inline-flex gap-5 pt-1 pb-1">
          <button className="bg-[#7000ED] flex rounded-xl text-white py-2 pr-5" >
            <img className=" object-contain px-4" src="/Images/Google_img.png " /> signin with google
          </button>
          <button className="bg-[#7000ED] flex rounded-xl text-white  px-4 p-2">
            <img src="/Images/facbook_signin.png" className=" object-contain" />
          </button>
        </div>
        <form onSubmit={(e) => {
          e.preventDefault()
          if (inputs.password === inputs.confirm)
            return Make_acount();
          // console.log({pass:inputs.password,Cpass:inputs.confirm})
        }}>
          <div className="pt-1 pb-1 font-medium ">
            <p> Email Address</p>
            <input
              required
              onChange={e => setInputs({ ...inputs, email: e.target.value })}

              className=" rounded-xl p-2  bg-[#FFF] mt-3 flex border border-[#7000ED]  outline-none  w-72"
              type="email"
              placeholder="Michealjohn@gmail.com"
            />
          </div>
          <div className=" flex">
            <ul className="flex gap-4 ">
              <li>
                <div>
                  <p> Password</p>
                  <input
                    required
                    onChange={e => setInputs({ ...inputs, password: e.target.value })}

                    className=" rounded-xl p-2 w-32  bg-[#FFF] mt-3 flex border border-[#7000ED]  outline-none"
                    type="password"
                    placeholder=""
                  />
                </div>
              </li>
              <li>
                <div>
                  <p> confirm</p>
                  <input
                    required
                    onChange={e => setInputs({ ...inputs, confirm: e.target.value })}
                    type="password"
                    className= {`${inputs.password != inputs.confirm?'rounded-xl p-2 w-32  bg-[#FFF] mt-3 flex border border-[#ed0004]  outline-none':'rounded-xl p-2 w-32  bg-[#FFF] mt-3 flex border border-[#7000ED]  outline-none'} `}
                    placeholder=""
                  />
                </div>
              </li>
            </ul>
          </div>

          <div className="flex">
            <ul className="flex gap-4">
              <li>
                <div>
                  <p>Country</p>
                  <select
                    className="rounded-xl p-2 w-32 bg-[#FFF] mt-3 flex border border-[#7000ED] outline-none"
                    value={inputs.country}
                    onChange={handleCountryChange}
                  >
                    <option value="">Select a country</option>
                    {Country.map((x) => (
                      <option key={x.country} value={x.country}>
                        {x.country}
                      </option>
                    ))}
                  </select>
                </div>
              </li>
              <li>
                <div>
                  <p>City</p>
                  <select
                    className="rounded-xl p-2 w-32 bg-[#FFF] mt-3 flex border border-[#7000ED] outline-none"
                    value={inputs.city}
                    onChange={handleCityChange}
                  >
                    <option value="">Select a city</option>
                    {filteredCities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
              </li>
            </ul>
          </div>
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
