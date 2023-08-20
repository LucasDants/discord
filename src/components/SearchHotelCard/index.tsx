type SarchHotelCard = {
  place: string;
  hotels: string;
  avg: number;
  image: string;
};

export default function SearchHotelCard({
  place,
  hotels,
  avg,
  image,
}: SarchHotelCard) {
  return (
    <div
      className="border-box p-4 w-60 h-72  justify-center  bg-no-repeat bg-cover bg-center rounded-lg"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <section className="inline-block bg-white text-base text-blue-600 px-4 py-1 rounded-full font-bold ">
        {place}
      </section>

      <section className="max-w-min mt-1 flex bg-white text-base text-blue-600 px-4 py-1 rounded-full font-bold ">
        {String(hotels).replace(".", ",")}&nbsp;
        <p className="text-black">Hotels</p>
      </section>

      <section className="max-w-min  mt-1 flex bg-white text-base text-blue-600 px-4 py-1 rounded-full font-bold ">
        <p className="text-black">Avg.&nbsp;</p> ${avg}
      </section>
    </div>
  );
}
