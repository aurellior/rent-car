import React from "react";
import bg1 from "../img/bg1.png";
import bg2 from "../img/bg2.png";
import { HiOutlineSwitchVertical } from "react-icons/hi";
import { IconContext } from "react-icons";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import Detail from "../routes/Detail";

const Hero = () => {
  return (
    <div>
      <div className="flex gap-[32px] items-center justify-center my-[32px]">
        <div
          style={{ backgroundImage: `url(${bg1})` }}
          className="bg-cover md:h-[358px] w-[300px] md:w-[635px] rounded-[10px] p-[24px]"
        >
          <div className="flex flex-col gap-[20px] w-[284px]">
            <div className="flex gap-[16px] flex-col">
              <h1 className="font-semibold text-[32px] text-[white]">
                The Best Platform for Car Rental
              </h1>
              <h2 className="text-white font-medium">
                Ease of doing a car rental safely and reliably. Of course at a
                low price.
              </h2>
            </div>
            <Link to="/category">
              <button className="h-[44px] w-[120px] bg-[#3563E9] text-white text-[16px] font-semibold rounded-[4px]">
                Rental Car
              </button>
            </Link>
          </div>
          <div className="w-full flex items-center justify-center">
            <img
              src="https://s3-alpha-sig.figma.com/img/2385/cc01/da9bb791587b8022c475d39822c50c17?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h97Ab5VpBJ60L-8CZsbImRhLH0kK70otvvemIh-htEqF~g0hvZZ6mI8HcY4qNiuNWjTl993xoPhCo3pCpRf2ZUP~q90ydiuaEVmlousoP1aOAO~rrFyusZNt-XuMJ5OY8XbA~JeDo4L~agN2WxKgGCV7Kil2qOIucnCjlqW5Zbi-KKBlxsVEcpsxros~KNP-8SUB0kRnOUoAT~GiIo1eKHFASQBDH2xdfuGw7eXNKeoHRIdttx2xNS-HR-IG4sBpLKVBYI~v8egb7FBi9uwJQglEUXKZ3D89g5gFho4Hew1b8uwe86e12pFecNUHWvivZeYRVl4MZ8sLjJeiXPDLIg__"
              className="h-[100px] w-[400px] object-cover "
              alt="background"
            ></img>
          </div>
        </div>

        <div
          style={{ backgroundImage: `url(${bg2})` }}
          className="bg-cover h-[360px] w-[635px] rounded-[10px] p-[24px] invisible md:visible absolute md:static"
        >
          <div className="flex flex-col gap-[20px] w-[284px]">
            <div className="flex gap-[16px] flex-col">
              <h1 className="font-semibold text-[32px] text-[white]">
                Easy way to rent a car at a low price
              </h1>
              <h2 className="text-white font-medium">
                Providing cheap car rental services and safe and comfortable
                facilities.
              </h2>
            </div>
            <Link to="/category">
              <button className="h-[44px] w-[120px] bg-[#54A6FF] text-white text-[16px] font-semibold rounded-[4px]">
                Rental Car
              </button>
            </Link>
          </div>
          <div className="w-full flex items-center justify-center">
            <img
              src="https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TlxD1EFa5IgILQkx7E8nAM2gVSI7YHeiyg-P9fz3h1hdYAQaFktMArOxztQzMxon~UIIHeFRD90jTfMa1zpsKtcrYJphU42YQhCikspf8ZkNo1SEVlfhgH11UPXeZ~g~l~UqP~ijnDZRFm1WMrZRAZ7kAYDNUZ7N-ZuKBvOcWc7aco4d9Ai9d1qZR5GATvaLrjINiepD9GykJb7jZ78ku8QgNgxdXmRLq4ZEgWHze2MIyMLde7biuluOzBolmooHTSf5agywx2BSTbK3Zr9M~XVtXahbKz9E~ebRlEMspwWkBKxTk21J-oMRzcOqkKkR4b1c2HBiZfxsrLyFIu8MvA__"
              className="h-[100px] w-[320px] object-cover  transform -scale-x-100 "
              alt="background"
            ></img>
          </div>
        </div>
      </div>

      <dv className="flex flex-col md:flex-row  gap-[88px] justify-center items-center mx-[64px]">
        <div className="flex flex-col gap-[16px] bg-white h-[136px] w-full rounded-[10px] px-[24px] py-[24px]">
          <div className="flex items-center gap-[8px] px-[24px]">
            <div className="h-[8px] w-[8px] bg-[#54A6FF] rounded-full outline outline-[#5CAFFC4D] outline-4"></div>
            <h1 className="font-semibold text-[16px] text-black">Pick - Up</h1>
          </div>
          <div class="grid grid-cols-3 divide-x divide-[#C3D4E966]">
            <div class="flex flex-col gap-[8px] pr-[24px]">
              <h1 className="font-bold text-[16px] text-black">Location</h1>
              <div className="flex gap-[8px]">
                <h2 className="text-[#90A3BF] text-[12px] font-medium">
                  Select your city
                </h2>
                <IconContext.Provider
                  value={{ color: "#1A202C", size: "14px" }}
                >
                  <div>
                    <IoIosArrowDown />
                  </div>
                </IconContext.Provider>
              </div>
            </div>
            <div class="flex flex-col gap-[8px] px-[24px]">
              <h1 className="font-bold text-[16px] text-black">Date</h1>
              <div className="flex gap-[8px]">
                <h2 className="text-[#90A3BF] text-[12px] font-medium">
                  Select your date
                </h2>
                <IconContext.Provider
                  value={{ color: "#1A202C", size: "14px" }}
                >
                  <div>
                    <IoIosArrowDown />
                  </div>
                </IconContext.Provider>
              </div>
            </div>
            <div class="flex flex-col gap-[8px] pl-[24px]">
              <h1 className="font-bold text-[16px] text-black ">Time</h1>
              <div className="flex gap-[8px]">
                <h2 className="text-[#90A3BF] text-[12px] font-medium">
                  Select your time
                </h2>
                <IconContext.Provider
                  value={{ color: "#1A202C", size: "14px" }}
                >
                  <div>
                    <IoIosArrowDown />
                  </div>
                </IconContext.Provider>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bg-[#3563E9] h-[50px] w-[50px] rounded-[10px] flex items-center justify-center">
          <IconContext.Provider value={{ color: "white", size: "24px" }}>
            <div>
              <HiOutlineSwitchVertical />
            </div>
          </IconContext.Provider>
        </div>

        <div className="flex flex-col gap-[16px] bg-white h-[136px] w-full rounded-[10px] px-[24px] py-[24px]">
          <div className="flex items-center gap-[8px] px-[24px]">
            <div className="h-[8px] w-[8px] bg-[#54A6FF] rounded-full outline outline-[#5CAFFC4D] outline-4"></div>
            <h1 className="font-semibold text-[16px] text-black">Drop - Off</h1>
          </div>
          <div class="grid grid-cols-3 divide-x divide-[#C3D4E966]">
            <div class="flex flex-col gap-[8px] pr-[24px]">
              <h1 className="font-bold text-[16px] text-black">Location</h1>
              <div className="flex gap-[8px]">
                <h2 className="text-[#90A3BF] text-[12px] font-medium">
                  Select your city
                </h2>
                <IconContext.Provider
                  value={{ color: "#1A202C", size: "14px" }}
                >
                  <div>
                    <IoIosArrowDown />
                  </div>
                </IconContext.Provider>
              </div>
            </div>
            <div class="flex flex-col gap-[8px] px-[24px]">
              <h1 className="font-bold text-[16px] text-black">Date</h1>
              <div className="flex gap-[8px]">
                <h2 className="text-[#90A3BF] text-[12px] font-medium">
                  Select your date
                </h2>
                <IconContext.Provider
                  value={{ color: "#1A202C", size: "14px" }}
                >
                  <div>
                    <IoIosArrowDown />
                  </div>
                </IconContext.Provider>
              </div>
            </div>
            <div class="flex flex-col gap-[8px] pl-[24px]">
              <h1 className="font-bold text-[16px] text-black ">Time</h1>
              <div className="flex gap-[8px]">
                <h2 className="text-[#90A3BF] text-[12px] font-medium">
                  Select your time
                </h2>
                <IconContext.Provider
                  value={{ color: "#1A202C", size: "14px" }}
                >
                  <div>
                    <IoIosArrowDown />
                  </div>
                </IconContext.Provider>
              </div>
            </div>
          </div>
        </div>
      </dv>
    </div>
  );
};

export default Hero;
