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
const MvaRise = () => {
  const [slide, setSlide] = useState(false);

  const toggleSlide = () => {
    setSlide(!slide);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="flex">
        <aside className={`heading fixed md:static ${slide ? "slide-in" : "slide-out"}`}>
          <ul className="list">
            <button className="menu" onClick={toggleSlide}>
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

        <div className="w-full">
          <section className="rise-hero px-4 py-4 text-white md:px-6">
            <button
              className="fixed top-0 left-0 z-[20] h-[45px] w-[50px] rounded-[50%] bg-[#999999] md:cursor-pointer"
              onClick={toggleSlide}
            >
              <img src={menu} alt="Menu" className="ml-3" />
            </button>

            <img
              src={logo}
              alt="Logo"
              className="absolute right-3 top-3 z-30 h-[35px] md:h-[55px]"
            />

            <div className="rise-hero-content">
              <p className="rise-kicker">MVA Rise / Talent, Skills &amp; Opportunity Development</p>
              <h1>MVA Rise: Discover. Develop. Launch.</h1>
              <p>
                <strong>
                  The gateway to the Merit and Value Awards. We don&apos;t just find
                  talent—we build, professionalize, and connect it to real-world
                  economic opportunities.
                </strong>
              </p>
              <div className="rise-hero-actions">
                <Link to="/mva-rise/register" className="button-theme bolder">Explore Upcoming Programs</Link>
                <Link to="/sponsors" className="button-theme secondary bolder">Sponsor a Cohort</Link>
              </div>
            </div>
          </section>

          <main className="rise-page">
            <section className="rise-overview">
              <div className="rise-content-width">
                <p className="rise-kicker">What is MVA Rise?</p>
                <h2>The development engine behind the MVA ecosystem.</h2>
                <p>
                  MVA Rise is MVA&apos;s talent, skills, and opportunity development
                  arm. Designed to take raw potential and turn it into
                  professional competence, MVA Rise bridges the gap between
                  passion and sustainability.
                </p>
                <p>
                  Through intensive bootcamps, hands-on masterclasses, industry
                  mentorship, and certification, we equip young people with the
                  marketable skills they need to build thriving careers, launch
                  businesses, and make something meaningful out of their lives.
                </p>
              </div>
            </section>

            <section className="rise-pathway">
              <div className="rise-section-heading">
                <p className="rise-kicker">How it works</p>
                <h2>The MVA Rise pathway.</h2>
              </div>
              <div className="rise-pathway-grid">
                {[
                  ["01", "Discover", "Finding talent through community events, social media, strategic partnerships, and open applications."],
                  ["02", "Develop", "Rigorous, high-value training in practical, in-demand areas."],
                  ["03", "Certify", "Issuing recognized credentials upon successful completion of programs."],
                  ["04", "Connect", "Linking participants to real markets, clients, networks, and professional opportunities."],
                  ["05", "Launch", "Providing guidance and pathways to start enterprises or secure meaningful employment."],
                  ["06", "Recognize", "Showcasing standout graduates on the Merit and Value Awards stage for national visibility."],
                ].map(([number, title, body]) => (
                  <article className="rise-pathway-step" key={number}>
                    <span>{number}</span>
                    <h3>{title}</h3>
                    <p style={{ fontWeight: 'bold' }}>{body}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="rise-training">
              <div className="rise-section-heading">
                <p className="rise-kicker">Core training areas &amp; cohorts</p>
                <h2>Practical tracks for a changing economy.</h2>
              </div>
              <div className="rise-training-grid">
                {[
                  ["01", "Digital & Emerging Tech", "Software engineering, web/mobile development, and core digital literacy."],
                  ["02", "Creative Enterprise & Fashion", "Modern design, textile production, and scalable fashion branding."],
                  ["03", "Beauty Enterprise & Lifestyle", "Professional aesthetics, product management, and beauty brand execution."],
                  ["04", "Digital Media & Creator Economy", "Media production, digital storytelling, and monetization strategies."],
                  ["05", "Venture Incubation & Leadership", "Business fundamentals, financial strategy, and enterprise scaling."],
                  ["06", "Green Energy & CleanTech", "Sustainable infrastructure, renewable energy basics, and eco-mobility solutions."],
                ].map(([number, title, body]) => (
                  <article className="rise-pathway-step" key={number}>
                    <span>{number}</span>
                    <h3>{title}</h3>
                    <p style={{ fontWeight: 'bold' }}>{body}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="rise-initiative">
              <div className="rise-initiative-inner">
                <div>
                  <p className="rise-kicker">Spotlight flagship initiative</p>
                  <h2>MVA Rise Young Women Skills Initiative</h2>
                  <p className="rise-initiative-audience">Target audience: Young women aged 15–24.</p>
                </div>
                <p>
                  A focused youth development initiative designed to equip young
                  women with practical, marketable skills, structured mentorship,
                  and pathways for personal and professional growth. Through
                  sponsored cohorts funded by corporate partners and specialized
                  training tracks, the initiative ensures young women have equal
                  access to the tools needed to build financial independence and
                  leadership capacity.
                </p>
              </div>
            </section>

            <section className="rise-partnership">
              <div className="rise-partnership-inner">
                <div>
                  <p className="rise-kicker">Partner with us</p>
                  <h2>Fund the pathway to opportunity.</h2>
                </div>
                <p>
                  MVA Rise operates on a sustainable model combining sponsored
                  cohorts—where corporate partners and foundations fund training
                  for groups of young people—with structured professional
                  training paths. Join us in building the next generation of
                  African creators and entrepreneurs.
                </p>
                <div className="rise-cta-actions">
                  {/* <Link to="/mva-rise/register" className="button-theme bolder">Apply for Current Cohort / Explore Programs</Link> */}
                  <Link to="/sponsors" className="button-theme secondary bolder">Sponsor a Cohort</Link>
                </div>
              </div>
            </section>
          </main>

          <footer className="bg-black p-5 text-center text-white">
            <div className="grid items-center justify-center gap-[30px] p-[40px] md:flex">
              <div className="flex w-[430px] flex-col items-center gap-[30px] text-center">
                <img src={logo} alt="Logo" className="h-[30px]" />
                <span>Celebratng excellence and inspiring change</span>
              </div>

              <div className="flex w-[430px] flex-col items-center gap-[30px] text-center">
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
                  <a href="https://www.instagram.com/meritandvalueawards?igsh=MXA4NmpwczN0M2c3dA==" target="_blank">
                    <img src={ig} alt="Instagram" className="h-[30px] md:h-[30px]" />
                  </a>
                  <a href="https://www.facebook.com/meritandvalueawards" target="_blank">
                    <img src={fb} alt="Facebook" className="h-[30px] md:h-[30px]" />
                  </a>
                  <a href="https://x.com/mvaevent" target="_blank">
                    <img src={x} alt="X" className="h-[30px] md:h-[30px]" />
                  </a>
                  <a href="https://www.tiktok.com/@_meritandvalueawards_?_r=1&_t=ZS-98KU4UeRLFs" target="_blank">
                    <img src={tiktok} alt="tiktok" className="h-[30px] md:h-[30px]" />
                  </a>
                  <a href="https://youtube.com/@meritandvalueawards?si=eawtqPzlaQw77ym3" target="_blank">
                    <img src={youtube} alt="youtube" className="h-[30px] md:h-[30px]" />
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
      </div>
    </div>
  );
};

export default MvaRise;
