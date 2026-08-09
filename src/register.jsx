import React from "react";
import { useState } from "react";
import { list } from "./App.jsx";
import "./index.css";
import back from "./assets/back.png";
import menu from "./assets/menu2.jpeg";
import { Link } from "react-router";
import music from "./assets/icons8-music.png";
import movie from "./assets/icons8-movie.png";
import dress from "./assets/icons8-dress.png";
import card2 from "./assets/icons8-lightbulb.png";
import phone from "./assets/icons8-phone.png";
import charity from "./assets/icons8-charity.png";
import dance from "./assets/icons8-dancing.png";
import logo from "./assets/logo.png";
import fb from "./assets/icons8-fb.svg";
import ig from "./assets/icons8-ig.svg";
import x from "./assets/icons8-x-50.png";
import youtube from "./assets/icons8-youtube.png";
import tiktok from "./assets/icons8-tiktok-50.png";
import award1 from "./assets/award1.JPG";
import award2 from "./assets/award2.JPG";
import award3 from "./assets/award3.JPG";

const Register = () => {
  const [slide, setSlide] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    category: "",
    talent: "",
    location: "",
    motivation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = [
      "New nominee registration",
      `Full name: ${formData.fullName}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Category: ${formData.category}`,
      `Talent: ${formData.talent}`,
      `Location: ${formData.location}`,
      `Motivation: ${formData.motivation}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/2349071358268?text=${encodeURIComponent(message)}`;

    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }
  };

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

        <section className="w-full bg-black text-white p-3 h-[170px] md:text-3xl">
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
          <header className="text-center mt-4">
            <h1 className=" bolder text-3xl sm:text-4xl">Register</h1>
          </header>
        </section>
      </div>

      {/* form section */}

      <section>
        <section className="p-[30px] mt-[40px] bg-[#F9FAFB]">
          <div className="mx-auto max-w-5xl rounded-[20px] bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.08)] md:p-10">
            <div className="mb-8 text-center">
              <h2 className="bolder2 text-2xl text-[#334155] md:text-3xl">
                Nominee Registration Form
              </h2>
              <p className="light2 mt-2 text-base text-slate-800 md:text-lg">
                Fill in your details and we will connect you directly to the
                nomination team on WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-2 md:col-span-2">
                <label
                  htmlFor="fullName"
                  className="bolder2 text-sm text-slate-700"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-[10px] border border-[#BCC6CC] p-3 outline-none focus:border-[#00B8FF]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="bolder2 text-sm text-slate-700"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-[10px] border border-[#BCC6CC] p-3 outline-none focus:border-[#00B8FF]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="phone"
                  className="bolder2 text-sm text-slate-700"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-[10px] border border-[#BCC6CC] p-3 outline-none focus:border-[#00B8FF]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="category"
                  className="bolder2 text-sm text-slate-700"
                >
                  Award Category
                </label>
                <input
                  id="category"
                  name="category"
                  type="text"
                  value={formData.category}
                  onChange={handleChange}
                  placeholder="e.g. Music, Fashion, Entrepreneurship"
                  required
                  className="w-full rounded-[10px] border border-[#BCC6CC] p-3 outline-none focus:border-[#00B8FF]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="talent"
                  className="bolder2 text-sm text-slate-700"
                >
                  Talent / Skill
                </label>
                <input
                  id="talent"
                  name="talent"
                  type="text"
                  value={formData.talent}
                  onChange={handleChange}
                  placeholder="Tell us what you do"
                  required
                  className="w-full rounded-[10px] border border-[#BCC6CC] p-3 outline-none focus:border-[#00B8FF]"
                />
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label
                  htmlFor="location"
                  className="bolder2 text-sm text-slate-700"
                >
                  Location
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="City / State"
                  required
                  className="w-full rounded-[10px] border border-[#BCC6CC] p-3 outline-none focus:border-[#00B8FF]"
                />
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label
                  htmlFor="motivation"
                  className="bolder2 text-sm text-slate-700"
                >
                  Why do you want to be nominated?
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  rows="4"
                  value={formData.motivation}
                  onChange={handleChange}
                  placeholder="Share a short note about your journey or achievement"
                  required
                  className="w-full rounded-[10px] border border-[#BCC6CC] p-3 outline-none focus:border-[#00B8FF]"
                />
              </div>

              <div className="md:col-span-2 flex justify-center">
                <button
                  type="submit"
                  className="mt-2 rounded-[10px] bg-[#00B8FF] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#00A8E6]"
                >
                  Send to WhatsApp
                </button>
              </div>
            </form>
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
                  <img
                    src={fb}
                    alt="Facebook"
                    className="h-[30px] md:h-[30px]"
                  />
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
      </section>
    </>
  );
};

export default Register;
