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
      <div className="flex w-full overflow-hidden">
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

        <section className="sponsor-hero w-full overflow-hidden">
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

          <div className="sponsor-hero-content">
            <p className="sponsor-kicker">Partnerships for the next generation</p>
            <h1>Fund the people and platforms defining what comes next.</h1>
            <p>
              Partner with MVA to connect measurable social impact, youth
              opportunity, and high-value brand visibility through MVA Rise and
              MVA Awards &amp; Events.
            </p>
            <div className="sponsor-hero-actions">
              <a className="button-theme bolder" href="mailto:info@mail.meritandvalueawards.com?subject=MVA%20Partnership%20Enquiry">Discuss a partnership</a>
              <a className="button-theme secondary bolder" href="#partnership-models">Explore partnership models</a>
            </div>
          </div>
        </section>
      </div>

      <main className="sponsor-page">
        <section className="sponsor-intro">
          <div className="sponsor-intro-inner">
            <div>
              <p className="sponsor-kicker">One partnership. Two engines.</p>
              <h2>Make opportunity visible and scalable.</h2>
            </div>
            <p>
              MVA is a commercial and social enterprise building a connected
              ecosystem for recognition, skills, and economic participation. Your
              partnership can help fund a young person&apos;s next skill, put a
              growing business on a national stage, or make a sponsored cohort
              possible.
            </p>
          </div>
        </section>

        <section className="sponsor-engines">
          <div className="sponsor-section-heading">
            <p className="sponsor-kicker">Where your support works</p>
            <h2>Choose the impact you want to create.</h2>
          </div>
          <div className="sponsor-engine-grid">
            <article className="sponsor-engine-card rise-sponsor-card">
              <span>01 / Development engine</span>
              <h3>MVA Rise</h3>
              <p>
                Sponsor practical training, mentorship, certification, and
                market access for young people through focused cohorts and
                professional development tracks.
              </p>
              <ul>
                <li>Fund a sponsored cohort</li>
                <li>Support the Young Women Skills Initiative</li>
                <li>Build talent pipelines for your industry</li>
              </ul>
            </article>
            <article className="sponsor-engine-card awards-sponsor-card">
              <span>02 / Recognition stage</span>
              <h3>MVA Awards &amp; Events</h3>
              <p>
                Put your brand alongside the innovators, creators, enterprises,
                and community leaders moving Nigeria forward through categories,
                showcases, and the annual awards ceremony.
              </p>
              <ul>
                <li>Sponsor an award category or showcase</li>
                <li>Reach engaged creative and youth audiences</li>
                <li>Build visibility through meaningful recognition</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="sponsor-outcomes">
          <div className="sponsor-section-heading">
            <p className="sponsor-kicker">What partnership unlocks</p>
            <h2>Visibility with a measurable human outcome.</h2>
          </div>
          <div className="sponsor-outcome-grid">
            {[
              ["CSR impact", "Demonstrate direct investment in youth development, inclusion, and economic empowerment."],
              ["Brand visibility", "Reach participants, creatives, entrepreneurs, media, communities, and decision-makers across our platforms."],
              ["Talent pipeline", "Connect your organisation with trained, ambitious people ready to contribute and grow."],
              ["Thought leadership", "Stand for the future you want to see through speaking, mentorship, and strategic participation."],
            ].map(([title, body]) => (
              <article className="sponsor-outcome" key={title}>
                <h3>{title}</h3>
                <p style={{ fontWeight: 'bold' }}>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="partnership-models" className="sponsor-models">
          <div className="sponsor-section-heading">
            <p className="sponsor-kicker">Partnership models</p>
            <h2>Build a partnership around your goals.</h2>
          </div>
          <div className="sponsor-model-grid">
            <article>
              <span>01</span>
              <h3>Sponsor a cohort</h3>
              <p style={{ fontWeight: 'bold' }}>Fund a group of young people through a complete MVA Rise training and mentorship cycle.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Sponsor a category</h3>
              <p style={{ fontWeight: 'bold' }}>Give a field, community, or impact area the recognition and visibility it deserves at MVA Awards &amp; Events.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Become a strategic partner</h3>
              <p style={{ fontWeight: 'bold' }}>Co-design long-term programs, talent pipelines, content, or market opportunities with the MVA ecosystem.</p>
            </article>
          </div>
        </section>

        <section className="sponsor-cta">
          <div className="sponsor-cta-inner">
            <div>
              <p className="sponsor-kicker">Let&apos;s build what comes next</p>
              <h2>Bring your brand, resources, and purpose into the ecosystem.</h2>
            </div>
            <a className="button-theme bolder" href="mailto:info@mail.meritandvalueawards.com?subject=MVA%20Partnership%20Enquiry">Contact us for sponsorship</a>
          </div>
        </section>
      </main>

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
