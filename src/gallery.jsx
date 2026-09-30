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

const vid1 = "/videos/vid1.MP4";
const vid2 = "/videos/vid2.MP4";

const Gallery = () => {
  const [slide, setSlide] = useState(false);

  const toggleSlide = () => {
    setSlide(!slide);
  };

  const galleryImages = [
    [img1, "MVA Awards ceremony", "Awards & Events"],
    [img2, "Community recognition", "Awards & Events"],
    [img3, "Creative talent spotlight", "MVA Rise"],
    [img4, "MVA event experience", "Awards & Events"],
    [img5, "Emerging creator", "MVA Rise"],
    [img6, "Recognition in action", "Awards & Events"],
    [img7, "Community and culture", "Impact"],
    [img8, "Creative showcase", "MVA Rise"],
    [img9, "Behind the scenes", "Awards & Events"],
    [img10, "MVA audience", "Impact"],
    [img11, "Talent on stage", "Awards & Events"],
    [img12, "Celebrating progress", "Impact"],
    [img13, "MVA community", "Impact"],
    [img14, "Creative excellence", "MVA Rise"],
    [award1, "Past award recipient", "Recognition"],
  ];

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

        <section className="gallery-hero">
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
          <div className="gallery-hero-content">
            <header>
              <p className="gallery-kicker">The MVA story in motion</p>
              <h1>People. Progress. Recognition.</h1>
              <h2>Explore the moments where potential becomes visible.</h2>
            </header>
          </div>
        </section>
      </div>

      <main className="gallery-page">
        <section className="gallery-intro">
          <div className="gallery-intro-inner">
            <div>
              <p className="gallery-kicker">A living archive</p>
              <h2>Every frame carries a piece of the MVA journey.</h2>
            </div>
            <p>
              From the people building new skills through MVA Rise to the creators,
              enterprises, and changemakers celebrated at MVA Awards &amp; Events,
              this is a record of progress, participation, and impact.
            </p>
          </div>
        </section>

        <section className="gallery-media-section">
          <div className="gallery-section-heading">
            <p className="gallery-kicker">Photo archive</p>
            <h2>Moments that move the story forward.</h2>
          </div>
          <div className="gallery-grid">
            {galleryImages.map(([image, alt, label]) => (
              <figure className="gallery-item" key={image}>
                <img src={image} alt={alt} />
                <figcaption><span>{label}</span><strong>{alt}</strong></figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="gallery-video-section">
          <div className="gallery-section-heading">
            <p className="gallery-kicker">Watch the energy</p>
            <h2>Recognition is an experience.</h2>
          </div>
          <div className="gallery-video-grid">
            <video src={vid2} controls preload="none" aria-label="MVA event highlights" />
            <video src={vid1} controls preload="none" aria-label="MVA community highlights" />
          </div>
        </section>
      </main>
      {/* MVA Rise section */}
      {/* <section className="p-[30px]">
        <h1 className="text-xl text-slate-500 text-center mb-2 bolder2 md:text-4xl ">
          MVA Rise — Development & Event Highlights
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
