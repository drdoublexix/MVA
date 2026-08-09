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
import music from "./assets/icons8-music.png";
import movie from "./assets/icons8-movie.png";
import dress from "./assets/icons8-dress.png";
import dance from "./assets/icons8-dancing.png";
import wheelchair from "./assets/wheelchair.png";
import metal from "./assets/metalHand.png";
import bell from "./assets/bell.png";
import handshake from "./assets/handshake.png";
import tv from "./assets/icons8-television.png";
import mic from "./assets/icons8-microphone.png";
import brand from "./assets/icons8-brand.png";
import cash from "./assets/icons8-dollar.png";
import star from "./assets/icons8-star.png";
import compass from "./assets/icons8-compass.png";


const Stardom = () => {
  const [slide, setSlide] = useState(false);

  const toggleSlide = () => {
    setSlide(!slide);
  };

  const categories = [
    {
      title: "Music, rapping, instrumentals",
      text: "Showcase vocal and instrumental talent across original and cover works.",
      icon: music,
      accent: "bg-amber-400",
    },
    {
      title: "Dancing",
      text: "Solo or group performances judged on creativity, technique and stage presence.",
      icon: dance,
      accent: "bg-orange-400",
    },
    {
      title: "Filming and storytelling",
      text: "Short films and visual stories evaluated for narrative, cinematography and impact.",
      icon: movie,
      accent: "bg-sky-400",
    },
    {
      title: "Fashion design",
      text: "Designers present original collections highlighting creativity and craftsmanship.",
      icon: dress,
      accent: "bg-rose-300",
    },
  ];

  const participationPoints = [
    "Youths aged 15 – 29",
    "Persons living with disabilities",
    "Creative talents seeking exposure and recognition",
    "Entertainment enthusiasts and aspiring professionals",
  ];

  const accessibilityPoints = [
    { icon: wheelchair, label: "Wheelchair-accessible venue" },
    { icon: metal, label: "Sign language interpreters" },
    { icon: bell, label: "Accessible facilities throughout" },
    { icon: handshake, label: "Trained support staff and volunteers" },
  ];

  const benefits = [
    { icon: tv, title: "Media exposure\n(Social media, TV)" },
    { icon: mic, title: "Live performance opportunities" },
    { icon: brand, title: "Brand Recognition" },
    { icon: cash, title: "Cash prizes and awards" },
    { icon: handshake, title: "Endorsement and sponsorship deals" },
    { icon: star, title: "Talent management opportunities" },
    { icon: compass, title: "Confidence, visibility and clear direction" },
  ];

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
          <section className="bg-black px-4 py-4 text-white md:px-6">
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

            <div className="pt-14 text-center md:pt-8">
              <p className="mb-3 inline-flex rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-sm text-amber-400">
                Talent Hunt 2027
              </p>
              <h1 className="mb-2 text-3xl font-bold text-amber-400 md:text-4xl">
                Rise to Fame — Talent Hunt 2027 (Coming Soon)
              </h1>
              <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-300 md:text-base">
                Gateway to Merit and Value Awards
              </p>
              <div className="mt-6 flex justify-center">
                <Link to="/register" className="rounded-full bg-amber-500 px-6 py-3 font-semibold text-black transition hover:bg-amber-400">
                  Register now
                </Link>
              </div>
            </div>
          </section>

          <main className="bg-[radial-gradient(circle_at_top,_rgba(255,180,0,0.16),_transparent_45%)] px-4 py-10 md:px-8 lg:px-12">
            <section className="mx-auto max-w-6xl rounded-[28px] border border-neutral-800 bg-neutral-900/80 p-6 shadow-2xl shadow-black/40 md:p-10">
              <div className="mb-6 text-center">
                <p className="text-sm uppercase tracking-[0.35em] text-amber-400">
                  About the event
                </p>
                <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
                  A platform that discovers talent and celebrates inclusion
                </h2>
              </div>
              <p className="mx-auto max-w-4xl text-base leading-8 text-neutral-300 md:text-lg">
                Merit and Value Awards proudly presents “Rise to Fame” Talent Hunt 2027 — a groundbreaking and inclusive platform designed to discover, nurture, and celebrate exceptional talents in Maiduguri. This initiative merges two powerful visions: discovering emerging stars and promoting inclusion by creating equal opportunities for persons living with disabilities. More than just a competition, Rise to Fame is a life-changing movement — transforming raw talent into recognised excellence, while redefining societal perceptions about ability, creativity, and success.
              </p>
            </section>

            <section className="mx-auto mt-10 max-w-6xl rounded-[28px] border border-neutral-800 bg-neutral-900/80 p-6 md:p-8">
              <div className="mb-6 text-center">
                <p className="text-sm uppercase tracking-[0.35em] text-amber-400">
                  Competition categories
                </p>
                <h2 className="mt-2 text-3xl font-bold text-white">
                  What you can compete in
                </h2>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className={`rounded-[20px] border border-neutral-800 p-6 text-center shadow-lg shadow-black/20 ${category.accent}`}
                  >
                    <img src={category.icon} alt={category.title} className="mx-auto mb-3 h-12 w-12 object-contain" />
                    <h3 className="text-lg font-semibold text-slate-900">{category.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-800">{category.text}</p>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-center text-sm text-neutral-400">
                Open to participants with or without disabilities
              </p>
            </section>

            <section className="mx-auto mt-10 grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-[24px] border border-neutral-800 bg-neutral-900 p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-amber-400">
                  Who can participate
                </p>
                <h2 className="mt-2 text-2xl font-bold text-white">A space for emerging talent</h2>
                <ul className="mt-5 space-y-3 text-sm text-neutral-300">
                  {participationPoints.map((point, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="mt-1 text-amber-400">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[24px] border border-neutral-800 bg-neutral-900 p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-amber-400">
                  Event structure
                </p>
                <h2 className="mt-2 text-2xl font-bold text-white">The journey from registration to finale</h2>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <article className="rounded-2xl border border-neutral-800 bg-neutral-950/70 p-5">
                    <h3 className="text-lg font-semibold text-white">Stage 1: Registrations and auditions</h3>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-400">
                      <li>Online and physical registration available</li>
                      <li>Online audition sessions</li>
                      <li>Screening by a panel of professional judges</li>
                    </ul>
                  </article>
                  <article className="rounded-2xl border border-neutral-800 bg-neutral-950/70 p-5">
                    <h3 className="text-lg font-semibold text-white">Stage 2: Grand Finale</h3>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-400">
                      <li>Live performances by finalists</li>
                      <li>Celebrity judges and guest artists</li>
                      <li>Red carpet experience</li>
                      <li>Winner announcement — Best Stage Performance</li>
                    </ul>
                  </article>
                </div>
              </div>
            </section>

            <section className="mx-auto mt-10 max-w-6xl rounded-[28px] border border-neutral-800 bg-neutral-900/80 p-6 md:p-8">
              <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-amber-400">
                    Built for everyone
                  </p>
                  <h2 className="mt-2 text-3xl font-bold text-white">
                    Accessibility is part of the experience
                  </h2>
                  <p className="mt-4 text-base leading-7 text-neutral-300">
                    Rise to Fame is committed to full accessibility. Our event will provide:
                  </p>
                  <ul className="mt-5 space-y-3">
                    {accessibilityPoints.map((item, index) => (
                      <li key={index} className="flex items-center gap-3 rounded-2xl border border-neutral-800 bg-neutral-950/70 px-4 py-3 text-sm text-neutral-300">
                        <img src={item.icon} alt={item.label} className="h-6 w-6" />
                        <span>{item.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[24px] border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-neutral-950 p-6">
                  <p className="text-center text-lg leading-8 text-neutral-200 md:text-left">
                    We prioritise accessibility in venue design, programming, and support services so every participant can fully engage and perform.
                  </p>
                </div>
              </div>
            </section>

            <section className="mx-auto mt-10 max-w-6xl rounded-[28px] border border-neutral-800 bg-neutral-900/80 p-6 md:p-8">
              <div className="mb-6 text-center">
                <p className="text-sm uppercase tracking-[0.35em] text-amber-400">
                  What participants will gain
                </p>
                <h2 className="mt-2 text-3xl font-bold text-white">
                  Opportunities that open doors
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {benefits.map((item, index) => (
                  <div
                    key={index}
                    className={`rounded-[20px] p-4 text-center shadow-lg shadow-black/20 ${index % 2 === 0 ? "bg-neutral-950/80 text-white" : "bg-amber-400/90 text-slate-900"}`}
                  >
                    <img src={item.icon} alt={item.title} className="mx-auto mb-3 h-10 w-10 object-contain" />
                    <span className="text-sm font-semibold leading-6 whitespace-pre-line">{item.title}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="mx-auto mt-10 max-w-6xl rounded-[28px] border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-neutral-900 p-6 text-center text-white md:p-8">
              <h2 className="text-3xl font-bold text-amber-400 md:text-4xl">
                Ready to rise?
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-neutral-300">
                Don’t miss your chance to step into the spotlight. Registration is open to all eligible participants.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Link to="/register" className="rounded-full bg-amber-500 px-6 py-3 font-semibold text-black transition hover:bg-amber-400">
                  Register
                </Link>
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

export default Stardom;
