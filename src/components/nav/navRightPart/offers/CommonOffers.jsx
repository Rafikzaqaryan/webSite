import React from "react";

export default function CommonOffers() {
  const CommonOffersObj = [
    {
      img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1736346552291--0.2011945066547416image.webp&w=1920&q=75",
      location: "Ծաղկաձոր",
      people: 20,
      price: "100,000֏",
    },
    {
      img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1736346067846--0.48136685223654463image.webp&w=1920&q=75",
      location: "Ծաղկաձոր",
      people: 8,
      price: "55,000֏",
    },
    {
      img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1736264307372--0.5923133238359417image.webp&w=1920&q=75",
      location: "Ծաղկաձոր",
      people: "6",
      price: "45,000֏",
    },
    {
      img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1736262949713--0.5438384878532811image.webp&w=1920&q=75",
      location: "Ծաղկաձոր",
      people: 8,
      price: "65,000֏",
    },
    {
      img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1735309341998--0.18031243054065027image.webp&w=1920&q=75",
      location: "Արզական",
      people: 10,
      price: "60,000֏",
    },
    {
      img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1735307864481--0.8688546137086155image.webp&w=1920&q=75",
      location: "Քասախ",
      people: 35,
      price: "120,000֏",
    },
    {
      img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1735305286415--0.799977604430975image.webp&w=1920&q=75",
      location: "Դիլիջան",
      people: 8,
      price: "25,000֏",
    },
    {
      img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1735302502172--0.7882695720958692image.webp&w=1920&q=75",
      location: "Վանաձոր",
      people: "6",
      price: "30,000֏",
    },
    {
      img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1735208216841--0.47958082625854104image.webp&w=1920&q=75",
      location: "Թեղենիք",
      people: 6,
      price: "25,000֏",
    },
    {
      img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1735208216926--0.575560672303761image_optimized.webp&w=1920&q=75",
      location: "Փարպի",
      people: 40,
      price: "90,000֏",
    },
    {
      img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1735139871522--0.9363023689593835image.webp&w=1920&q=75",
      location: "Դիլիջան",
      people: 9,
      price: "50,000֏",
    },
    {
      img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1735135057801--0.6317828904538976image.webp&w=1920&q=75",
      location: "Աբովյան",
      people: 6,
      price: "55,000֏",
    },
    {
      img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1734367996611--0.7693558188586858image.webp&w=1920&q=75",
      location: "Երևան",
      people: 15,
      price: "190,000֏",
    },
    {
      img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1733224666202--0.8153535162596828image.webp&w=1920&q=75",
      location: "Ջերմուկ",
      people: 3,
      price: "35,000֏",
    },
    {
      img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1733224168744--0.13257965616354328image.webp&w=1920&q=75",
      location: "Ջերմուկ",
      people: 6,
      price: "45,000֏",
    },
    {
      img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1732616461198--0.021505565479176703image.webp&w=1920&q=75",
      location: "Ձորաղբյուր",
      people: 20,
      price: "150,000 ֏",
    },
    {
      img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1731411482007--0.45614696210311423image.webp&w=1920&q=75",
      location: "Դիլիջան",
      people: 2,
      price: "28,000֏",
    },
    {
      img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1731407128796--0.3186545961368594image.webp&w=1920&q=75",
      location: "Դիլիջան",
      people: 3,
      price: "39,000֏",
    },
    {
      img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1731405544351--0.7949892613973097image.webp&w=1920&q=75",
      location: "Դիլիջան",
      people: 4,
      price: "45,000֏",
    },
    {
      img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1731333217263--0.6914223938412942image.webp&w=1920&q=75",
      location: "Դիլիջան",
      people: 30,
      price: "100,000֏",
    },
    {
      img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1731332854424--0.5791762463145675image.webp&w=1920&q=75",
      location: "Ծաղկաձոր",
      people: 8,
      price: "60,000֏",
    },
    {
      img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1731078802523--0.1465628567193431image.webp&w=1920&q=75",
      location: "Դիլիջան",
      people: 5,
      price: "22,000֏",
    },
    {
      img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1731078054258--0.9243326078962113image.webp&w=1920&q=75",
      location: "Դիլիջան",
      people: 7,
      price: "35,000֏",
    },
    {
      img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1731076889190--0.1412159534000028image.webp&w=1920&q=75",
      location: "Դիլիջան",
      people: 7,
      price: "65,000֏",
    },
    {
      img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1730991982185--0.9145516374270142image.webp&w=1920&q=75",
      location: "Գառնի",
      people: 4,
      price: "40,000֏",
    },
  ];

  function Coffers({ img, location, people, price }) {
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
        <div className="flex items-center gap-2 pl-[20px] pt-[20px]">
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
      <div>
        <strong>
          <h1 className="pb-[20px] pt-[30px] text-[16px]">
            Սովորական առաջարկներ
          </h1>
        </strong>
        <div className=" w-[1000px] h-[1px] bg-[#f3f3f4] mr-[30px] mb-[25px] "></div>
        <div className="grid grid-cols-3 pb-[100px] pr-[20px] gap-[20px]">
          {CommonOffersObj.map((el, i) => (
            <Coffers
              key={i}
              img={el.img}
              location={el.location}
              people={el.people}
              price={el.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
