import React from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  const popularCar = [
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
  ];

  const recomendationCar = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
    {
      id: 7,
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
  ];

  return (
    <div className="bg-[#F6F7F9] font-jakarta">
      <Navbar />
      <Hero />

      {/* Popular Car */}
      <div className="flex flex-col gap-[20px] items-center justify-center mt-[36px] px-[64px]">
        <div className="w-full flex justify-between ">
          <h1 className="px-[20px] py-[10px] text-[16px] text-medium text-[#90A3BF]">
            Popular Car
          </h1>
          <Link to="/category">
            <h1 className="px-[20px] py-[10px] text-[#3563E9] font-medium text-[16px]">
              View All
            </h1>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[32px]">
          {popularCar.map((popularCar) => (
            <Card
              key={popularCar.id}
              image={popularCar.image}
              name={popularCar.name}
              price={popularCar.price}
              productType={popularCar.productType}
              rotate={popularCar.rotate}
              realPrice={popularCar.realPrice}
              fuel={popularCar.fuel}
              transmission={popularCar.transmission}
              people={popularCar.people}
            />
          ))}
        </div>
      </div>

      {/* Recomendation Car */}
      <div className="flex flex-col gap-[20px] items-center justify-center my-[36px] px-[64px]">
        <div className="w-full flex justify-between">
          <h1 className="px-[20px] py-[10px] text-[16px] text-medium text-[#90A3BF]">
            Recomendation Car
          </h1>
          <h1 className="px-[20px] py-[10px] text-[#3563E9] font-medium text-[16px]">
            View All
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4  gap-[32px]">
          {recomendationCar.map((recomendationCar) => (
            <Card
              key={recomendationCar.id}
              image={recomendationCar.image}
              name={recomendationCar.name}
              price={recomendationCar.price}
              productType={recomendationCar.productType}
              rotate={recomendationCar.rotate}
              realPrice={recomendationCar.realPrice}
              fuel={recomendationCar.fuel}
              transmission={recomendationCar.transmission}
              people={recomendationCar.people}
            />
          ))}
        </div>
        <button className="h-[44px] mt-[64px] w-[160px] bg-[#3563E9] text-white text-[16px] font-semibold rounded-[4px]">
          Show More Car
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
