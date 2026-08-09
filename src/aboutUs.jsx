import React from "react";
import { useState } from "react";
import { list } from "./App.jsx";
import "./index.css";
import back from "./assets/back.png";
import menu from "./assets/menu2.jpeg";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import card1 from "./assets/icons8-medal.png";
import card2 from "./assets/icons8-lightbulb.png";
import card3 from "./assets/icons8-handshake.png";
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
        <section className="h-[200px] bg-[url('./assets/AboutHero.jpg')] md:bg-cover w-[100vw] h-[150px]">
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
          <header className="text-center mt-[50px] text-2xl bolder text-white sm: mt-">
            <h1> About Merit and value Awards</h1>
            <br />
            <h2 className="light text-[17px]">
              Our Story, Our Mission, Our Vision
            </h2>
          </header>
        </section>
      </div>
      {/* About Section */}
      <section className="bg-gradient-to-b from-[#F3F4F6] to-[#E5E7EB] py-[60px] px-[30px]">
        <div className="max-w-3xl mx-auto">
          <h2 className="bolder text-2xl md:text-3xl text-[#1F2937] mb-[30px] text-center">
            Who We Are
          </h2>
          <p className="light2 text-[#374151] text-[25px] leading-8 tracking-wide text-justify md:text-xl">
            Merit and Value Awards is a reputable platform based in Maiduguri,
            Nigeria, committed to celebrating excellence, creativity, culture,
            and innovation. We recognize individuals and organizations that are
            making meaningful impact across the entertainment and creative
            industries, in entrepreneurship, and in community development. Our
            annual awards ceremony brings together artists, industry
            stakeholders, and community members to honour exceptional
            achievements, promote creative expression and diversity, and inspire
            the next generation of talents.
            <br />
            <br />
            Maiduguri has seen a growing wave of young and seasoned talents in
            recent years — musicians, artists, and content creators making
            notable strides. Yet many lack the visibility and recognition they
            deserve. Merit and Value Awards was founded to bridge that gap: to
            provide a platform where talent is celebrated, acknowledged, and
            elevated.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-gradient-to-r from-[#DBEAFE] to-[#BAE6FD] py-[60px] px-[30px]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-[50px]">
          {/* Mission */}
          <div className="bg-white rounded-lg shadow-md p-[40px] border-l-4 border-[#0284C7]">
            <h3 className="bolder text-2xl text-[#0C4A6E] mb-[20px]">
              Mission
            </h3>
            <p className="light2 text-[#334155] text-xl leading-8 tracking-wide">
              To discover, celebrate, and empower exceptional talent —
              championing excellence, inclusion, and creativity in Maiduguri and
              across Nigeria.
            </p>
          </div>
          {/* Vision */}
          <div className="bg-white rounded-lg shadow-md p-[40px] border-l-4 border-[#0EA5E9]">
            <h3 className="bolder text-2xl text-[#0C4A6E] mb-[20px]">Vision</h3>
            <p className="light2 text-[#334155] text-xl  leading-8 tracking-wide">
              To become the leading platform for inclusive talent recognition in
              Nigeria, creating pathways for artists, creatives, and innovators
              to gain the visibility and opportunities they deserve.
            </p>
          </div>
        </div>
      </section>
      {/* Core values */}
      <section className="p-[30px] light2 bg-orange-100">
        <h1 className="text-3xl bolder2 text-[#1F2937] text-center ">Core Values</h1>
        {/* Card Container */}
        <div className="grid mt-[40px] justify-center items-center md:flex justify-around gap-10">
          {/* Cards */}
          <div className=" bg-[#ADD8E6] shadow-lg shadow-[5px_5px_70px_70px_70px_#FFFF] w-[350px] h-[250px] p-3 rounded-[20px]">
            <div className="card-img ">
              <img src={card1} alt="card" className="h-[150px]" />
            </div>
            <div className="text-center">
              <span className="bolder2 text-[#334155] text-2xl">
                Excellence
              </span>
            </div>
          </div>

          <div className=" bg-[#6EE7B7] shadow-lg shadow-[5px_5px_70px_70px_70px_#FFFF] w-[350px] h-[250px] p-3 rounded-[20px]">
            <div className="card-img ">
              <img src={card2} alt="card" className="h-[150px]" />
            </div>
            <div className="text-center">
              <span className="bolder2 text-[#334155] text-2xl">
                Innovation
              </span>
            </div>
          </div>

          <div className=" bg-[#FACC15] shadow-lg shadow-[5px_5px_70px_70px_70px_#FFFF] w-[350px] h-[250px] p-3 rounded-[20px]">
            <div className="card-img ">
              <img src={card3} alt="card" className="h-[120px]" />
            </div>
            <div className="text-center">
              <span className="bolder2 text-[#334155] text-2xl">Inclusion</span>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}

      <section className="p-4">
        <h1 className="text-center bolder2 text-2xl">Our programs</h1>

        <div className="mt-6 max-w-5xl mx-auto grid gap-6 md:grid-cols-3">
          <div className="bg-white rounded-lg shadow-md p-6 flex gap-4 items-start">
            <img
              src={card1}
              alt="Awards"
              className="h-12 w-12 object-contain mt-1"
            />
            <div>
              <h2 className="bolder2 text-xl">Annual Awards Ceremony</h2>
              <p className="mt-2 text-[#374151] leading-7">
                Our flagship event celebrates the best in music, film, fashion,
                humanitarian work, digital content, and more. Each year, we
                bring together the brightest names and rising stars in Maiduguri
                for a night of glamour, recognition, and inspiration.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 flex gap-4 items-start">
            <img
              src={card2}
              alt="Talent"
              className="h-12 w-12 object-contain mt-1"
            />
            <div>
              <h2 className="bolder2 text-xl">Rise to Fame Talent Hunt</h2>
              <p className="mt-2 text-[#374151] leading-7">
                A groundbreaking talent discovery competition designed to find
                and nurture exceptional talent — with a bold commitment to
                inclusivity for persons living with disabilities. Participants
                compete in music, dance, fashion design, storytelling, and
                visual arts.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 flex gap-4 items-start">
            <img
              src={card3}
              alt="Community"
              className="h-12 w-12 object-contain mt-1"
            />
            <div>
              <h2 className="bolder2 text-xl">Community Engagement</h2>
              <p className="mt-2 text-[#374151] leading-7">
                Beyond the events, we partner with NGOs, advocacy groups,
                schools, and corporate organisations to promote creative
                education, youth empowerment, and social inclusion.
              </p>
            </div>
          </div>
        </div>
      </section>

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
