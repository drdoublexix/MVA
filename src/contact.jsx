import logo from "./assets/logo.png";
import fb from "./assets/icons8-fb.svg";
import ig from "./assets/icons8-ig.svg";
import x from "./assets/icons8-x2.png"; //note that the x2 import is different
import youtube from "./assets/icons8-youtube.png";
import tiktok from "./assets/icons8-tiktok2.png";
import "./index.css";
import back from "./assets/back.png";
import menu from "./assets/menu2.jpeg";
import { Link } from "react-router";
import { useState } from "react";
import { list } from "./App.jsx";
import email from "./assets/icons8-email.png";
import location from "./assets/icons8-location.png";
import telephone from "./assets/icons8-telephone.png";
import time from "./assets/icons8-time.png";
import whatsapp from "./assets/whatsapp.png";

const ContactUs = () => {
  const [slide, setSlide] = useState(false);

  const toggleSlide = () => {
    setSlide(!slide);
  };

  return (
    <>
      <div className="flex">
        {/* Aside section */}
        <aside
          className={`heading fixed md:static ${slide ? "slide-in" : "slide-out"}`}
        >
          <ul className="list">
            <button className="menu " onClick={toggleSlide}>
              <img src={back} alt="Back" />
            </button>
            {list.map((item, index) => (
              <li key={index}>
                <Link to={item.path} className="header-button">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        <section className="w-full bg-black text-white p-3 h-[170px] md:text-3xl">
          <button
            className="fixed top-0 left-0 bg-[#999999] rounded-[50%] z-[20] md:cursor-pointer fixed h-[45px] w-[50px] "
            onClick={toggleSlide}
          >
            <img src={menu} alt="Menu" className="ml-3" />
          </button>

          <img
            src={logo}
            alt="Logo"
            className="absolute top-0 right-0 h-[35px] md:h-[55px] p-2 z-[50]"
          />
          <header className="text-center">
            <h1 className=" bolder text-2xl md:text-3xl">Contact us</h1>

            <span className="light text-xl">We'd love to hear from you</span>
          </header>
        </section>
      </div>
      <section className="p-4 text-center">
        <h1 className="text-slate-400 bolder2 text-2xl mb-[40px] md:text-4xl">
          Contact information
        </h1>
        <div className="card-divs">
          <a
            href="https://www.google.com/maps/search/?api=1&query=11.8333,13.1500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="general-card2 flex items-center justify-center bg-yellow-200">
              <div className="card-img">
                <img src={location} alt="card" />
              </div>
              {/* <span className="bolder text-[#332155]">
              Maiduguri, Borno State, Nigeria
            </span> */}
            </div>
          </a>

          <a href="mailto:meritandvalueawardsng@gmail.com">
            <div className="general-card2 flex items-center justify-center  bg-blue-200">
              <div className="card-img">
                <img src={email} alt="card" />
              </div>
              {/* <span className="bolder text-[#332155]">
                meritandvalue <br /> awardsng@gmail.com
              </span> */}
            </div>
          </a>

          <a
            href="https://wa.me/+2349071358268"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="general-card2 flex items-center justify-center bg-green-200">
              <div className="card-img">
                <img src={whatsapp} alt="card" />
              </div>
              {/* <span className="bolder text-[#332155]">
                +234 907 135 8268
              </span> */}
            </div>
          </a>

          <div className="general-card2 bg-gray-400">
            <div className="card-img">
              <img src={time} alt="card" />
            </div>
            <span className="bolder text-[#332155]">
              Monday – Friday, 9:00am – 5:00pm
            </span>
          </div>
        </div>
      </section>

      <section className="p-4 text-center">
        <h1 className="text-slate-400 bolder2 text-2xl mb-[40px] md:text-4xl">
          Social media links
        </h1>

        <div className="inline-flex gap-[30px]">
          <a
            href="https://www.instagram.com/meritandvalueawards?igsh=MXA4NmpwczN0M2c3dA=="
            target="_blank"
          >
            <img src={ig} alt="Instagram" className="h-[30px] md:h-[50px]" />
          </a>
          <a
            href="https://www.facebook.com/meritandvalueawards"
            target="_blank"
          >
            <img src={fb} alt="Facebook" className="h-[30px] md:h-[50px]" />
          </a>
          <a href="https://x.com/mvaevent" target="_blank">
            <img src={x} alt="X" className="h-[30px] md:h-[50px]" />
          </a>
          <a
            href="https://www.tiktok.com/@_meritandvalueawards_?_r=1&_t=ZS-98KU4UeRLFs"
            target="_blank"
          >
            <img src={tiktok} alt="tiktok" className="h-[30px] md:h-[50px]" />
          </a>
          <a
            href="https://youtube.com/@meritandvalueawards?si=eawtqPzlaQw77ym3"
            target="_blank"
          >
            <img src={youtube} alt="youtube" className="h-[30px] md:h-[50px]" />
          </a>
        </div>
      </section>

      {/* <section className="p-4 text-center">
        <h1 className="text-slate-500 bolder2 text-2xl mb-[40px] md:text-4xl">
          Sponsorship & Donation Payments
        </h1>
        <span className="text-xl md:text-2xl">
          To support Merit and Value Awards directly, kindly use the details
          below:
        </span>

        <div className=" w-[30%] mx-auto flex justify-center">
          <ul className="flex flex-col mb-4">
            <li className="flex justify-start">
              <b className="mr-1" >Account Name:</b> Jane Francis
            </li>
            <li>
              <b>Account number:</b> 0084391253
            </li>
            <li className="flex justify-start">
              <b className="mr-1">Bank:</b> Access bank
            </li>
          </ul>
        </div>
        <i>
          Please send proof of payment to our whatsapp link above after making a transfer.
        </i>
      </section> */}
      {/* Footer */}
      <footer className="bg-black text-white text-center p-5">
        <div className="p-[40px]  grid gap-[30px] justify-center items-center md:flex">
          <div className="w-[430px] flex flex-col gap-[30px] text-center items-center">
            <img src={logo} alt="Logo" className="h-[30px]" />
            <span>Celebratng excellence and inspiring change</span>
          </div>

          <div className="w-[430px] flex flex-col gap-[30px] text-center items-center">
            <ul className="grid gap-[10px]">
              {list.map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className="header-button">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="inline-flex gap-[30px]">
              <a
                href="https://www.instagram.com/meritandvalueawards?igsh=MXA4NmpwczN0M2c3dA=="
                target="_blank"
              >
                <img
                  src={ig}
                  alt="Instagram"
                  className="h-[30px] md:h-[30px]"
                />
              </a>
              <a
                href="https://www.facebook.com/meritandvalueawards"
                target="_blank"
              >
                <img src={fb} alt="Facebook" className="h-[30px] md:h-[30px]" />
              </a>
              <a href="https://x.com/mvaevent" target="_blank">
                <img src={x} alt="X" className="h-[30px] md:h-[30px]" />
              </a>
              <a
                href="https://www.tiktok.com/@_meritandvalueawards_?_r=1&_t=ZS-98KU4UeRLFs"
                target="_blank"
              >
                <img
                  src={tiktok}
                  alt="tiktok"
                  className="h-[30px] md:h-[30px]"
                />
              </a>
              <a
                href="https://youtube.com/@meritandvalueawards?si=eawtqPzlaQw77ym3"
                target="_blank"
              >
                <img
                  src={youtube}
                  alt="youtube"
                  className="h-[30px] md:h-[30px]"
                />
              </a>
            </div>
            <div>
              <Link to="/privacyPolicy">Privacy Policy</Link>
            </div>
          </div>
        </div>
        <span>&copy; 2026 Merit and value awards</span>
      </footer>
    </>
  );
};

export default ContactUs;
