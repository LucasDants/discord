"use client";

import { useState } from "react";
import SearchHotelCard from "../SearchHotelCard";

interface City {
  place: string;
  hotels: string;
  avg: number;
  image: string;
}

export default function PopularSearches() {
  const [optionActive, setOptionActive] = useState<"CITIES" | "DESTINATIONS">(
    "CITIES"
  );

  const cities = [
    {
      place: "Las Vegas",
      hotels: "1.251",
      avg: 300,
      image:
        "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_258,q_auto,w_258/categoryimages/14/66/14667_v10.jpeg",
    },
    {
      place: "Rio de Janeiro",
      hotels: "506",
      avg: 80,
      image: "https://media.timeout.com/images/105482246/750/562/image.jpg",
    },
    {
      place: "Nova york",
      hotels: "1.987",
      avg: 500,
      image:
        "https://img.freepik.com/fotos-gratis/central-park-em-manhattan-nova-york-um-enorme-e-belo-parque-rodeado-por-um-arranha-ceu-com-um-lago_181624-50335.jpg?w=2000",
    },
  ];

  const destinations = [
    {
      place: "Japan",
      hotels: "4.123",
      avg: 280,
      image:
        "https://cdn.ceoworld.biz/wp-content/uploads/2022/09/japanese-flag.jpg",
    },
    {
      place: "USA",
      hotels: "165.810",
      avg: 240,
      image:
        "https://www.infomoney.com.br/wp-content/uploads/2019/09/bandeira-dos-eua.jpg?resize=900%2C515&quality=50&strip=all",
    },
    {
      place: "Texas",
      hotels: "1.543",
      avg: 170,
      image:
        "https://lp-cms-production.imgix.net/2020-11/shutterstockRF_644626162.jpg",
    },
  ];

  return (
    <div className="flex flex-col items-center lg:items-start ">
      <h2 className="text-2xl font-bold mb-1">Popular searchers</h2>
      <section className="">
        <span
          onClick={() => setOptionActive("CITIES")}
          className={`text-sm px-4 cursor-pointer font-bold  p-1 ${
            optionActive === "CITIES"
              ? "border-b-2 border-b-slate-800 text-slate-800"
              : "border-b border-b-slate-300 text-gray-600"
          } `}
        >
          Cities
        </span>
        <span
          onClick={() => setOptionActive("DESTINATIONS")}
          className={`text-sm px-4 cursor-pointer font-bold p-1  ${
            optionActive === "DESTINATIONS"
              ? "border-b-2 border-b-slate-800 text-slate-800"
              : "border-b border-b-slate-300 text-gray-400"
          }`}
        >
          Destinations
        </span>
      </section>

      <section className="mt-4 flex flex-col lg:flex-row flex-nowrap gap-4 lg:flex-wrap  ">
        {optionActive === "CITIES"
          ? cities.map((item: City, index) => (
              <SearchHotelCard
                key={index}
                place={item.place}
                hotels={item.hotels}
                avg={item.avg}
                image={item.image}
              />
            ))
          : destinations.map((item: City, index) => (
              <SearchHotelCard
                key={index}
                place={item.place}
                hotels={item.hotels}
                avg={item.avg}
                image={item.image}
              />
            ))}
      </section>
    </div>
  );
}
