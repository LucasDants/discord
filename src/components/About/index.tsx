import AboutCard from "../AboutCard";

export default function About() {
  return (
    <div className="mt-8 mb-8">
      <h2 className="text-2xl font-bold mb-4">About trivago</h2>

      <section className="flex flex-col gap-4  lg:flex-row">
        <AboutCard
          title="trivago's global hotel search"
          content="trivago’s hotel search allows users to compare hotel prices in just afew clicks from hundreds of booking sites for more than 5.0 millionhotels and other types of accommodation in over 190 countries. We help millions of travelers each year compare deals for hotels andaccommodations. Get information for trips to cities like"
          contentClassName="leading-5"
        />
        <AboutCard
          title="Find cheap hotels on trivago"
          content="With trivago you can easily find your ideal hotel and compare prices from different websites. Simply enter where you want to go and your desired travel dates, and let our hotel search engine compare accommodation prices for you. To refine your search results, simply filter by price, distance (e.g. from the beach), star category, facilities and more. From budget hostels to luxury suites, trivago makes it easy to book online. You can search from a large variety of rooms and locations across the USA, like San Francisco and Chicago to popular cities and holiday destinations abroad!"
        />
      </section>

      <section className="flex flex-col gap-4 lg:flex-row mt-4">
        <AboutCard
          title="Hotel reviews help you find your ideal hotel"
          content="Over 175 million aggregated hotel ratings and more than 19 million images allow you to find out more about where you're traveling. To get an extended overview of a hotel property, trivago shows the average rating and extensive reviews from other booking sites, e.g. Hotels.com, Expedia, Agoda, leading hotels, etc. trivago makes it easy for you to find information about your trip to Miami Beach, including the ideal hotel for you."
        />
        <AboutCard
          title="trivago's global hotel search"
          content="trivago is a hotel search with an extensive price comparison. The prices shown come from numerous hotels and booking websites. This means that while users decide on trivago which hotel best suits their needs, the booking process itself is completed through the booking sites (which are linked to our website). By clicking on the “view deal” button, you will be forwarded onto a booking site where you can complete the reservation for the hotel deal found on trivago.
            Let trivago help you to find the right price from hundreds of booking sites!"
        />
      </section>
    </div>
  );
}
