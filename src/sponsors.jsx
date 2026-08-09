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

const Sponsors = () => {
  const [slide, setSlide] = useState(false);

  const toggleSlide = () => {
    setSlide(!slide);
  };

  return (
    <>
      <div className="flex">
        {/* Aside section */}
        <aside className={`heading fixed md:static ${slide ? "slide-in" : "slide-out"}`}>
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

        <section className="bg-black text-white min-h-[170px] w-full relative overflow-hidden">
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

          <div className="grid place-items-center h-full px-6 text-center">
            <div className="max-w-3xl">
              <h1 className="text-xl bolder md:text-3xl">
                Why partner with Merit and Value Awards
              </h1>
              <p className="light2 text-[#D1D5DB] mt-4 text-lg md:text-xl">
                Align your brand with a celebration of excellence, inclusion, and
                cultural impact in Maiduguri. We bring together communities,
                creatives, and organisations for unforgettable visibility.
              </p>
            </div>
          </div>
        </section>
      </div>

      <section className="light2 p-3 text-slate-300 text-center mt-3 md:mt-5">
        <p className="text-2xl">
          Merit and Value Awards is more than an event — it is a movement. By
          partnering with us, your brand stands alongside a platform that
          celebrates creativity, champions inclusion, and reaches thousands of
          engaged, passionate Nigerians. Our audience spans entertainment
          professionals, youth creatives, community leaders, NGOs, media houses,
          and corporate organisations — making it one of the most diverse and
          dynamic platforms in Maiduguri.
        </p>
      </section>

      <section className="mt-3 p-[30px] bg-slate-100">
        <h1 className="text-2xl text-center text-slate-500 bolder2 md:text-3xl">
          What you get as a sponsor
        </h1>

        <div className="mt-8 grid gap-4 md:grid-cols-2 text-[#334155] md:text-2xl">
          <div className="bg-white rounded-[20px] p-6 shadow-sm">
            <ul className="light2 list-disc list-inside space-y-3 text-start text-xl">
              <li>Strong Corporate Social Responsibility (CSR) impact</li>
              <li>Brand visibility and recognition across all platforms</li>
              <li>Logo placement on promotional materials (banners, programmes, tickets)</li>
              <li>Social media mentions and media exposure</li>
            </ul>
          </div>
          <div className="bg-white rounded-[20px] p-6 shadow-sm">
            <ul className="light2 list-disc list-inside space-y-3 text-start text-xl">
              <li>Product placement opportunities at the event</li>
              <li>Stage branding and mentions during the ceremony</li>
              <li>Direct engagement with youth and creative markets</li>
              <li>Association with a credible, purpose-driven platform</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="p-[30px]">
        <h1 className="text-2xl text-center text-slate-400 bolder2 md:text-3xl">
          Sponsorship tiers
        </h1>

        <div className="mt-[30px] grid gap-6 md:grid-cols-2">
          <div className="rounded-[20px] border border-slate-200 p-6 shadow-sm">
            <h2 className="bolder text-2xl text-slate-400 text-center">Platinum Sponsor</h2>
            <p className="mt-4 text-[10px] text-center light md:text-[20px] text-slate-300">
              All benefits + headline naming rights, VIP seating, fullContact media integration
            </p>

          </div>

          <div className="rounded-[20px] border border-slate-200 p-6 shadow-sm">
            <h2 className="bolder text-2xl text-slate-400 text-center">Gold Sponsor</h2>
            <p className="mt-4 text-[10px] text-center light md:text-[20px] text-slate-300">
              Logo on all materials, stage mention, social media feature, Contact VIP tickets
            </p>

          </div>

          <div className="rounded-[20px] border border-slate-200 p-6 shadow-sm">
            <h2 className="bolder text-2xl text-slate-400 text-center">Silver Sponsor</h2>
            <p className="mt-4 text-[10px] text-center light md:text-[20px] text-slate-300">
              Logo on select materials, social media mention, standard Contact tickets
            </p>

          </div>

          <div className="rounded-[20px] border border-slate-200 p-6 shadow-sm">
            <h2 className="bolder text-2xl text-slate-400 text-center">Community Supporter</h2>
            <p className="mt-4 text-[10px] text-center light md:text-[20px] text-slate-300">
              Brand mention in programme, social media shoutout
            </p>

          </div>
        </div>
      </section>

      <section className="p-[40px] bg-black/80 text-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl text-center bolder2 md:text-3xl">
            Become a Sponsor Today And Align Your Brand With Excellence
          </h1>

          <div className="mt-10 grid gap-6 md:grid-cols-1">
            <div className="rounded-[20px] border border-white p-6">
              <h2 className="text-xl text-center bolder2 md:text-2xl">Ready to make an impact?</h2>
              <div className="mt-6 flex justify-center">
                <a
                  className="button-theme bolder2"
                  href="mailto:meritandvalueawardsng@gmail.com?subject=Official%20Sponsorship%20Support%20Request%20for%20Merit%20and%20Value%20Awards"
                >
                  Contact us for sponsorship
                </a>
              </div>
            </div>

            {/* <div className="rounded-[20px] border border-white p-6 bg-white/5 flex flex-col justify-center">
              <h2 className="text-xl text-center bolder2 md:text-2xl">Account Details</h2>
              <p className="mt-3 text-center text-slate-300">Direct sponsorship payments</p>
              <ul className="mt-6 flex flex-col items-center text-center gap-3 w-full">
                <li className="w-full">Account Name: Jane Francis</li>
                <li className="w-full">Account Number: 0084391253</li>
                <li className="w-full">Bank: Access Bank</li>
              </ul>
            </div> */}
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
              <a href="https://www.instagram.com/meritandvalueawards?igsh=MXA4NmpwczN0M2c3dA=="
                target="_blank"
              >
                <img src={ig} alt="Instagram" className="h-[30px] md:h-[30px]" />
              </a>
              <a href="https://www.facebook.com/meritandvalueawards"
                target="_blank"
              >
                <img src={fb} alt="Facebook" className="h-[30px] md:h-[30px]" />
              </a>
              <a href="https://x.com/mvaevent"
                target="_blank"
              >
                <img src={x} alt="X" className="h-[30px] md:h-[30px]" />
              </a>
              <a href="https://www.tiktok.com/@_meritandvalueawards_?_r=1&_t=ZS-98KU4UeRLFs"
                target="_blank"
              >
                <img src={tiktok} alt="tiktok" className="h-[30px] md:h-[30px]" />
              </a>
              <a href="https://youtube.com/@meritandvalueawards?si=eawtqPzlaQw77ym3"
                target="_blank"
              >
                <img
                  src={youtube}
                  alt="youtube"
                  className="h-[30px] md:h-[30px]"
                />
              </a>

            </div>
            <div><Link to="/privacyPolicy">Privacy Policy</Link></div>
          </div>
        </div>
        <span>&copy; 2026 Merit and value awards</span>
      </footer>
    </>
  );
};

export default Sponsors;
