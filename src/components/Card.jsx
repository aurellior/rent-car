import React from "react";
import { CiHeart } from "react-icons/ci";
import { IconContext } from "react-icons";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { RiSteering2Fill } from "react-icons/ri";
import { MdPeopleAlt } from "react-icons/md";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Link to="/detail">
      <div className="h-[410px] w-[304px] bg-white rounded-[10px] p-[24px]">
        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[64px]">
            {/* Title */}
            <div className="flex justify-between ">
              <div>
                <h1 className="font-bold text-[20px] text-[#1A202C]">
                  {props.name}
                </h1>
                <h2 className="text-[#90A3BF] font-bold text-[14px]">
                  {props.productType}
                </h2>
              </div>
              <IconContext.Provider value={{ color: "#596780", size: "24px" }}>
                <div>
                  <CiHeart />
                </div>
              </IconContext.Provider>
            </div>

            {/* image */}
            <div className="w-full flex items-center justify-center">
              <img
                src={props.image}
                className={`h-[100px] w-[350px] object-cover  ${props.rotate}`}
                alt="card"
              ></img>
            </div>

            {/* desc */}
            <div className="flex gap-[16px]">
              <div className="flex gap-[6px]">
                <IconContext.Provider
                  value={{ color: "#90A3BF", size: "24px" }}
                >
                  <div>
                    <BsFillFuelPumpFill />
                  </div>
                </IconContext.Provider>
                <p className="text-[#90A3BF] text-[14px] font-medium ">
                  {props.fuel}
                </p>
              </div>
              <div className="flex gap-[6px]">
                <IconContext.Provider
                  value={{ color: "#90A3BF", size: "24px" }}
                >
                  <div>
                    <RiSteering2Fill />
                  </div>
                </IconContext.Provider>
                <p className="text-[#90A3BF] text-[14px] font-medium ">
                  {props.transmission}
                </p>
              </div>
              <div className="flex gap-[6px]">
                <IconContext.Provider
                  value={{ color: "#90A3BF", size: "24px" }}
                >
                  <div>
                    <MdPeopleAlt />
                  </div>
                </IconContext.Provider>
                <p className="text-[#90A3BF] text-[14px] font-medium ">
                  {props.people}
                </p>
              </div>
            </div>
          </div>

          {/* price */}
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-[1px]">
              <h1 className="text-[20px] text-[#1A202C] font-bold">
                {props.price}
                <span className="text-[14px] text-[#90A3BF]">/day</span>
              </h1>
              <s className="text-[#90A3BF] text-[14px]">{props.realPrice}</s>
            </div>
            <Link to="/payment">
              <button className="h-[44px] w-[116px] bg-[#3563E9] text-white text-[16px] font-semibold rounded-[4px]">
                Rent Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
