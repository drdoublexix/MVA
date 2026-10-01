import logo from "./assets/logo.png";
import fb from "./assets/icons8-fb.svg";
import ig from "./assets/icons8-ig.svg";
import x from "./assets/icons8-x2.png"; //note that the x2 import is different
import youtube from "./assets/icons8-youtube.png";
import tiktok from "./assets/icons8-tiktok2.png";
import "./index.css";
import back from "./assets/back.png";
import menu from "./assets/menu2.jpeg";
import { Link } from "react-router";
import { useState } from "react";
import { list } from "./App.jsx";
import email from "./assets/icons8-email.png";
import location from "./assets/icons8-location.png";
import time from "./assets/icons8-time.png";
import whatsapp from "./assets/whatsapp.png";

const ContactUs = () => {
  const [slide, setSlide] = useState(false);

  const toggleSlide = () => {
    setSlide(!slide);
  };

  return (
    <>
      <div className="flex w-full overflow-hidden">
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

        <section className="contact-hero w-full overflow-hidden">
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
          <header className="contact-hero-content">
            <p className="contact-kicker">Start a useful conversation</p>
            <h1>Connect with the MVA ecosystem.</h1>
            <p>Whether you are building, nominating, partnering, or covering the story, there is a place to begin.</p>
          </header>
        </section>
      </div>
      <main className="contact-page">
        <section className="contact-intro">
          <div className="contact-intro-inner">
            <div>
              <p className="contact-kicker">Choose your path</p>
              <h2>Tell us what you are building.</h2>
            </div>
            <p>
              MVA is a connected platform. Reach the right team for skills and
              cohorts, awards and nominations, sponsorship, media, or general
              enquiries.
            </p>
          </div>
        </section>

        <section className="contact-paths">
          <div className="contact-section-heading">
            <p className="contact-kicker">Contact pathways</p>
            <h2>One clear next step.</h2>
          </div>
          <div className="contact-path-grid">
            <Link to="/mva-rise/register" className="contact-path-card">
              <span>01 / MVA Rise</span>
              <h3>Apply for a cohort</h3>
              <p>Explore training tracks, apply for current cohorts, and begin your development journey.</p>
              <strong>Apply now →</strong>
            </Link>
            <Link to="/nominate/submit" className="contact-path-card">
              <span>02 / MVA Awards</span>
              <h3>Nominate a changemaker</h3>
              <p>Put a creator, entrepreneur, public figure, or community leader in the spotlight.</p>
              <strong>Start a nomination →</strong>
            </Link>
            <Link to="/sponsors" className="contact-path-card">
              <span>03 / Partnerships</span>
              <h3>Build an impact partnership</h3>
              <p>Fund a cohort, sponsor a category, or design a strategic partnership with MVA.</p>
              <strong>Partner with us →</strong>
            </Link>
            <a href="mailto:info@mail.meritandvalueawards.com" className="contact-path-card">
              <span>04 / Media &amp; general</span>
              <h3>Ask a question</h3>
              <p>For media requests, collaborations, speaking, or anything else, send us a message.</p>
              <strong>Email the team →</strong>
            </a>
          </div>
        </section>

        <section className="contact-details">
          <div className="contact-section-heading">
            <p className="contact-kicker">Direct contact</p>
            <h2>We are easy to reach.</h2>
          </div>
          <div className="contact-detail-grid">
            <a href="mailto:info@mail.meritandvalueawards.com"><img src={email} alt="Email" /><span>Email</span><strong>info@mail.meritandvalueawards.com</strong></a>
            <a href="https://wa.me/+2349071358268" target="_blank" rel="noopener noreferrer"><img src={whatsapp} alt="WhatsApp" /><span>WhatsApp</span><strong>+234 907 135 8268</strong></a>
            <a href="https://www.google.com/maps/search/?api=1&query=11.8333,13.1500" target="_blank" rel="noopener noreferrer"><img src={location} alt="Location" /><span>Based in</span><strong>Maiduguri, Borno State</strong></a>
            <div><img src={time} alt="Office hours" /><span>Office hours</span><strong>Monday – Friday, 9:00am – 5:00pm</strong></div>
          </div>
        </section>

        <section className="contact-social">
          <div className="contact-social-inner">
            <div>
              <p className="contact-kicker">Stay connected</p>
              <h2>Follow the work as it happens.</h2>
            </div>
            <div className="contact-social-links">
              <a href="https://www.instagram.com/meritandvalueawards?igsh=MXA4NmpwczN0M2c3dA==" target="_blank"><img src={ig} alt="Instagram" /><span>Instagram</span></a>
              <a href="https://www.facebook.com/meritandvalueawards" target="_blank"><img src={fb} alt="Facebook" /><span>Facebook</span></a>
              <a href="https://x.com/mvaevent" target="_blank"><img src={x} alt="X" /><span>X</span></a>
              <a href="https://www.tiktok.com/@_meritandvalueawards_?_r=1&_t=ZS-98KU4UeRLFs" target="_blank"><img src={tiktok} alt="TikTok" /><span>TikTok</span></a>
              <a href="https://youtube.com/@meritandvalueawards?si=eawtqPzlaQw77ym3" target="_blank"><img src={youtube} alt="YouTube" /><span>YouTube</span></a>
            </div>
          </div>
        </section>
      </main>

      {/* <section className="p-4 text-center">
        <h1 className="text-slate-500 bolder2 text-2xl mb-[40px] md:text-4xl">
          Sponsorship & Donation Payments
        </h1>
        <span className="text-xl md:text-2xl">
          To support Merit and Value Awards directly, kindly use the details
          below:
        </span>

        <div className=" w-[30%] mx-auto flex justify-center">
          <ul className="flex flex-col mb-4">
            <li className="flex justify-start">
              <b className="mr-1" >Account Name:</b> Jane Francis
            </li>
            <li>
              <b>Account number:</b> 0084391253
            </li>
            <li className="flex justify-start">
              <b className="mr-1">Bank:</b> Access bank
            </li>
          </ul>
        </div>
        <i>
          Please send proof of payment to our whatsapp link above after making a transfer.
        </i>
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

export default ContactUs;
