import { useState, useEffect } from "react";
import back from "./assets/back.png";
import menu from "./assets/menu2.jpeg";
import logo from "./assets/logo.png";
import fb from "./assets/icons8-fb.svg";
import ig from "./assets/icons8-ig.svg";
import x from "./assets/icons8-x-50.png";
import youtube from "./assets/icons8-youtube.png";
import tiktok from "./assets/icons8-tiktok-50.png";
import { Link } from "react-router";
import mvs from "./assets/clearMVS.png";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export const list = [
  { name: "Home", path: "/" },
  { name: "About us", path: "/aboutUs" },
  { name: "Awards", path: "/awards" },
  { name: "Rise to fame", path: "/riseToFame" },
  { name: "Nominate", path: "/nominate" },
  { name: "Sponsors", path: "/sponsors" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact-us", path: "/contact" },
];

function App() {
  const brand = [
    { id: 1, image: logo },
    { id: 2, text: "Celebrating Excellence, Inspiring change" },
  ];

  const [slide, setSlide] = useState(false);

  const toggleSlide = () => {
    setSlide(!slide);
  };

  return (
    <GoogleReCaptchaProvider reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}>
      <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.16),_transparent_42%)] bg-neutral-950 text-neutral-100">
        <div className="flex">
        {/* Nav menu */}
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

        {/* Hero section */}

        <section className="heroSection relative">
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

          <div className="hero-content">
            <div className="hero-ribbon">Celebrating Excellence, Inspiring change</div>
            <h1 className="hero-heading">
              Merits And value awards
            </h1>
            <p className="hero-subtext">
              Recognising outstanding talent, creativitiy and inclusion in
              Nigeria and beyond.
            </p>
            <div className="hero-actions">
              <Link to="/nominate" className="button-theme bolder">
                Nominate someone
              </Link>
              <Link to="/aboutUs" className="button-theme secondary bolder">
                Discover our story
              </Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <span>2026</span>
                <small>Annual ceremony</small>
              </div>
              <div className="hero-stat">
                <span>Talent</span>
                <small>Spotlight & recognition</small>
              </div>
              <div className="hero-stat">
                <span>Inclusion</span>
                <small>Open to every story</small>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Intro section */}
      <section className="px-6 py-16 md:px-8 lg:px-12">
        <h1 className="section-title">Who we are</h1>
        <div className="intro-panel">
          <p className="section-copy">
            Merits and Value awards is a prestigious platform committed to
            spreading, healing and promoting resilience and celebrating
            excellence, creativity, culture and innovation.
            <br />
            Through our annual ceremony and flagship programs, we recognize
            individuals and organisations making meaningful impact in
            entertainment, the arts, entrepreneurship and their communities.
            <br />
            We believe talent knows no boundaries and that greatness is defined
            by passion, creativity and determination.
          </p>
        </div>
      </section>

      {/*CTA section*/}

      <section className="cta mx-4 my-4 overflow-hidden rounded-[28px] border border-neutral-800 shadow-2xl shadow-black/30 md:mx-8 lg:mx-12">
        <div className="cta-overlay">
          <button className="cta-button">
            <Link
              to="/aboutUs"
              className="text-black bolder hover:text-shadow-sm text-shadow-white transition-all duration-200"
            >
              Discover our story
            </Link>
          </button>
        </div>
      </section>

      {/* Highlights */}

      <section className="px-6 py-16 md:px-8 lg:px-12">
        <h1 className="section-title">HIGHLIGHTS AND QUICK STATS</h1>
        <div className="card-divs">
          <Link to="/awards">
            <div className="card border border-amber-500/20 bg-neutral-900/90">
              <div className="card-img bg-amber-500/15">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#FFD700"
                  className="size-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="bolder mt-4 w-full text-center text-[20px] text-white">
                Award categories
              </div>
            </div>
          </Link>
          <Link to="/nominate">
            <div className="card border border-sky-500/20 bg-neutral-900/90">
              <div className="card-img bg-sky-500/15">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#2563EB"
                  className="size-70"
                >
                  <path d="M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z" />
                  <path d="M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z" />
                </svg>
              </div>
              <div className="bolder mt-4 w-full text-center text-[20px] text-white">
                Talented nominees
              </div>
            </div>
          </Link>

          <a
            href="https://www.google.com/maps/search/?api=1&query=11.8333,13.1500"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <div className="card border border-violet-500/20 bg-neutral-900/90">
              <div className="card-img bg-violet-500/15">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={0.5}
                  stroke="#9333EA"
                  className="size-70"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525"
                  />
                </svg>
              </div>
              <div className="bolder mt-4 w-full text-center text-[20px] text-white">
                Maiduguri
              </div>
            </div>
          </a>
        </div>
      </section>

      <section className="px-6 py-16 md:px-8 lg:px-12">
        <h1 className="bolder2 mt-3 text-center text-2xl text-white">
          Our Flagship Events
        </h1>

        <div className="mt-[40px] grid grid-cols-1 justify-center items-center gap-10 md:grid-cols-2">
          <div className="general-card border border-amber-500/20 bg-neutral-900/85">
            <h1 className="bolder2 mt-2 text-center text-xl md:text-2xl text-white">
              Annual award ceremony
            </h1>
            <p className="mt-[40px] text-center text-[14px] text-neutral-300 md:text-xl">
              <b> Merit and Value Awards Ceremony 2026 Theme:</b> <br />
              Celebrating Excellence and Inclusion A glamorous night celebrating
              the best in music, film, fashion, entrepreneurship, humanitarian
              work, and digital content creation in Maiduguri.
            </p>
            <div className="flex justify-center mt-5">
              <Link
                to="/awards"
                className="p-2 bolder2 rounded-[10px] bg-amber-500/90 text-black cursor-pointer"
              >
                View Awards
              </Link>
            </div>
          </div>

          <div className="general-card border border-sky-500/20 bg-neutral-900/85">
            <h1 className="bolder2 mt-1 text-center text-xl md:text-2xl text-white">
              Rise to fame talent hunt 2027
            </h1>
            <p className="mt-[40px] text-center text-[14px] text-neutral-300 md:text-xl">
              <b> Rise to Fame” Talent Hunt 2027 Theme:</b> <br />
              Gateway to Merit and Value Awards A groundbreaking talent hunt
              designed to discover, nurture, and celebrate exceptional talents —
              with a powerful commitment to inclusion for persons living with
              disabilities.
            </p>
            <div className="flex justify-center mt-5">
              <Link
                to="/aboutUs"
                className="p-2 bolder2 rounded-[10px] bg-sky-500/90 text-black cursor-pointer"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* About inclusion */}
      <section className="mx-4 my-6 rounded-[28px] border border-neutral-800 bg-gradient-to-br from-amber-500/12 to-neutral-900 p-8 text-center text-white shadow-2xl shadow-black/30 md:mx-8 lg:mx-12">
        <h1 className="bolder mt-4 text-3xl">About inclusion</h1>
        <br />
        <h2 className="light mb-4 text-xl">
          We Don’t Just Celebrate Talent. We Break Barriers.
        </h2>
        <p className="light p-5 text-center text-neutral-300">
          Merit and Value Awards is built on a foundation of equality. We create
          platforms where every voice is heard, every talent is seen, and every
          individual — regardless of ability —has an equal chance to shine.
        </p>
      </section>

      {/* Testimonials */}

      {/* <section className="light2 p-[70px] text-center">
        <h1 className="bolder2 text-3xl mt-4">Testimonials</h1>
        <p className="text-xl">
          “Merit and Value Awards gave me the platform I needed. Tonight, my
          music reached thousands.” — Past Winner, Music Category
          <br />
          “As a person with a disability, I never thought I’d stand on a stage
          like this. Merit and Value Awards made it possible.” — Talent Hunt
          Participant
        </p>
      </section> */}

      {/* Sponsors */}
      <section className="mx-4 my-6 flex flex-col justify-center rounded-[28px] border border-neutral-800 bg-neutral-900/90 p-8 text-white shadow-2xl shadow-black/30 md:mx-8 lg:mx-12">
        <h1 className="bolder mt-2 text-center text-3xl">Our partners </h1>

        <div className="mt-6 inline-flex justify-center rounded-[20px] border border-neutral-800 bg-neutral-950/70 p-4">
          <img src={mvs} alt="MVS Logo" className="h-[150px] w-auto" />
        </div>
        <Link
          to="/sponsors"
          className="button-theme mx-auto mt-6 block text-center"
        >
          Become a sponsor
        </Link>
      </section>

      {/* Newsletter/updates */}
      {/* <section className=" p-[30px] mt-[40px] bg-[#F9FAFB]">
        <h1 className="bolder text-2xl text-center mb-4">Stay in the loop</h1>
        <div className="w-[300px] light p-[40px] h-[350px] shadow-lg mx-auto shadow-[4px_5px_10px_20px_40px_#FFFF] rounded-[13px] md:w-[80%]">
          <form action="" className="flex flex-col gap-2">
            <label htmlFor="Name">Name</label>

            <input
              type="text"
              className="border-1 border-[#BCC6CC] w-[96%] rounded-[10px] p-1"
            />

            <label htmlFor="email">Email</label>

            <input
              type="text"
              className="border-1 border-[#BCC6CC] w-[96%] rounded-[10px] p-1"
            />
            <button className="p-2 mt-3 w-[60%] bolder2 bg-[#00B8FF] rounded-[10px] text-[#334155] block mx-auto cursor-pointer md:bg-[#87CEEB] hover:bg-[#00BFFF] transition-all duration-200">
              Subscribe
            </button>
          </form>
        </div>
      </section> */}
      {/* Footer */}
      <footer className="border-t border-neutral-800 bg-black/70 p-5 text-center text-neutral-300">
        <div className="grid justify-center items-center gap-[30px] p-[40px] md:flex">
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
      </div>
    </GoogleReCaptchaProvider>
  );
}

export default App;
