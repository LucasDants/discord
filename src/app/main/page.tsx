import About from "@/components/About";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HotelSearch from "@/components/HotelSearch";
import PopularSearches from "@/components/PopularSeachers";

export default function HomeLayout() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <div className="flex flex-col  bg-gray-100 w-screen p-1  lg:px-72 max-w-screen-2xl mx-auto">
        <HotelSearch />
        <PopularSearches />
        <About />
      </div>
      <Footer />
    </main>
  );
}
