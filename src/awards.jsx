import React from "react";
import { useState } from "react";
import { list } from "./App.jsx";
import "./index.css";
import back from "./assets/back.png";
import menu from "./assets/menu2.jpeg";
import { Link } from "react-router";
import music from "./assets/icons8-music.png";
import movie from "./assets/icons8-movie.png";
import dress from "./assets/icons8-dress.png";
import card2 from "./assets/icons8-lightbulb.png";
import phone from "./assets/icons8-phone.png";
import charity from "./assets/icons8-charity.png";
import dance from "./assets/icons8-dancing.png";
import logo from "./assets/logo.png";
import fb from "./assets/icons8-fb.svg";
import ig from "./assets/icons8-ig.svg";
import x from "./assets/icons8-x-50.png";
import youtube from "./assets/icons8-youtube.png";
import tiktok from "./assets/icons8-tiktok-50.png";
import award1 from "./assets/award1.JPG";
import award2 from "./assets/award2.JPG";
import award3 from "./assets/award3.JPG";

const Awards = () => {
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
          <header className="text-center mt-4">
            <h1 className=" bolder text-3xl sm:text-4xl">Award categories</h1>

            <span className="light">
              Recognizing Excellence Across Industries
            </span>
          </header>
        </section>
      </div>

      <section className="text-center p-2">
        <h1 className="bolder2 text-2xl md:text-3xl mt-[20px]">Introduction</h1>
        <p className="light2 text-3xl text-slate-600">
          The Merit and Value Awards Ceremony honours outstanding achievement
          across a wide range of categories. From music and film to
          entrepreneurship and humanitarian service, we celebrate the
          individuals and organisations shaping the future of Maiduguri and
          Nigeria.
        </p>
      </section>

      {/* Categories */}
      <section className="text-center mt-[40px] bg-slate-100 p-4 md:p-[40px]">
        <h1 className="mt-4 mb-4 bolder2 text-3xl text-slate-500">
          Award Categories
        </h1>
        <div className="grid gap-5 md:flex justify-around items-center ">
          <div className="w-[200px] h-[150px] bg-yellow-300 rounded-[30px] p-3 ">
            <div className="card-img">
              <img src={music} alt="Icon" />
            </div>
            <span className="bolder2 text-slate-800">Best music artist</span>
          </div>

          <div className="w-[200px] h-[150px] p-2 bg-blue-300 rounded-[30px] shadow-lg shadow-[0px_5px_70px_70px_70px_#FFFF]">
            <div className="card-img">
              <img src={movie} alt="Icon" />
            </div>
            <span className="bolder2 text-slate-800">Best in filming</span>
          </div>

          <div className="w-[200px] h-[150px] p-2 bg-red-300 rounded-[30px] shadow-lg shadow-[0px_5px_70px_70px_70px_#FFFF]">
            <div className="card-img">
              <img src={dress} alt="Icon" />
            </div>
            <span className="bolder2 text-slate-800">Best in fashion</span>
          </div>

          <div className="w-[200px] h-[150px] p-2 bg-orange-300 rounded-[30px] shadow-lg shadow-[0px_5px_70px_70px_70px_#FFFF] flex flex-col justify-center items-center">
            <div className="card-img">
              <img src={card2} alt="Icon" />
            </div>
            <span className="bolder2 text-slate-800 text-center leading-tight px-1">
              Best entrepreneur
            </span>
          </div>

          <div className="w-[200px] h-[150px] p-2 bg-purple-400 rounded-[30px] shadow-lg shadow-[0px_5px_70px_70px_70px_#FFFF] flex flex-col justify-center items-center">
            <div className="card-img">
              <img src={phone} alt="Icon" />
            </div>
            <span className="bolder2 text-[15px] text-slate-100 text-center leading-tight px-1">
              Best content creator
            </span>
          </div>

          <div className="w-[200px] h-[150px] bg-green-300 rounded-[30px] shadow-lg shadow-[0px_5px_70px_70px_70px_#FFFF]">
            <div className="card-img">
              <img src={charity} alt="Icon" />
            </div>
            <span className="bolder2 text-slate-800">Best Humanitarian</span>
          </div>

          <div className="w-[200px] h-[150px] p-2 bg-orange-400 rounded-[20px] shadow-lg shadow-[0px_5px_70px_70px_70px_#FFFF]">
            <div className="card-img">
              <img src={dance} alt="Icon" />
            </div>
            <span className="bolder2 text-slate-800">Best Performance</span>
          </div>
        </div>
      </section>
      {/* Nominee selection */}
      <section className="mt-[40px] bg-black/70 text-white text-center">
        <div className="grid">
          <div>
            <h1 className="bolder mt-[40px] text-3xl mb-[30px]">
              How nominees are selected
            </h1>
            <p className="text-xl">
              Nominees are identified through public nominations, community
              recommendations, and the decisions of our independent panel of
              professional judges. Final winners are selected based on impact,
              quality of work, community contribution, and overall excellence.
            </p>
          </div>

          <div className=" mt-[40px] flex justify-center items-center bg-[url('/src/assets/cta2.jpg')] no-repeat bg-cover bg-center mt-[30px] h-[300px] ">
            <Link to="/nominate" className="button-theme bolder">
              Nominate someone
            </Link>
          </div>
        </div>
      </section>

      {/* Past winners*/}

      <section className="p-4 text-center mt-4">
        <header className="max-w-5xl mx-auto">
          <h1 className="bolder2 text-2xl md:text-3xl text-center mt-[30px]">
            Past Winners
          </h1>
          <p className="light2 text-lg md:text-xl text-center mt-4 leading-8 text-gray-700">
            Every name on this page represents a story of dedication,
            creativity, and impact. These are but a few of the individuals and
            organisations that our community recognised, celebrated, and crowned
            the standard-bearers of excellence in Maiduguri.
          </p>
        </header>
        <div className=" mt-[40px] grid gap-5 md:flex justify-evenly">
          <div className="bolder">
            <img src={award1} alt="Award" className="h-[250px]" />
            <br />
            <span>
              Sleek the empire spa
              <br />
              Special recognition category award 2025
            </span>
          </div>
          <div className="bolder">
            <img src={award2} alt="Award" className="h-[250px]" />
            <br />
            <span>
              Ibrahim Harun (Arab Maiduguri)
              <br />
              Content Creator of the year award 2025
            </span>
          </div>
          <div className="bolder">
            <img src={award3} alt="Award" className="h-[250px]" />
            <br />
            <span>
              Mohammed Abubakar
              <br />
              Male influencer of the year award 2025
            </span>
          </div>
        </div>
      </section>
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

export default Awards;
