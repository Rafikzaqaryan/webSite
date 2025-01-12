import React from "react";

export default function BestOffers() {
  const BestOffersObj = [
    {
      img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1727006467456--0.9643954207029866image.webp&w=1920&q=75",
      location: "Ծաղկաձոր",
      people: 30,
      price: "130,000֏",
    },
    {
      img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1720431645311--0.6727866082559382image.webp&w=1920&q=75",
      location: "Օհանավան",
      people: 30,
      price: "100,000֏",
    },
    {
      img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1712326380269--0.8338032430416125image.webp&w=1920&q=75",
      location: "Բջնի",
      people: "25",
      price: "90,000֏",
    },
    {
      img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1712567462741--0.9299629007114927image.webp&w=1920&q=75",
      location: "Օհանավան",
      people: 25,
      price: "80,000֏",
    },
    {
      img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1712326262418--0.2228210355979272image.webp&w=1920&q=75",
      location: "Նոր Հաճն",
      people: 25,
      price: "130,000֏",
    },
    {
      img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1719483738178--0.17939100328131374image.webp&w=1920&q=75",
      location: "Արզնի",
      people: 50,
      price: "150,000֏",
    },
    {
      img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1733690961413--0.3657082475795794image.webp&w=1920&q=75",
      location: "Պտղնի",
      people: 30,
      price: "100,000֏",
    },
    {
      img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1714474323656--0.9516964541315607image.webp&w=1920&q=75",
      location: "Ծաղկաձոր",
      people: "6",
      price: "55,000֏",
    },
    {
      img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1726755455709--0.42990686786537236image.webp&w=1920&q=75",
      location: "Ծաղկաձոր",
      people: 15,
      price: "100,000֏",
    },
  ];

  function Boffers({ img, location, people, price }) {
    return (
      <div className="shadow-md w-[340px] h-[400px] rounded-[10px]">
        <img src={img} className="w-[340px] h-[270px] rounded-[10px]" />
        <div className="flex gap-7 pt-6 text-[20px] pl-[20px] ">
          <div className="flex gap-2 items-center">
            <img src="	https://amaranoc.am/images/location-outlined.svg" />
            <strong>
              <p className="text-[14px]">{location}</p>
            </strong>
          </div>
          <div className="flex gap-2 items-center">
            <img
              src="https://amaranoc.am/images/peoples.svg"
              className="bg-[#fd993a]"
            />
            <strong>
              <p className="text-[14px]">{people}</p>
            </strong>
          </div>
        </div>
        <div className="flex items-center gap-2 pl-[20px] pt-[40px]">
          <img src="https://amaranoc.am/images/price.svg" />
          <strong>
            <p className="text-[20px] text-[#575b65] ">{price}</p>
          </strong>
        </div>
      </div>
    );
  }

  return (
    <div>
      <strong>
        <h1 className="mt-[30px] pb-[20px] text-[16px]">
          Լավագույն առաջարկներ
        </h1>
      </strong>
      <div className=" w-[1000px] h-[1px] bg-[#f3f3f4] mr-[30px] mb-[25px] "></div>
      <div className="grid grid-cols-3 pr-[20px] gap-[20px]">
        {BestOffersObj.map((el, i) => (
          <Boffers
            key={i}
            img={el.img}
            location={el.location}
            people={el.people}
            price={el.price}
          />
        ))}
      </div>
    </div>
  );
}
