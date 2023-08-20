import Link from "next/link";

import Image from "next/image";

import Twitter from "../../assets/twitter-icon.svg";
import Facebook from "../../assets/facebook-icon.svg";
import Youtube from "../../assets/youtube-icon.svg";
import Instagram from "../../assets/instagram-icon.svg";
import Linkedin from "../../assets/linkedin-icon.svg";
import TrivagoText from "../../assets/trivago-text.svg";
import { SocialLink } from "../SocialLink";

interface FooterLink {
  title: string;
  link: string;
}

export default function Footer() {
  const footerLinks = [
    { title: "Company", link: "" },
    { title: "Jobs", link: "" },
    { title: "Press", link: "" },
    { title: "Investor relations", link: "" },
    { title: "Mobile apps - searching on the go", link: "" },
    { title: "Trivago Bussines studio", link: "" },
    { title: "Affiliate", link: "" },
    { title: "Help", link: "" },
    { title: "Learn how trivago works", link: "" },
    { title: "Terms and conditions", link: "" },
    { title: "Legal information", link: "" },
    { title: "Do not sell my personal information", link: "" },
    { title: "Privacy notice", link: "" },
    { title: "Cyber security", link: "" },
  ];

  return (
    <footer className="bg-gray-900 w-screen px-8 lg:px-72 py-10">
      <header className="flex justify-between">
        <Image src={TrivagoText} alt="Trivago" priority={true} />
        <section className="flex gap-2">
          <SocialLink
            icon={Facebook}
            link="https://www.facebook.com/trivagoUS"
          />
          <SocialLink icon={Twitter} link="" />
          <SocialLink icon={Instagram} link="" />
          <SocialLink icon={Youtube} link="" />
          <SocialLink icon={Linkedin} link="" />
        </section>
      </header>
      <select className="mt-5">
        <option selected className="text-sm">
          USA
        </option>
        <option className="text-sm">UNITED STATES</option>
      </select>
      <div className="mt-5 flex flex-col lg:flex-row justify-between">
        <section className="flex flex-col  gap-2 lg:grid lg:grid-cols-2 lg:gap-3">
          {footerLinks.map((item: FooterLink, index: number) => {
            return (
              <Link
                key={index}
                href={item.link}
                className="text-slate-300 text-xs"
              >
                {item.title}
              </Link>
            );
          })}
        </section>
        <section className="mt-5 lg:mt-0">
          <span className="text-white text-lg font-bold ">
            Want to <span className="text-sky-700">receive</span> exclusive
            accommodation offers?
            <br />
            Subscribe to our <span className="text-sky-700">newsletter</span>
          </span>
          <form className="flex flex-col lg:flex-row items-end gap-4">
            <input
              className="w-80 bg-transparent py-4 border-b-2 border-b-sky-700 outline-none text-white placeholder-white"
              placeholder="Email address"
            />
            <button
              type="submit"
              className="bg-blue-800 px-8 py-3  text-white  font-bold rounded-md"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-xs text-gray-400">
            <span className="font-bold">trivago N.V.</span>, Kesselstraße 5 – 7,
            40221 Düsseldorf, Germany <br />
            Copyright 2023 trivago | All rights reserved.
          </p>
        </section>
      </div>
    </footer>
  );
}
