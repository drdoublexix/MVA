import { useEffect, useState } from "react";
import back from "./assets/back.png";
import menu from "./assets/menu2.jpeg";
import logo from "./assets/logo.png";
import fb from "./assets/icons8-fb.svg";
import ig from "./assets/icons8-ig.svg";
import x from "./assets/icons8-x-50.png";
import youtube from "./assets/icons8-youtube.png";
import tiktok from "./assets/icons8-tiktok-50.png";
import { Link } from "react-router";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { programs } from "./programs.js";
import { partners } from "./partners.js";

export const list = [
  { name: "Home", path: "/" },
  { name: "About us", path: "/aboutUs" },
  { name: "Awards", path: "/awards" },
  { name: "MVA Rise", path: "/mva-rise" },
  { name: "Nominate", path: "/nominate" },
  { name: "Sponsors", path: "/sponsors" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact-us", path: "/contact" },
];

function App() {
  const [slide, setSlide] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);

  useEffect(() => {
    if (!selectedProgram) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setSelectedProgram(null);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [selectedProgram]);

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
            className="menu-toggle-button"
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
            <div className="hero-ribbon">MVA Awards & Events + MVA Rise</div>
            <h1 className="hero-heading">
              Celebrating Excellence. Defining the Future.
            </h1>
            <p className="hero-subtext">
              We don't just recognize greatness—we build it. Merit and Value
              Awards (MVA) is a premier platform and developmental ecosystem
              celebrating outstanding talent, creativity, and inclusion while
              actively discovering, training, and connecting the next generation
              of young leaders, creatives, and entrepreneurs.
            </p>
            <div className="hero-actions">
              <Link to="/mva-rise" className="button-theme bolder">
                Explore MVA Rise &amp; Programs
              </Link>
              <Link to="/awards" className="button-theme secondary bolder">
                View Awards / Nominate
              </Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <span>Rise</span>
                <small>Skills &amp; opportunity</small>
              </div>
              <div className="hero-stat">
                <span>Awards</span>
                <small>Visibility &amp; recognition</small>
              </div>
              <div className="hero-stat">
                <span>Impact</span>
                <small>Inclusion in action</small>
              </div>
            </div>
          </div>
        </section>
      </div>

      <main>
        <section className="pillar-section px-6 py-16 md:px-8 lg:px-12">
          <div className="section-intro">
            <p className="section-kicker">One ecosystem. Two engines.</p>
            <h2 className="section-title">Turn potential into visibility.</h2>
            <p className="section-copy">
              MVA develops the people shaping tomorrow, then gives their work a
              stage, a network, and the recognition it deserves.
            </p>
          </div>
          <div className="pillar-grid">
            <article className="pillar-card rise-pillar">
              <span className="pillar-number">01 / MVA RISE</span>
              <h3>Discover, Develop &amp; Launch</h3>
              <p>
                Through structured bootcamps, practical training, professional
                mentorship, and certification, MVA Rise takes raw talent and
                turns it into viable careers and businesses. Specialized tracks
                like the MVA Rise Young Women Skills Initiative serve ages 15–24
                with real pathways to entrepreneurship and employment.
              </p>
              <Link to="/mva-rise" className="text-link">Learn About MVA Rise <span aria-hidden="true">→</span></Link>
            </article>
            <article className="pillar-card awards-pillar">
              <span className="pillar-number">02 / MVA AWARDS &amp; EVENTS</span>
              <h3>Celebrating Impact &amp; Excellence</h3>
              <p>
                The prestigious Annual Merit and Value Awards Ceremony and our
                dynamic showcase events put a powerful spotlight on innovators,
                creators, entrepreneurs, and change-makers moving Nigeria and
                beyond forward. Winning with MVA is a gateway to visibility and
                networks.
              </p>
              <Link to="/awards" className="text-link">View Awards / Nominate <span aria-hidden="true">→</span></Link>
            </article>
          </div>
        </section>

        <section className="pathway-section px-6 py-16 md:px-8 lg:px-12">
          <div className="section-intro pathway-intro">
            <p className="section-kicker">The MVA Rise Pathway</p>
            <h2 className="section-title">From first spark to next chapter.</h2>
            <p className="section-copy">A practical, connected journey for talent ready to move.</p>
          </div>
          <div className="pathway-grid">
            {[
              ["01", "Discover", "Finding talent through community events, social media, and strategic partnerships."],
              ["02", "Develop", "Practical, high-value training in digital skills, fashion, beauty, content creation, and entrepreneurship."],
              ["03", "Certify & Mentor", "Industry credentials and guidance from experienced professionals who know the road ahead."],
              ["04", "Connect & Launch", "Real markets, funding opportunities, corporate cohorts, and the MVA recognition stage."],
            ].map(([number, title, body]) => (
              <article className="pathway-step" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="programs-section px-4 py-16 md:px-8 lg:px-12">
          <div className="section-intro">
            <p className="section-kicker">Featured programs</p>
            <h2 className="section-title">Skills, inclusion, and opportunity that move people forward.</h2>
            <p className="section-copy">
              Explore the MVA initiatives developing creatives   and carrying recognition into meaningful next steps.
            </p>
          </div>
          <div className="programs-grid">
            {programs.map((program) => (
              <article className="program-card" key={program.id}>
                <span className="program-card-number">{program.number} / MVA</span>
                <h3>{program.title}</h3>
                <p className="program-card-audience">{program.audience}</p>
                <p>{program.summary}</p>
                <button
                  className="program-card-link"
                  onClick={() => setSelectedProgram(program)}
                  aria-haspopup="dialog"
                >
                  Explore program details <span aria-hidden="true">→</span>
                </button>
              </article>
            ))}
          </div>
          <Link to="/sponsors" className="button-theme bolder programs-sponsor-link">Partner with a program</Link>
        </section>
      </main>

      {selectedProgram && (
        <div
          className="program-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedProgram(null);
          }}
        >
          <section
            className="program-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="program-modal-title"
          >
            <button
              className="program-modal-close"
              onClick={() => setSelectedProgram(null)}
              aria-label="Close program details"
            >
              <span aria-hidden="true">×</span>
            </button>
            <p className="section-kicker">{selectedProgram.audience}</p>
            <h2 id="program-modal-title">{selectedProgram.title}</h2>
            {selectedProgram.details.map((detail) => <p key={detail}>{detail}</p>)}
            {selectedProgram.sections.map((section) => (
              <div className="program-modal-section" key={section.title}>
                <h3>{section.title}</h3>
                <div className="program-modal-items">
                  {section.items.map((item) => (
                    <article key={item.title}>
                      <h4>{item.title}</h4>
                      <p>{item.body}</p>
                    </article>
                  ))}
                </div>
              </div>
            ))}
            <div className="program-modal-section">
              <h3>What participants can work toward</h3>
              <ul>
                {selectedProgram.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
              </ul>
            </div>
            <Link to="/sponsors" className="button-theme bolder">Partner with MVA</Link>
          </section>
        </div>
      )}

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

      <section className="partner-showcase partner-showcase-home">
        <div className="partner-showcase-inner">
          <header className="partner-showcase-heading">
            <p className="section-kicker">The people beside us</p>
            <h2>Our Partners</h2>
            <p>We are grateful to the organizations supporting our work and the communities we serve.</p>
          </header>
          <div className="partner-logo-grid">
            {partners.map((partner) => (
              <article className="partner-logo-card" key={partner.name}>
                <img src={partner.logo} alt={`${partner.name} logo`} loading="lazy" />
                <span>{partner.name}</span>
              </article>
            ))}
          </div>
          <Link to="/sponsors" className="button-theme bolder partner-showcase-link">
            Become a sponsor
          </Link>
        </div>
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
