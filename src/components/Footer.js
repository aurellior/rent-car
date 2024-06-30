import React from "react";

const Footer = () => {
  return (
    <div className="h-[480px] bg-white py-[80px] md:py-[140px] px-[60px]">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-[292px]">
          <h1 className="text-[#3563E9] text-[32px] font-bold">MORENT</h1>
          <p className="text-[16px] text-[#13131399]">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-[60px] mb-[36px]">
          <div className="flex flex-col gap-[24px]">
            <h1 className="text-[20px] text-[#1A202C] font-semibold">About</h1>
            <div className="flex flex-col gap-[18px]">
              <p className="text-[16px] text-[#13131399] font-medium">
                How it works
              </p>
              <p className="text-[16px] text-[#13131399] font-medium">
                Featured
              </p>
              <p className="text-[16px] text-[#13131399] font-medium">
                Partnership
              </p>
              <p className="text-[16px] text-[#13131399] font-medium">
                Bussiness Relation
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-[24px]">
            <h1 className="text-[20px] text-[#1A202C] font-semibold">
              Community
            </h1>
            <div className="flex flex-col gap-[18px]">
              <p className="text-[16px] text-[#13131399] font-medium">Events</p>
              <p className="text-[16px] text-[#13131399] font-medium">Blog</p>
              <p className="text-[16px] text-[#13131399] font-medium">
                Podcast
              </p>
              <p className="text-[16px] text-[#13131399] font-medium">
                Invite a friend
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-[24px]">
            <h1 className="text-[20px] text-[#1A202C] font-semibold">
              Socials
            </h1>
            <div className="flex flex-col gap-[18px]">
              <p className="text-[16px] text-[#13131399] font-medium">
                Discord
              </p>
              <p className="text-[16px] text-[#13131399] font-medium">
                Instagram
              </p>
              <p className="text-[16px] text-[#13131399] font-medium">
                Twitter
              </p>
              <p className="text-[16px] text-[#13131399] font-medium">
                Facebook
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr></hr>

      <div className="flex flex-col md:flex-row  md:justify-between text-[16px] gap-[20px] font-semibold text-[#1A202C] mt-[36px]">
        <h1>©2022 MORENT. All rights reserved</h1>
        <div className="flex gap-[20px] md:gap-[60px]">
          <h1>Privacy & Policy</h1>
          <h1>Terms & Condition</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
