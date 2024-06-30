import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { HiOutlineSwitchVertical } from "react-icons/hi";
import { IconContext } from "react-icons";
import { IoIosArrowDown } from "react-icons/io";
import Footer from "../components/Footer";
import bg2 from "../img/bg2.png";
import detail1 from "../img/detail1.png";
import detail2 from "../img/detail2.png";
import detail3 from "../img/detail3.png";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Detail = () => {
  const CategoryCar = [
    {
      id: 1,
      name: "Koenigsegg",
      image:
        "https://s3-alpha-sig.figma.com/img/2385/cc01/da9bb791587b8022c475d39822c50c17?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h97Ab5VpBJ60L-8CZsbImRhLH0kK70otvvemIh-htEqF~g0hvZZ6mI8HcY4qNiuNWjTl993xoPhCo3pCpRf2ZUP~q90ydiuaEVmlousoP1aOAO~rrFyusZNt-XuMJ5OY8XbA~JeDo4L~agN2WxKgGCV7Kil2qOIucnCjlqW5Zbi-KKBlxsVEcpsxros~KNP-8SUB0kRnOUoAT~GiIo1eKHFASQBDH2xdfuGw7eXNKeoHRIdttx2xNS-HR-IG4sBpLKVBYI~v8egb7FBi9uwJQglEUXKZ3D89g5gFho4Hew1b8uwe86e12pFecNUHWvivZeYRVl4MZ8sLjJeiXPDLIg__",
      productType: "Sport",
      price: "$99.00",
      realPrice: [],
      rotate: "",
      fuel: "90L",
      transmission: "Manual",
      people: "2 People",
    },
    {
      id: 2,
      name: "Nissan GT - R",
      image:
        "https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TlxD1EFa5IgILQkx7E8nAM2gVSI7YHeiyg-P9fz3h1hdYAQaFktMArOxztQzMxon~UIIHeFRD90jTfMa1zpsKtcrYJphU42YQhCikspf8ZkNo1SEVlfhgH11UPXeZ~g~l~UqP~ijnDZRFm1WMrZRAZ7kAYDNUZ7N-ZuKBvOcWc7aco4d9Ai9d1qZR5GATvaLrjINiepD9GykJb7jZ78ku8QgNgxdXmRLq4ZEgWHze2MIyMLde7biuluOzBolmooHTSf5agywx2BSTbK3Zr9M~XVtXahbKz9E~ebRlEMspwWkBKxTk21J-oMRzcOqkKkR4b1c2HBiZfxsrLyFIu8MvA__",
      productType: "Sport",
      price: "$80.00",
      realPrice: "$100.00",
      rotate: "transform -scale-x-100",
      fuel: "80L",
      transmission: "Manual",
      people: "2 People",
    },
    {
      id: 3,
      name: "Rolls - Royce",
      image:
        "https://s3-alpha-sig.figma.com/img/2e45/bdb6/4d6f5df6dab1d18d948223ba47972f21?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A5nyn9RgB4eqTq02dpEcvYvL3ptldP5f5WK2ksHJ4Iv9-vJ0MmaVzc9Q-SJ5eIzQaJZYtSinbEggiXnLnBSYFtzeKVBoaSQwjZ71PMdlv0KkSrFu3Za2i3h0C0L0u9A7dIvmLyFOqrxRGvoZ5-OGDLCfWCnaQ~lCIL2jgIrzY7vaUFYCfcJeEOdyZ1fDQbwnE2g6SjBB1b3AaQaoW3tPfUM8pO0XCe1NreNY4bVl4nMLhcc9JAf~1VHwAo-wBtJWlohna3p~7v~rtzifJDzu1-DUqkv~EKtoKrtDnRW6DmiIAk0ZrvP8goFEMe8muKQTmlIb6VQASJsKNor80l9GkA__",
      productType: "Sedan",
      price: "$96.00",
      realPrice: [],
      rotate: "transform -scale-x-100",
      fuel: "70L",
      transmission: "Manual",
      people: "4 People",
    },
    {
      id: 4,
      name: "All New Rush",
      image:
        "https://s3-alpha-sig.figma.com/img/5093/2266/1844e6b8d2bc7a68f501d79e35f5f4ab?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SdN8iW15PDbK4cVqRtCQUG2K5cfb7LE5D6UCJDliqiQuiT-Z0a8LQbR9pZi-U5Rv~hx6qfXEcTdnaExVwNzdVwG-qO3jqy5Mc2Y9LxaWyWDrXAWK4YUgk2FHMLYg2nW~4vkmvC1kvwHD15i3q57oSLNRuz6Rl8CHZ0bEGGWR8-FYeC0OCIVnPGYcWoL4ovgiWue5ODDf5X78akt-CoWVwMJHm3SHPvccjZNdcgHbcBSbOXqREwMas-PLdq~ReduBDUw3TUPyIBXxz20Urn6p2ToUflpBAER1QDa1FllKC25r9-MJWwU6a0c7gIEtHCagFSnVBpZWhqQUzIsq6jjQQg__",
      productType: "SUV",
      price: "$72.00",
      realPrice: "$80.00",
      rotate: "",
      fuel: "70L",
      transmission: "Manual",
      people: "6 People",
    },
    {
      id: 5,
      name: "CR  - V",
      image:
        "https://s3-alpha-sig.figma.com/img/92f7/4dec/074acdd579ecaf8742bac9eede524b1f?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hZMPmGCoBWWx65GZwfMgmMwXhPsCBfR5-TlV82g83jv2zMjZsp4saOu8HOlX0GjsULi~jlCmTrBysitEuvwSjSp3gKdgf7TbkTBBBNdWzGhNmfpFSPkfQ481DCST8p95esVonIIsgR39yaCIrkNH8pnkGlwtSC5-Mcai~cTKQZs3lqTfaens~2RuukSJnjh6~QDlI9x-jwb~c69oG6JbwxHBpi67pnUDGgJzHh76ez~ltcP5XWyy4fGAT6LZYy43qeix4h7lxFDkoCSqmnC5DCeiU29WJxJUajAKAUwX63D9126-pc7kufHZCneuaEDcu0lU7X6I0EqBn7Oh~HPdDw__",
      productType: "SUV",
      price: "$80.00",
      realPrice: "",
      rotate: "transform -scale-x-100",
      fuel: "80L",
      transmission: "Manual",
      people: "6 People",
    },
    {
      id: 6,
      name: "All New Terios",
      image:
        "https://s3-alpha-sig.figma.com/img/5093/2266/1844e6b8d2bc7a68f501d79e35f5f4ab?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SdN8iW15PDbK4cVqRtCQUG2K5cfb7LE5D6UCJDliqiQuiT-Z0a8LQbR9pZi-U5Rv~hx6qfXEcTdnaExVwNzdVwG-qO3jqy5Mc2Y9LxaWyWDrXAWK4YUgk2FHMLYg2nW~4vkmvC1kvwHD15i3q57oSLNRuz6Rl8CHZ0bEGGWR8-FYeC0OCIVnPGYcWoL4ovgiWue5ODDf5X78akt-CoWVwMJHm3SHPvccjZNdcgHbcBSbOXqREwMas-PLdq~ReduBDUw3TUPyIBXxz20Urn6p2ToUflpBAER1QDa1FllKC25r9-MJWwU6a0c7gIEtHCagFSnVBpZWhqQUzIsq6jjQQg__",
      productType: "SUV",
      price: "$74.00",
      realPrice: "",
      rotate: "",
      fuel: "90L",
      transmission: "Manual",
      people: "6 People",
    },
    {
      id: 7,
      name: "MG ZX Exclusice",
      image:
        "https://s3-alpha-sig.figma.com/img/f699/abef/3f5cf908bc1ebc5bf5c91aca676e4157?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TjGA-NCCHiJ2zYK28yCrqLZHAmKN4A3l47Og6B9tLnT5ZkZHmxoEbcfrzva5cQyFdcW0qtgO0ck9Y0YL36hrZASmRYvBat~hkNmyj26Xl-Y7eYfQPrWXGK6eGUZNyExyGpxWCFVDLyrkMgskX1vi7-v6b4WPA6tgs4FJPRwDfA1rCFXnSpJXIuk2lXbLTuqSn-iQOlY90wnjSG8pMIxQxo2gcPWQxjph0RpcIy0v5FZr3E3aKPLRZEhJEUvxKuMiB2AY0exRsUGfutr36Zu65H1zvwi5vRoIF0dBklj2uRfiyNcw9tOKtIdnADhlgjjeJvF0rAq0BFgljlxYdywBkQ__",
      productType: "Hatchback",
      price: "$76.00",
      realPrice: "$80.00",
      rotate: "",
      fuel: "70L",
      transmission: "Manual",
      people: "4 People",
    },
    {
      id: 8,
      name: "New MG ZS",
      image:
        "https://s3-alpha-sig.figma.com/img/2ed7/5540/73defa787d71b948931bdf156be51493?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NS3VlieDa9H56xb2dBvxyh6F7861IW3~4Poj-uZPfRjVpNWYve9lEwy5uRekDQCoF4h~41J6k3eHLeiXejHQ~G88sJHaeWD3FenXoJPWbkWWGRM~926f1xj7bWqLFjxyLrhEFgXNWeXD79elZLWOasyMai5PsnuNkS5kk8ii-So6icD5JDYQHXt2fDtAclka1hkx6-0fqFoIraImRbXNZVOJsa3c3DxTjxGQ9llkYPZpYQHm0CJvsRVmQVIQ9mTOAKVnFY7PYK3axi7kXVikXVnJp6CK1sOl8fJJBCkkDdAa5CUrHt4VQbproz15u0pXh9XQ37UhMA3Shha~yO65mw__",
      productType: "SUV",
      price: "$80.00",
      realPrice: "",
      rotate: "transform -scale-x-100",
      fuel: "80L",
      transmission: "Manual",
      people: "6 People",
    },
    {
      id: 9,
      name: "MG ZX Excite",
      image:
        "https://s3-alpha-sig.figma.com/img/f699/abef/3f5cf908bc1ebc5bf5c91aca676e4157?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TjGA-NCCHiJ2zYK28yCrqLZHAmKN4A3l47Og6B9tLnT5ZkZHmxoEbcfrzva5cQyFdcW0qtgO0ck9Y0YL36hrZASmRYvBat~hkNmyj26Xl-Y7eYfQPrWXGK6eGUZNyExyGpxWCFVDLyrkMgskX1vi7-v6b4WPA6tgs4FJPRwDfA1rCFXnSpJXIuk2lXbLTuqSn-iQOlY90wnjSG8pMIxQxo2gcPWQxjph0RpcIy0v5FZr3E3aKPLRZEhJEUvxKuMiB2AY0exRsUGfutr36Zu65H1zvwi5vRoIF0dBklj2uRfiyNcw9tOKtIdnADhlgjjeJvF0rAq0BFgljlxYdywBkQ__",
      productType: "SUV",
      price: "$74.00",
      realPrice: "",
      rotate: "",
      fuel: "90L",
      transmission: "Manual",
      people: "4 People",
    },
  ];
  return (
    <div className="bg-[#F6F7F9] font-jakarta">
      <Navbar />
      <div className="flex">
        <aside class="flex flex-col w-[360px] px-5overflow-y-auto bg-white border-r absolute md:static py-[32px] invisible md:visible">
          <div class="flex flex-col justify-between flex-1 mt-6">
            <nav class="px-[32px]">
              <div class="flex flex-col gap-[28px]">
                <label class="text-[12px] text-[#90A3BF]">TYPE</label>
                <div className="flex flex-col gap-[32px]">
                  <div className="flex gap-[8px] items-center">
                    <input
                      type="checkbox"
                      class="accent-[#3563E9] h-[20px] w-[20px]"
                    />
                    <h1 className="text-[#596780] text-[18px] font-bold">
                      Sport <span className="text-[#90A3BF]">(10)</span>
                    </h1>
                  </div>
                  <div className="flex gap-[8px] items-center">
                    <input
                      type="checkbox"
                      class="accent-[#3563E9] h-[20px] w-[20px]"
                    />
                    <h1 className="text-[#596780] text-[18px] font-bold">
                      SUV <span className="text-[#90A3BF]">(12)</span>
                    </h1>
                  </div>
                  <div className="flex gap-[8px] items-center">
                    <input
                      type="checkbox"
                      class="accent-[#3563E9] h-[20px] w-[20px]"
                    />
                    <h1 className="text-[#596780] text-[18px] font-bold">
                      MPV <span className="text-[#90A3BF]">(16)</span>
                    </h1>
                  </div>
                  <div className="flex gap-[8px] items-center">
                    <input
                      type="checkbox"
                      class="accent-[#3563E9] h-[20px] w-[20px]"
                    />
                    <h1 className="text-[#596780] text-[18px] font-bold">
                      Sedan <span className="text-[#90A3BF]">(20)</span>
                    </h1>
                  </div>
                  <div className="flex gap-[8px] items-center">
                    <input
                      type="checkbox"
                      class="accent-[#3563E9] h-[20px] w-[20px]"
                    />
                    <h1 className="text-[#596780] text-[18px] font-bold">
                      Coupe <span className="text-[#90A3BF]">(14)</span>
                    </h1>
                  </div>
                  <div className="flex gap-[8px] items-center">
                    <input
                      type="checkbox"
                      class="accent-[#3563E9] h-[20px] w-[20px]"
                    />
                    <h1 className="text-[#596780] text-[18px] font-bold">
                      hatchback <span className="text-[#90A3BF]">(14)</span>
                    </h1>
                  </div>
                </div>

                <label class="text-[12px] text-[#90A3BF]">CAPACITY</label>
                <div className="flex flex-col gap-[32px]">
                  <div className="flex gap-[8px] items-center">
                    <input
                      type="checkbox"
                      class="accent-[#3563E9] h-[20px] w-[20px]"
                    />
                    <h1 className="text-[#596780] text-[18px] font-bold">
                      2 Person <span className="text-[#90A3BF]">(10)</span>
                    </h1>
                  </div>
                  <div className="flex gap-[8px] items-center">
                    <input
                      type="checkbox"
                      class="accent-[#3563E9] h-[20px] w-[20px]"
                    />
                    <h1 className="text-[#596780] text-[18px] font-bold">
                      4 person <span className="text-[#90A3BF]">(12)</span>
                    </h1>
                  </div>
                  <div className="flex gap-[8px] items-center">
                    <input
                      type="checkbox"
                      class="accent-[#3563E9] h-[20px] w-[20px]"
                    />
                    <h1 className="text-[#596780] text-[18px] font-bold">
                      6 Person <span className="text-[#90A3BF]">(16)</span>
                    </h1>
                  </div>
                  <div className="flex gap-[8px] items-center">
                    <input
                      type="checkbox"
                      class="accent-[#3563E9] h-[20px] w-[20px]"
                    />
                    <h1 className="text-[#596780] text-[18px] font-bold">
                      8 Person or More{" "}
                      <span className="text-[#90A3BF]">(20)</span>
                    </h1>
                  </div>
                </div>

                <label class="text-[12px] text-[#90A3BF]">PRICE</label>
                <div class="w-[296px]">
                  <input
                    id="range"
                    type="range"
                    class="block w-full text- accent-[#3563E9] border border-gray-300 rounded-md "
                  ></input>
                  <h1 className="text-[18px] text-[#596780] font-semibold">
                    Max. $100.00
                  </h1>
                </div>
              </div>
            </nav>
          </div>
        </aside>

        <div className="py-[32px] flex gap-[32px] flex-col justify-center px-[14px] md:px-[32px]">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-[32px]">
            <div className="flex flex-col gap-[24px]">
              <div
                className="bg-cover h-[360px] rounded-[10px] p-[24px]"
                style={{ backgroundImage: `url(${bg2})` }}
              >
                <div className="w-[372px]">
                  <h1 className="text-white text-[32px] font-semibold">
                    Sports car with the best design and acceleration
                  </h1>
                  <h2 className="text-white text-[16px] font-medium">
                    Safety and comfort while driving a futuristic and elegant
                    sports car
                  </h2>
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TlxD1EFa5IgILQkx7E8nAM2gVSI7YHeiyg-P9fz3h1hdYAQaFktMArOxztQzMxon~UIIHeFRD90jTfMa1zpsKtcrYJphU42YQhCikspf8ZkNo1SEVlfhgH11UPXeZ~g~l~UqP~ijnDZRFm1WMrZRAZ7kAYDNUZ7N-ZuKBvOcWc7aco4d9Ai9d1qZR5GATvaLrjINiepD9GykJb7jZ78ku8QgNgxdXmRLq4ZEgWHze2MIyMLde7biuluOzBolmooHTSf5agywx2BSTbK3Zr9M~XVtXahbKz9E~ebRlEMspwWkBKxTk21J-oMRzcOqkKkR4b1c2HBiZfxsrLyFIu8MvA__"
                    className="object-cover transform -scale-x-100 w-[380px] h-[200px]"
                    alt="background"
                  ></img>
                </div>
              </div>
              <div className="flex justify-between">
                <div
                  className="bg-cover h-[124px] w-[148px] rounded-[10px] "
                  style={{ backgroundImage: `url(${detail3})` }}
                ></div>
                <div
                  className="bg-cover h-[124px] w-[148px] rounded-[10px] "
                  style={{ backgroundImage: `url(${detail2})` }}
                ></div>
                <div
                  className="bg-cover h-[124px] w-[148px] rounded-[10px] "
                  style={{ backgroundImage: `url(${detail1})` }}
                ></div>
              </div>
            </div>
            <div className="bg-white rounded-[10px] h-[508px]">
              <div className="flex flex-col gap-[32px] p-[24px]">
                <div className="flex items-center justify-between">
                  <h1 className="text-[32px] font-bold ">Nissan GT - R</h1>
                  <IconContext.Provider
                    value={{ color: "#ED3F3F", size: "24px" }}
                  >
                    <div>
                      <FaHeart />
                    </div>
                  </IconContext.Provider>
                </div>

                <div className="flex gap-[8px]">
                  <div className="flex">
                    <IconContext.Provider
                      value={{ color: "#FBAD39", size: "24px" }}
                    >
                      <div>
                        <FaStar />
                      </div>
                    </IconContext.Provider>
                    <IconContext.Provider
                      value={{ color: "#FBAD39", size: "24px" }}
                    >
                      <div>
                        <FaStar />
                      </div>
                    </IconContext.Provider>
                    <IconContext.Provider
                      value={{ color: "#FBAD39", size: "24px" }}
                    >
                      <div>
                        <FaStar />
                      </div>
                    </IconContext.Provider>
                    <IconContext.Provider
                      value={{ color: "#FBAD39", size: "24px" }}
                    >
                      <div>
                        <FaStar />
                      </div>
                    </IconContext.Provider>
                    <IconContext.Provider
                      value={{ color: "#90A3BF", size: "24px" }}
                    >
                      <div>
                        <FaRegStar />
                      </div>
                    </IconContext.Provider>
                  </div>
                  <h2>440+ Reviewer</h2>
                </div>

                <div>
                  <h1 className="text-[#596780] text-[20px]">
                    NISMO has become the embodiment of Nissan's outstanding
                    performance, inspired by the most unforgiving proving
                    ground, the "race track".
                  </h1>
                </div>

                <div className="flex flex-col gap-[12px] md:flex-row justify-between">
                  <div>
                    <div className="flex w-[200px] justify-between">
                      <h1>Type Car</h1>
                      <h2>Sport</h2>
                    </div>
                    <div className="flex w-[200px] justify-between">
                      <h1>Steering</h1>
                      <h2>Manual</h2>
                    </div>
                  </div>
                  <div>
                    <div className="flex w-[200px] justify-between">
                      <h1>Capacity</h1>
                      <h2>2 Person</h2>
                    </div>
                    <div className="flex w-[200px] justify-between">
                      <h1>Gasoline</h1>
                      <h2>70L</h2>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-[1px]">
                    <h1 className="text-[20px] text-[#1A202C] font-bold">
                      $80.00
                      <span className="text-[14px] text-[#90A3BF]">/day</span>
                    </h1>
                    <s className="text-[#90A3BF] text-[14px]">$100.00</s>
                  </div>
                  <Link to="/payment">
                    <button className="h-[44px] w-[116px] bg-[#3563E9] text-white text-[16px] font-semibold rounded-[4px]">
                      Rent Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[32px] bg-white p-[24px]">
            <div className="rounded-[10px] flex items-center gap-[12px]">
              <h1>Reviews</h1>
              <div className="flex items-center justify-center text-[white] h-[28px] w-[44px] bg-[#3563E9] rounded-[4px]">
                13
              </div>
            </div>

            <div className="flex gap-[16px]">
              <button className="flex items-center justify-center h-[50px] w-[50px] rounded-full  border-[#C3D4E966] border-[1px]">
                <img
                  src="https://s3-alpha-sig.figma.com/img/f1f5/6cb5/7c6c5d88e94501a481b5f732536c2851?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D8qgOX44eueluIYxFpPYwmktdf9nJUjdp2kfkgS2rjllpSIA16hKnL2owGfDYohm63pZBO7zjjrCCnkpouOECDNLGbFybkj72VE~kyWp0oOyPSnV1ezx3XKwX3ImeoXQKzAIhkROSNpl--z5z2VnbDGRMT6JK0-7w0EV7juqF9LoBp4s-jlftQ9dcM6ARclrDSO5PF2zn3Gr2GStkKnOKktfADZOYXCKzEnczhRDvlvj19z4fN7AHUHJU73SDkBqbm2DcsBNMa5KlmVAlWmKc94LUAigQFXdJVnKZG7bICQAszZqKiqVa1uInAmwK3BGCxQ6mhaff195E7rTg1eYKw__"
                  className="rounded-full "
                  alt="bakcground"
                />
              </button>
              <div className="flex flex-col w-[250px] lg:w-[896px] gap-[12px]">
                <div className="flex justify-between">
                  <div className="flex flex-col gap-[8px]">
                    <h1 className="text-[20px] font-bold text-[#1A202C]">
                      Alex Stanton
                    </h1>
                    <h1 className="text-[14px] text-[#90A3BF] font-medium">
                      CEO at Bukalapak
                    </h1>
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <h1 className="text-[14px] text-[#90A3BF] font-medium text-right">
                      21 July 2022
                    </h1>
                    <div className="flex">
                      <IconContext.Provider
                        value={{ color: "#FBAD39", size: "24px" }}
                      >
                        <div>
                          <FaStar />
                        </div>
                      </IconContext.Provider>
                      <IconContext.Provider
                        value={{ color: "#FBAD39", size: "24px" }}
                      >
                        <div>
                          <FaStar />
                        </div>
                      </IconContext.Provider>
                      <IconContext.Provider
                        value={{ color: "#FBAD39", size: "24px" }}
                      >
                        <div>
                          <FaStar />
                        </div>
                      </IconContext.Provider>
                      <IconContext.Provider
                        value={{ color: "#FBAD39", size: "24px" }}
                      >
                        <div>
                          <FaStar />
                        </div>
                      </IconContext.Provider>
                      <IconContext.Provider
                        value={{ color: "#90A3BF", size: "24px" }}
                      >
                        <div>
                          <FaRegStar />
                        </div>
                      </IconContext.Provider>
                    </div>
                  </div>
                </div>

                <h1 className="text-[14px] text-[#596780]">
                  We are very happy with the service from the MORENT App. Morent
                  has a low price and also a large variety of cars with good and
                  comfortable facilities. In addition, the service provided by
                  the officers is also very friendly and very polite.
                </h1>
              </div>
            </div>

            <div className="flex gap-[16px]">
              <button className="flex items-center justify-center h-[50px] w-[50px] rounded-full  border-[#C3D4E966] border-[1px]">
                <img
                  src="https://s3-alpha-sig.figma.com/img/1f59/2390/d69545d7cf9ff5be12e2248ebf54993a?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O0POzmCnJdV9cAzWpWnrC5id0aJjC4oafX1PidVx2SvB5a9GdktO6VuLGE1sBjiSPI0IY-~xKUXYhsT7m1rCnrDW~2ls-u8s5~DH3VoKV-Z2GgHKw3TyySgUn8FvXMMZaAWbejuu~SrQX3IUjphamqXIFOxpOlmIpT~OWx3JrBlxSu~hV8qf2T8CGrTUgLqrS3SEmsFgDq1nyb3N3WG9ZMzw-bKLc~kv2VzSfnVZgg4nns0-iu1TSirfkYUDh8mMNS~LhWFd7va1E4RPgkmgCs8mfPMrZ3dfGvLlrVK4xORcSd2f2HPTHIUNOfJM5Q2LUMSEO~~m7EV3VHa-jK4GNQ__"
                  className="rounded-full "
                  alt="background"
                />
              </button>
              <div className="flex flex-col w-[200px] lg:w-[896px] gap-[12px]">
                <div className="flex justify-between">
                  <div className="flex flex-col gap-[8px]">
                    <h1 className="text-[20px] font-bold text-[#1A202C]">
                      Skylar Dias
                    </h1>
                    <h1 className="text-[14px] text-[#90A3BF] font-medium">
                      CEO at Amazon
                    </h1>
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <h1 className="text-[14px] text-[#90A3BF] font-medium text-right">
                      20 July 2022
                    </h1>
                    <div className="flex">
                      <IconContext.Provider
                        value={{ color: "#FBAD39", size: "24px" }}
                      >
                        <div>
                          <FaStar />
                        </div>
                      </IconContext.Provider>
                      <IconContext.Provider
                        value={{ color: "#FBAD39", size: "24px" }}
                      >
                        <div>
                          <FaStar />
                        </div>
                      </IconContext.Provider>
                      <IconContext.Provider
                        value={{ color: "#FBAD39", size: "24px" }}
                      >
                        <div>
                          <FaStar />
                        </div>
                      </IconContext.Provider>
                      <IconContext.Provider
                        value={{ color: "#FBAD39", size: "24px" }}
                      >
                        <div>
                          <FaStar />
                        </div>
                      </IconContext.Provider>
                      <IconContext.Provider
                        value={{ color: "#90A3BF", size: "24px" }}
                      >
                        <div>
                          <FaRegStar />
                        </div>
                      </IconContext.Provider>
                    </div>
                  </div>
                </div>

                <h1 className="text-[14px] text-[#596780]">
                  We are greatly helped by the services of the MORENT
                  Application. Morent has low prices and also a wide variety of
                  cars with good and comfortable facilities. In addition, the
                  service provided by the officers is also very friendly and
                  very polite.
                </h1>
              </div>
            </div>

            <div className="flex gap-[8px] items-center justify-center">
              <h1 className="text-[#90A3BF] text-[16px]">Show All</h1>
              <IconContext.Provider value={{ color: "#90A3BF", size: "16px" }}>
                <div>
                  <FaAngleDown />
                </div>
              </IconContext.Provider>
            </div>
          </div>

          <div className="flex flex-col gap-[20px] items-center justify-center my-[36px]">
            <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-[46px]">
              {CategoryCar.map((CategoryCar) => (
                <Card
                  key={CategoryCar.id}
                  image={CategoryCar.image}
                  name={CategoryCar.name}
                  price={CategoryCar.price}
                  productType={CategoryCar.productType}
                  rotate={CategoryCar.rotate}
                  realPrice={CategoryCar.realPrice}
                  fuel={CategoryCar.fuel}
                  transmission={CategoryCar.transmission}
                  people={CategoryCar.people}
                />
              ))}
            </div>
            <button className="h-[44px] mt-[64px] w-[160px] bg-[#3563E9] text-white text-[16px] font-semibold rounded-[4px]">
              Show More Car
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
