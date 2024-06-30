import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PaymentPhoto from "../img/payment.png";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IconContext } from "react-icons";
import { SiAdguard } from "react-icons/si";

const Payment = () => {
  return (
    <div className="bg-[#F6F7F9] font-jakarta ">
      <Navbar />
      <div className="flex flex-row justify-between  gap-[32px] mx-[32px]">
        <div className="flex flex-col gap-[32px] my-[32px]">
          <div className="flex flex-col gap-[32px] bg-white rounded-[10px] w-full p-[24px]  ">
            <div className="flex items-center  justify-between">
              <div>
                <h1 className="text-[#1A202C] text-[20px] font-bold">
                  Billing Info
                </h1>
                <h1 className="text-[#90A3BF] text-[14px] font-medium">
                  Please enter your billing info
                </h1>
              </div>
              <div>
                <h1 className="text-[#90A3BF] ">Step 1 of 4</h1>
              </div>
            </div>

            <div className="grid grid-rows-2 grid-flow-col gap-4">
              <div className="flex flex-col gap-[16px]">
                <h1 className="text-[#1A202C] text-[16px] font-semibold">
                  Name
                </h1>
                <input
                  class="peer h-full  w-full bg-[#F6F7F9] rounded-[10px] py-[16px] px-[32px] outline-none text-[14px] text-[#90A3BF] pr-2 font-medium"
                  type="text"
                  id="search"
                  placeholder="Your name"
                />
              </div>
              <div className="flex flex-col gap-[16px]">
                <h1 className="text-[#1A202C] text-[16px] font-semibold">
                  Phone Number
                </h1>
                <input
                  class="peer h-full  w-full bg-[#F6F7F9] rounded-[10px] py-[16px] px-[32px] outline-none text-[14px] text-[#90A3BF] pr-2 font-medium"
                  type="text"
                  id="search"
                  placeholder="Your Phone Number"
                />
              </div>
              <div className="flex flex-col gap-[16px]">
                <h1 className="text-[#1A202C] text-[16px] font-semibold">
                  Address
                </h1>
                <input
                  class="peer h-full  w-full bg-[#F6F7F9] rounded-[10px] py-[16px] px-[32px] outline-none text-[14px] text-[#90A3BF] pr-2 font-medium"
                  type="text"
                  id="search"
                  placeholder="Your Address"
                />
              </div>
              <div className="flex flex-col gap-[16px]">
                <h1 className="text-[#1A202C] text-[16px] font-semibold">
                  Town / City
                </h1>
                <input
                  class="peer h-full  w-full bg-[#F6F7F9] rounded-[10px] py-[16px] px-[32px] outline-none text-[14px] text-[#90A3BF] pr-2 font-medium"
                  type="text"
                  id="search"
                  placeholder="Your Town / City"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[32px] bg-white rounded-[10px] w-[852px] p-[24px]">
            <div className="flex items-center  justify-between">
              <div>
                <h1 className="text-[#1A202C] text-[20px] font-bold">
                  Rental Info
                </h1>
                <h1 className="text-[#90A3BF] text-[14px] font-medium">
                  Please select your rental date
                </h1>
              </div>
              <div>
                <h1 className="text-[#90A3BF] ">Step 2 of 4</h1>
              </div>
            </div>

            <div className="flex flex-col gap-[32px]">
              <div className="flex flex-col gap-[24px]">
                <div className="flex items-center gap-[8px] ">
                  <div className="h-[8px] w-[8px] bg-[#54A6FF] rounded-full outline outline-[#5CAFFC4D] outline-4"></div>
                  <h1 className="font-semibold text-[16px] text-black">
                    Pick - Up
                  </h1>
                </div>

                <div className="grid grid-rows-2 grid-flow-col gap-4">
                  <div className="flex flex-col gap-[16px]">
                    <h1 className="text-[#1A202C] text-[16px] font-semibold">
                      Location
                    </h1>
                    <select
                      name="cars"
                      id="cars"
                      className="bg-[#F6F7F9] rounded-[10px] py-[16px] px-[24px] outline-none text-[14px] text-[#90A3BF] font-medium"
                    >
                      <option value="volvo">Select your city</option>
                      <option value="saab">Depok</option>
                      <option value="mercedes">Bogor</option>
                      <option value="audi">Jakarta</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-[16px]">
                    <h1 className="text-[#1A202C] text-[16px] font-semibold">
                      Date
                    </h1>
                    <select
                      name="cars"
                      id="cars"
                      className="bg-[#F6F7F9] rounded-[10px] py-[16px] px-[24px] outline-none text-[14px] text-[#90A3BF] font-medium"
                    >
                      <option value="volvo">Select your date</option>
                      <option value="saab">1</option>
                      <option value="mercedes">2</option>
                      <option value="audi">3</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-[16px]">
                    <h1 className="text-[#1A202C] text-[16px] font-semibold">
                      Time
                    </h1>
                    <select
                      name="cars"
                      id="cars"
                      className="bg-[#F6F7F9] rounded-[10px] py-[16px] px-[24px] outline-none text-[14px] text-[#90A3BF] font-medium"
                    >
                      <option value="volvo">Select your time</option>
                      <option value="saab">1 Pm</option>
                      <option value="mercedes">2 PM</option>
                      <option value="audi">3 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[24px]">
                <div className="flex items-center gap-[8px] ">
                  <div className="h-[8px] w-[8px] bg-[#54A6FF] rounded-full outline outline-[#5CAFFC4D] outline-4"></div>
                  <h1 className="font-semibold text-[16px] text-black">
                    Drop - Off
                  </h1>
                </div>

                <div className="grid grid-rows-2 grid-flow-col gap-4">
                  <div className="flex flex-col gap-[16px]">
                    <h1 className="text-[#1A202C] text-[16px] font-semibold">
                      Location
                    </h1>
                    <select
                      name="cars"
                      id="cars"
                      className="bg-[#F6F7F9] rounded-[10px] py-[16px] px-[24px] outline-none text-[14px] text-[#90A3BF] font-medium"
                    >
                      <option value="volvo">Select your city</option>
                      <option value="saab">Depok</option>
                      <option value="mercedes">Bogor</option>
                      <option value="audi">Jakarta</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-[16px]">
                    <h1 className="text-[#1A202C] text-[16px] font-semibold">
                      Date
                    </h1>
                    <select
                      name="cars"
                      id="cars"
                      className="bg-[#F6F7F9] rounded-[10px] py-[16px] px-[24px] outline-none text-[14px] text-[#90A3BF] font-medium"
                    >
                      <option value="volvo">Select your date</option>
                      <option value="saab">1</option>
                      <option value="mercedes">2</option>
                      <option value="audi">3</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-[16px]">
                    <h1 className="text-[#1A202C] text-[16px] font-semibold">
                      Time
                    </h1>
                    <select
                      name="cars"
                      id="cars"
                      className="bg-[#F6F7F9] rounded-[10px] py-[16px] px-[24px] outline-none text-[14px] text-[#90A3BF] font-medium"
                    >
                      <option value="volvo">Select your time</option>
                      <option value="saab">1 Pm</option>
                      <option value="mercedes">2 PM</option>
                      <option value="audi">3 PM</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[32px] bg-white rounded-[10px] w-[852px] p-[24px]">
            <div className="flex items-center  justify-between">
              <div>
                <h1 className="text-[#1A202C] text-[20px] font-bold">
                  Payment Method
                </h1>
                <h1 className="text-[#90A3BF] text-[14px] font-medium">
                  Please enter your billing info
                </h1>
              </div>
              <div>
                <h1 className="text-[#90A3BF] ">Step 3 of 4</h1>
              </div>
            </div>

            <div className="bg-[#F6F7F9] flex flex-col gap-[32px] p-[24px]  rounded-[10px]">
              <div className="flex justify-between">
                <div className="flex items-center gap-[8px] ">
                  <div className="h-[8px] w-[8px] bg-[#3563E9] rounded-full outline outline-[#3563E94D] outline-4"></div>
                  <h1 className="font-semibold text-[16px] text-black">
                    Credit Card
                  </h1>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="42"
                    height=""
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#ff9800"
                      d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"
                    ></path>
                    <path
                      fill="#d50000"
                      d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"
                    ></path>
                    <path
                      fill="#ff3d00"
                      d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="grid grid-rows-2 grid-flow-col gap-4">
                <div className="flex flex-col gap-[16px]">
                  <h1 className="text-[#1A202C] text-[16px] font-semibold">
                    Card Number
                  </h1>
                  <input
                    class="peer h-full  w-full bg-white rounded-[10px] py-[16px] px-[32px] outline-none text-[14px] text-[#90A3BF] pr-2 font-medium"
                    type="text"
                    id="search"
                    placeholder="Card Number"
                  />
                </div>
                <div className="flex flex-col gap-[16px]">
                  <h1 className="text-[#1A202C] text-[16px] font-semibold">
                    Expration Date
                  </h1>
                  <input
                    class="peer h-full  w-full bg-white rounded-[10px] py-[16px] px-[32px] outline-none text-[14px] text-[#90A3BF] pr-2 font-medium"
                    type="text"
                    id="search"
                    placeholder="DD/MM/YY"
                  />
                </div>
                <div className="flex flex-col gap-[16px]">
                  <h1 className="text-[#1A202C] text-[16px] font-semibold">
                    Card Holder
                  </h1>
                  <input
                    class="peer h-full  w-full bg-white rounded-[10px] py-[16px] px-[32px] outline-none text-[14px] text-[#90A3BF] pr-2 font-medium"
                    type="text"
                    id="search"
                    placeholder="Card Holder"
                  />
                </div>
                <div className="flex flex-col gap-[16px]">
                  <h1 className="text-[#1A202C] text-[16px] font-semibold">
                    CVC
                  </h1>
                  <input
                    class="peer h-full  w-full bg-white rounded-[10px] py-[16px] px-[32px] outline-none text-[14px] text-[#90A3BF] pr-2 font-medium"
                    type="text"
                    id="search"
                    placeholder="CVC"
                  />
                </div>
              </div>
            </div>
            <div className="flex  bg-[#F6F7F9] ">
              <div className="flex flex-row gap-[20px] px-[32px] py-[16px] rounded-[10px]">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="HTML"
                />
                <label className="text-[16px] text-[#1A202C] font-semibold">
                  Paypal
                </label>
              </div>
            </div>
            <div className="flex  bg-[#F6F7F9] ">
              <div className="flex flex-row gap-[20px] px-[32px] py-[16px] rounded-[10px]">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="HTML"
                />
                <label className="text-[16px] text-[#1A202C] font-semibold">
                  Bitcoin
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[32px] bg-white rounded-[10px] w-[852px] p-[24px]">
            <div className="flex items-center  justify-between">
              <div>
                <h1 className="text-[#1A202C] text-[20px] font-bold">
                  Confirmation
                </h1>
                <h1 className="text-[#90A3BF] text-[14px] font-medium">
                  We are getting to the end. Just few clicks and your rental is
                  ready!
                </h1>
              </div>
              <div>
                <h1 className="text-[#90A3BF] ">Step 4 of 4</h1>
              </div>
            </div>

            <div className="flex  bg-[#F6F7F9] ">
              <div className="flex flex-row gap-[20px] px-[32px] py-[16px] rounded-[10px]">
                <input type="checkbox" />
                <label className="text-[16px] text-[#1A202C] font-semibold">
                  I agree with sending an Marketing and newsletter emails. No
                  spam, promissed!
                </label>
              </div>
            </div>
            <div className="flex  bg-[#F6F7F9] ">
              <div className="flex flex-row gap-[20px] px-[32px] py-[16px] rounded-[10px]">
                <input type="checkbox" />
                <label className="text-[16px] text-[#1A202C] font-semibold">
                  I agree with our terms and conditions and privacy policy.
                </label>
              </div>
            </div>

            <button className="h-[44px] w-[116px] bg-[#3563E9] text-white text-[16px] font-semibold rounded-[10px]">
              Rent Now
            </button>

            <div className="flex flex-col gap-[16px]">
              <IconContext.Provider value={{ color: "#1A202C", size: "20px" }}>
                <div>
                  <SiAdguard />
                </div>
              </IconContext.Provider>
              <div className="flex flex-col gap-[8px]">
                <h1 className="text-[16px] text-[#1A202C] font-semibold">
                  All your data are safe
                </h1>
                <h1 className="text-[#90A3BF] text-[14px] font-medium">
                  We are using the most advanced security to provide you the
                  best experience ever.
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col h-[600px] w-[492px] my-[32px] gap-[32px] bg-white rounded-[10px] p-[24px]">
          <div className="flex flex-col">
            <h1 className="text-[20px] text-[#1A202C] font-bold">
              Rental Sumary
            </h1>
            <p className="text-[14px] text-[#90A3BF] font-medium">
              Prices may change depending on the length of the rental and the
              price of your rental car.
            </p>
          </div>
          <div className="flex gap-[16px] items-center">
            <div
              className="bg-cover h-[124px] w-[148px] rounded-[10px] "
              style={{ backgroundImage: `url(${PaymentPhoto})` }}
            ></div>
            <div className="flex flex-col ">
              <h1 className="text-[32px] text-[#1A202C] font-bold">
                Nissan GT - R
              </h1>
              <div className="flex gap-[8px]">
                <div className="flex">
                  <IconContext.Provider
                    value={{ color: "#FBAD39", size: "20px" }}
                  >
                    <div>
                      <FaStar />
                    </div>
                  </IconContext.Provider>
                  <IconContext.Provider
                    value={{ color: "#FBAD39", size: "20px" }}
                  >
                    <div>
                      <FaStar />
                    </div>
                  </IconContext.Provider>
                  <IconContext.Provider
                    value={{ color: "#FBAD39", size: "20px" }}
                  >
                    <div>
                      <FaStar />
                    </div>
                  </IconContext.Provider>
                  <IconContext.Provider
                    value={{ color: "#FBAD39", size: "20px" }}
                  >
                    <div>
                      <FaStar />
                    </div>
                  </IconContext.Provider>
                  <IconContext.Provider
                    value={{ color: "#90A3BF", size: "20px" }}
                  >
                    <div>
                      <FaRegStar />
                    </div>
                  </IconContext.Provider>
                </div>
                <h2 className="text-[14px] text-[#596780] font-medium">
                  440+ Reviewer
                </h2>
              </div>
            </div>
          </div>

          <hr></hr>

          <div className="flex justify-between">
            <h1 className="text-[16px] text-[#90A3BF] font-medium">Subtotal</h1>
            <h1 className="text-[16px] text-[#1A202C] font-semibold">$80.00</h1>
          </div>
          <div className="flex justify-between">
            <h1 className="text-[16px] text-[#90A3BF]">tax</h1>
            <h1 className="text-[16px] text-[#1A202C] font-semibold">$0</h1>
          </div>

          <div className="bg-[#F6F7F9] flex justify-between py-[16px] px-[32px] rounded-[10px]">
            <h1 className="text-[16px] text-[#90A3BF] font-medium">
              Apply promo code
            </h1>
            <h1 className="text-[16px] text-[#1A202C] font-semibold">
              Apply now
            </h1>
          </div>
          <div className="flex justify-between">
            <div>
              <h1 className="text-[20px] text-[#1A202C] font-bold">
                Total Rental Price
              </h1>
              <h1 className="text-[14px] text-[#90A3BF] font-medium">
                Overall price and includes rental discount
              </h1>
            </div>
            <h1 className="text-[32px] text-[#1A202C] font-bold">$80.00</h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Payment;
