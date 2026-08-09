import logo from "./assets/logo.png";
import fb from "./assets/icons8-fb.svg";
import ig from "./assets/icons8-ig.svg";
import x from "./assets/icons8-x-50.png";
import youtube from "./assets/icons8-youtube.png";
import tiktok from "./assets/icons8-tiktok-50.png";
import "./index.css";
import back from "./assets/back.png";
import menu from "./assets/menu2.jpeg";
import { Link } from "react-router";
import { useState } from "react";
import { list } from "./App.jsx";
import img1 from "./assets/img1.JPG";
import img2 from "./assets/img2.JPG";
import img3 from "./assets/img3.JPG";
import img4 from "./assets/img4.JPG";
import img5 from "./assets/img5.JPG";
import img6 from "./assets/img6.JPG";
import img7 from "./assets/img7.JPG";
import img8 from "./assets/img8.JPG";
import img9 from "./assets/img9.JPG";
import img10 from "./assets/img10.JPG";
import img11 from "./assets/img11.JPG";
import img12 from "./assets/img12.JPG";
import img13 from "./assets/img13.JPG";
import img14 from "./assets/img14.JPG";
import award1 from "./assets/award1.JPG";
import vid1 from "./assets/vid1.MP4";
import vid2 from "./assets/vid2.MP4";

const Gallery = () => {
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

        <section className="bg-black text-white h-[150px] w-full flex flex-col ">
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
          <div className="grid justify-center items-center h-[170px]">
            <header>
              <h1 className="text-[50px] text-center mb-2 bolder md:text-4xl ">
                Gallery
              </h1>
              <h2 className="mt-[30px] text-[20px]">
                Captured moments of excellence
              </h2>
            </header>
          </div>
        </section>
      </div>

      <section className=" text-center p-4">
        <h1 className="text-xl text-slate-400 text-center mb-2 bolder2 md:text-4xl ">
          Merit and Value Awards 2025 — Highlights
        </h1>
        <div className="border-none p-3 border-slate-400 grid grid-cols-1 gap-4 md:grid-cols-3 border-2 border-dashed">
          <img src={img1} alt="image" />
          <img src={img2} alt="image" />
          <img src={img3} alt="image" />
          <img src={img4} alt="image" />
          <img src={img5} alt="image" />
          <img src={img6} alt="image" />
          <img src={img7} alt="image" />
          <img src={img8} alt="image" />
          <img src={img9} alt="image" />
          <img src={img10} alt="image" />
          <img src={img11} alt="image" />
          <img src={img12} alt="image" />
          <img src={img13} alt="image" />
          <img src={img14} alt="image" />
          <img src={award1} alt="image" />
        </div>

        <div className="">
          <h1 className="text-xl text-slate-400 text-center mb-2 bolder2 md:text-4xl ">
            Videos
          </h1>

          <div className="grid gap-5 md: flex flex-col items-center justify-center">
            <video src={vid2} controls></video>
            <video src={vid1} controls></video>
          </div>
        </div>
      </section>
      {/* Rise to fame section */}
      {/* <section className="p-[30px]">
        <h1 className="text-xl text-slate-500 text-center mb-2 bolder2 md:text-4xl ">
          Rise to Fame Talent Hunt — Audition & Event Highlights
        </h1>

        <div className="h-[350px] w-full border-dashed p-3 border-slate-400 grid grid-cols-1 gap-4 md:grid-cols-3 border-2 border-dashed"></div>
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
export default Gallery;
