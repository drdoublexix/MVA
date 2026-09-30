import { useState } from "react";
import { list } from "./App.jsx";
import "./index.css";
import back from "./assets/back.png";
import menu from "./assets/menu2.jpeg";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import logo from "./assets/logo.png";
import fb from "./assets/icons8-fb.svg";
import ig from "./assets/icons8-ig.svg";
import x from "./assets/icons8-x-50.png";
import youtube from "./assets/icons8-youtube.png";
import tiktok from "./assets/icons8-tiktok-50.png";
import mediaLead from "./assets/medialead.jpeg";
import contentCreator from "./assets/contentCreator.jpeg";
import Adanna from "./assets/Adanna.jpeg";
import Emmanuel from "./assets/Emmanuel.jpeg";
import Alimani from "./assets/Alimani.jpeg";

const AboutUs = () => {
  const [slide, setSlide] = useState(false);

  const toggleSlide = () => {
    setSlide(!slide);
  };

  return (
    <>
      <Helmet>
        <title>About Us | Merit And Value Awards Nigeria</title>
        <meta name="description" content="Learn about the mission, vision, and team behind the Merit and Value Awards (MVA) Nigeria." />
      </Helmet>

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

        {/* body section */}
        <section className="about-hero-section bg-[url('./assets/AboutHero.jpg')]">
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
          <header className="about-hero-content text-center bolder text-white">
            <p className="about-hero-kicker">MVA Rise + MVA Awards &amp; Events</p>
            <h1>Defining the Future. Building Excellence.</h1>
            <h2 className="light text-[17px]">
              We don’t just celebrate success—we build the systems, skills, and pathways that make it possible.
            </h2>
          </header>
        </section>
      </div>
      <main className="about-page">
        <section className="about-story-section">
          <div className="about-story-inner">
            <p className="about-kicker">Our expanded story &amp; identity</p>
            <h2>Where talent meets opportunity.</h2>
            <p>
              Merit and Value Awards (MVA) is a forward-thinking, multifaceted
              enterprise committed to driving sustainable human capital
              development, economic empowerment, and excellence across Nigeria
              and beyond.
            </p>
            <p>
              Founded on the belief that true progress happens when talent meets
              opportunity, MVA has evolved beyond a traditional award ceremony.
              Today, we operate a powerful dual ecosystem: MVA Rise, our
              flagship talent, skills, and opportunity development arm, and MVA
              Awards &amp; Events, which spots, honors, and amplifies the brightest
              minds in arts, business, and innovation.
            </p>
            <p>
              We are a registered enterprise driven by impact, sustainability,
              and growth. Young people should not have to wait for luck to
              change their lives—they need practical skills, professional
              mentorship, financial literacy, and direct pathways to the market.
              By taking matters into our own hands, we are shaping an inclusive
              future where every young innovator, creator, and entrepreneur can
              build something meaningful.
            </p>
          </div>
        </section>

        <section className="about-direction-section">
          <div className="about-section-heading">
            <p className="about-kicker">Our direction</p>
            <h2>Ambition with a practical route forward.</h2>
          </div>
          <div className="about-direction-grid">
            <article className="about-direction-card vision-card">
              <span>Our vision</span>
              <h3>Build Africa’s most trusted talent-to-value platform.</h3>
              <p className="font-semibold"> {/* Added font-semibold or font-bold */}
                To be Africa&apos;s leading platform for discovering, developing,
                and celebrating young talent—transforming raw potential into
                thriving careers, enterprises, and enduring economic value.
              </p>
            </article>
            <article className="about-direction-card mission-card">
              <span>Our mission</span>
              <ul className="font-semibold"> {/* Adding it here bolds all list items at once */}
                <li>Equip the younger generation with high-demand, practical skills through structured training and mentorship.</li>
                <li>Connect developed talent directly to real-world opportunities, employment, and market networks.</li>
                <li>Celebrate, reward, and amplify outstanding achievement, creativity, and leadership through prestigious platforms.</li>
                <li>Foster total inclusion so talent has equal access to growth and visibility, regardless of background, gender, or physical ability.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="about-pillars-section">
          <div className="about-section-heading">
            <p className="about-kicker">How we create impact</p>
            <h2>The two pillars of MVA.</h2>
          </div>
          <div className="about-pillar-grid">
            <article className="about-pillar-card rise-about-card">
              <span className="about-pillar-label">01 / Development engine</span>
              <h3>MVA Rise</h3>
              <strong>Discover. Develop. Certify. Connect.</strong>
              <p>
                MVA Rise runs intensive bootcamps, professional training courses
                spanning digital skills, fashion, beauty, content creation, and
                entrepreneurship, plus specialized programs like the MVA Rise
                Young Women Skills Initiative for ages 15–24. It bridges the gap
                between raw talent and economic self-sufficiency.
              </p>
              <Link to="/mva-rise" className="about-link">Explore MVA Rise <span aria-hidden="true">→</span></Link>
            </article>
            <article className="about-pillar-card awards-about-card">
              <span className="about-pillar-label">02 / Recognition stage</span>
              <h3>MVA Awards &amp; Events</h3>
              <strong>Spotlight. Validate. Amplify.</strong>
              <p>
                We host the annual Merit and Value Awards Ceremony and high-
                profile showcases that put a national and international spotlight
                on industry leaders, creative geniuses, outstanding brands, and
                rising stars moving society forward.
              </p>
              <Link to="/awards" className="about-link">Explore the awards <span aria-hidden="true">→</span></Link>
            </article>
          </div>
        </section>

        <section className="about-values-section">
          <div className="about-section-heading">
            <p className="about-kicker">What guides us</p>
            <h2>Our core values.</h2>
          </div>
          <div className="about-values-grid">
            {[
              ["Excellence", "We hold ourselves and our participants to the highest standards of quality and professionalism."],
              ["Inclusion", "We break barriers. Talent knows no bounds, and our programs create equal opportunity for persons living with disabilities and underserved groups."],
              ["Agency & Action", "We do not wait for change; we build it. We take active responsibility for pathways that lead to youth employment and enterprise growth."],
              ["Sustainability", "We build impact models that are scalable, sustainable, and backed by powerful corporate partnerships and sponsored cohorts."],
            ].map(([title, body], index) => (
              <article className="about-value" key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* The team */}

      <section className="p-4 sm:p-6 lg:p-8 bg-gray-100">
        <header className="max-w-5xl mx-auto">
          <h1 className="bolder2 text-2xl md:text-3xl text-[#1F2937] text-center mt-[30px]">
            Meet the team
          </h1>
          <p className="light2 text-lg md:text-xl text-center mt-4 leading-8 text-gray-700">
            Behind every great awards platform is a team that believes deeply in
            what they are building. At Merit and Value Awards, our team brings
            together decades of combined experience across entertainment, media,
            healthcare, education, and technology — all united by one shared
            mission: to celebrate talent, champion inclusion, and make
            excellence visible.
          </p>
        </header>

        <div className="mt-10 max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          <article className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <img
              src={Adanna}
              alt="Jane Francis"
              className="w-full h-[260px] object-cover object-[center_20%]"
            />
            <div className="p-5">
              <h2 className="bolder2 text-xl text-gray-900">Jane Francis</h2>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.2em] text-[#0284C7]">
                Chief Executive Officer
              </p>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                Bachelor of Science (B.Sc.) Microbiology, University of
                Maiduguri. Humanitarian, entrepreneur, and influencer. With over 10 years
                of experience in media consultion, content creation, and event planning,
                Jane leads the overall strategic direction, programming, fundraising, and
                partnerships of Merit and Value Awards, ensuring the platform
                remains a credible, inclusive, and community-driven force for
                recognising excellence in Maiduguri and beyond.
              </p>
            </div>
          </article>

          <article className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <img
              src={Alimani}
              alt="Alimami Baba Mai"
              className="w-full h-[260px] object-cover object-[center_13%]"
            />
            <div className="p-5">
              <h2 className="bolder2 text-xl text-gray-900">
                Alimami Baba Mai
              </h2>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.2em] text-[#0284C7]">
                Chief Operations Officer
              </p>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                Bachelor of Science (B.Sc.) Physical and Health Education,
                University of Maiduguri. A seasoned entertainment industry
                professional with over 8 years of experience in creative event
                management and talent development. He oversees the day-to-day
                operations of Merit and Value Awards, ensuring every program,
                event, and initiative runs with precision, purpose, and
                excellence from planning through to execution.
              </p>
            </div>
          </article>

          <article className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <img
              src={contentCreator}
              alt="Mshelmbula Hyelkuzuku Mwada"
              className="w-full h-[260px] object-cover object-[center_20%]"
            />
            <div className="p-5">
              <h2 className="bolder2 text-xl text-gray-900">
                Mshelmbula Hyelkuzuku Mwada
              </h2>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.2em] text-[#0284C7]">
                Chief Digital and Data Officer
              </p>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                Bachelor of Science (B.Sc.) Nursing, University of Maiduguri.
                Digital and data management professional with 6 years of
                experience. Mshelmbula oversees all digital operations and technical
                setup during Merit and Value Awards events, while managing the
                complete data ecosystem of the platform — including the
                records, profiles, and information of all artists, nominees,
                partners, and participants.
              </p>
            </div>
          </article>

          <article className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <img
              src={mediaLead}
              alt="Joshua Tari Quickpen"
              className="w-full h-[260px] object-cover object-[center_top]"
            />
            <div className="p-5">
              <h2 className="bolder2 text-xl text-gray-900">
                Joshua Tari Quickpen
              </h2>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.2em] text-[#0284C7]">
                Media and Communications Lead
              </p>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                Bachelor of Science (B.Sc.) Anatomy, University of Maiduguri.
                Seasoned media and communications professional with 14 years of
                industry experience. Joshua leads all media strategy, content
                creation, press relations, and public engagement for Merit and
                Value Awards, shaping the voice and visibility of the brand
                across all platforms.
              </p>
            </div>
          </article>

          <article className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden sm:col-span-2 xl:col-span-1">
            <img
              src={Emmanuel}
              alt="Francis Emmanuel"
              className="w-full h-[260px] object-cover object-[center_28%]"
            />
            <div className="p-5">
              <h2 className="bolder2 text-xl text-gray-900">
                Francis Emmanuel
              </h2>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.2em] text-[#0284C7]">
                Chief Information and Security Officer
              </p>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                Digital and Structural Programmer, Khemsafe Institute of
                Information Technology. Cybersecurity, TS Academy. AI and
                Automation, TS Academy. Doctor of Veterinary Medicine (DVM),
                University of Maiduguri. With his 13 years of extensive experience in IT,
                Francis oversees the digital infrastructure, data integrity,
                and cybersecurity operations of Merit and Value Awards, ensuring the
                platform operatessecurely, transparently, and with the highest
                standards of digital trust.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Footer section */}

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

export default AboutUs;
