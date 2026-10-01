import { useState } from "react";
import { list } from "./App.jsx";
import "./index.css";
import back from "./assets/back.png";
import menu from "./assets/menu2.jpeg";
import { Link } from "react-router";
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

        <section className="awards-hero">
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
          <header className="awards-hero-content">
            <p className="awards-kicker">MVA Awards &amp; Events</p>
            <h1>Honoring Excellence. Spotlighting Impact. Inspiring the Future.</h1>
            <p>
              The Merit and Value Awards celebrate the visionaries, creators,
              entrepreneurs, and change-makers who are not only achieving
              greatness but actively defining the future of our communities.
            </p>
          </header>
        </section>
      </div>

      <section className="awards-story">
        <div className="awards-story-inner">
          <p className="awards-kicker">Why MVA Awards matter</p>
          <h2>Recognition that creates momentum.</h2>
          <p>
            The Merit and Value Awards (MVA) is more than a ceremony—it is a
            national stage for excellence. We recognize individuals, brands, and
            organizations that demonstrate exceptional creativity, grit, social
            impact, and entrepreneurial leadership.
          </p>
          <p>
            By honoring these trailblazers, we create powerful role models for
            the younger generation, proving that hard work, innovation, and
            determination pave the way to lasting success. Every winner and
            nominee becomes part of the wider MVA ecosystem, gaining visibility,
            credibility, and connections to further scale their impact.
          </p>
        </div>
      </section>

      <section className="awards-categories">
        <div className="awards-section-heading">
          <p className="awards-kicker">Expanded award categories</p>
          <h2>Many ways to move society forward.</h2>
        </div>
        <div className="awards-category-grid">
          {[
            ["01", "Entrepreneurship & Business Innovation", "Recognizing young founders, startups, and scalable business ventures driving economic growth and job creation."],
            ["02", "Creativity, Arts & Content Creation", "Honoring talents in digital media, fashion, music, film, and visual arts who are pushing cultural boundaries."],
            ["03", "Social Impact & Community Building", "Celebrating changemakers, humanitarians, and grassroots leaders solving pressing community challenges."],
            ["04", "MVA Rise Special Recognition", "Shining a light on outstanding MVA Rise graduates and emerging talents turning skills into market success."],
            ["05", "Inclusion & Advocacy", "Honoring champions of accessibility, equality, and representation, including advocates for persons living with disabilities."],
          ].map(([number, title, body]) => (
            <article className="awards-category-card" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p><strong>{body}</strong></p>
            </article>
          ))}
        </div>
      </section>

      <section className="awards-experience">
        <div className="awards-experience-inner">
          <div>
            <p className="awards-kicker">The MVA winner experience</p>
            <h2>More than a trophy.</h2>
          </div>
          <p>
            Recognition at the Merit and Value Awards can be a beginning, not an
            ending. Through the MVA Awards Recognition-to-Opportunity Pathway,
            promising individuals identified through awards and other MVA
            activities may be considered for tailored mentorship, professional
            development, stronger visibility, and introductions to relevant
            networks and opportunities. Support is shaped around each person and
            the opportunities available; it is a pathway for development, not a
            guarantee of placement or funding.
          </p>
        </div>
      </section>

      <section className="awards-pathway">
        <div className="awards-pathway-inner">
          <div>
            <p className="awards-kicker">Beyond the year-end celebration</p>
            <h2>MVA Awards Recognition-to-Opportunity Pathway</h2>
          </div>
          <div>
            <p>
              Each year, MVA celebrates people whose work is creating value in
              their communities. The pathway builds on that recognition by
              identifying selected individuals with promising talent, initiative,
              or impact and helping them take a considered next step.
            </p>
            <p>
              Depending on a participant&apos;s goals and available partner
              opportunities, support may include one-to-one mentorship,
              professionalization, portfolio and communication guidance,
              introductions to relevant professionals, and referrals to
              development or work opportunities. The aim is to turn visibility
              into sustained growth and meaningful connections.
            </p>
            <Link to="/mva-rise" className="text-link">Explore MVA Rise programs <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="awards-cta">
        <div>
          <p className="awards-kicker">Your next move</p>
          <h2>Put meaningful work in the spotlight.</h2>
        </div>
        <div className="awards-cta-actions">
          <Link to="/nominate" className="button-theme bolder">Nominate a Changemaker</Link>
          <Link to="/sponsors" className="button-theme secondary bolder">Explore Sponsorship &amp; Partnership</Link>
        </div>
      </section>

      {/* Past winners*/}

      <section className="p-4 text-center mt-4">
        <header className="max-w-5xl mx-auto">
          <h1 className="bolder2 text-2xl md:text-3xl text-center mt-[30px]">
            Past Winners
          </h1>
          <p className="light2 text-lg md:text-xl text-center mt-4 leading-8 text-slate-300">
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
