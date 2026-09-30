import { useState } from "react";
import { Link } from "react-router";
import { list } from "./App.jsx";
import "./index.css";
import back from "./assets/back.png";
import menu from "./assets/menu2.jpeg";
import logo from "./assets/logo.png";
import fb from "./assets/icons8-fb.svg";
import ig from "./assets/icons8-ig.svg";
import x from "./assets/icons8-x-50.png";
import youtube from "./assets/icons8-youtube.png";
import tiktok from "./assets/icons8-tiktok-50.png";
import { officialAwardCategories } from "./officialAwardCategories.js";

const Nominate = () => {
  const [slide, setSlide] = useState(false);

  const toggleSlide = () => {
    setSlide(!slide);
  };

  const steps = [
    {
      title: "Visit the Voting Page on Our Official Website",
      text: "Visit the voting section on our website to explore all available categories and find the nominee you want to support.",
    },
    {
      title: "Make Your Payment",
      text: "Votes are priced at ₦100 each. You can cast as many votes as you wish—simply transfer the total amount for your desired number of votes to our official account, Every ₦100 translates to one vote.",
    },
    {
      title: "Upload Your Receipt",
      text: "Upload or attach your transaction payment receipt directly to the form, ensuring it matches your submitted details.",
    },
    {
      title: "Submit & Watch the Count Live",
      text: "Click the Submit button to complete your entry and validate your votes and watch the public tally updates automatically on the leaderboard in real-time for full transparency.",
    },
  ];

  const rules = [
    "One nomination per person, per category. (You can nominate in multiple different categories, but only one entry per category is allowed).",
    "Use the official format so your entry is counted properly.",
    "Self-nominations are not accepted.",
    "All nominees must be genuine individuals or organisations connected to Nigeria.",
  ];

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Merit and Value Awards 2026 - Nominate Now",
          url: window.location.href,
        })
        .catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="flex">
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

        <div className="w-full">
          <section className="nominate-page-header px-4 py-4 text-white md:px-6">
            <button
              className="fixed top-0 left-0 bg-[#999999] rounded-[50%] z-[20] md:cursor-pointer fixed h-[45px] w-[50px] "
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
              {/* <p className="text-sm uppercase tracking-[0.35em] text-amber-400">Nomination Page</p> */}
              <h1 className="mb-2 text-3xl  text-amber-400 font-bold md:text-4xl">
                Nominate someone worthy of the spotlight
              </h1>
              <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-300 md:text-base">
                The Merit and Value Awards celebrate excellence with a public,
                transparent nomination process that puts the people first.
              </p>
            </div>
          </section>

          <main className="bg-[radial-gradient(circle_at_top,_rgba(255,180,0,0.16),_transparent_45%)] px-4 py-10 md:px-8 lg:px-12">
            <section className="mx-auto max-w-6xl rounded-[28px] border border-neutral-800 bg-neutral-900/80 p-6 shadow-2xl shadow-black/40 md:p-10">
              <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                <div>
                  <p className="mb-3 inline-flex rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-sm text-amber-400">
                    Free public nominations
                  </p>
                  <h2 className="text-3xl font-bold text-white md:text-4xl">
                    Celebrate someone making a difference.
                  </h2>
                  <p className="mt-4 text-base leading-7 text-neutral-300">
                    Public nominations are free. If your nominee has completed
                    their official MVA registration, tell us who they are, their
                    award category, and why their work deserves recognition.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      to="/register"
                      className="rounded-full bg-amber-500 px-6 py-3 font-semibold text-black transition hover:bg-amber-400"
                    >
                      Register as a nominee
                    </Link>
                    <a
                      href="#how-it-works"
                      className="rounded-full bg-amber-500 px-6 py-3 font-semibold text-black transition hover:bg-amber-400"
                    >
                      View voting steps
                    </a>
                    <button
                      onClick={handleShare}
                      className="rounded-full border border-neutral-700 px-6 py-3 font-semibold text-neutral-100 transition hover:border-amber-500 hover:text-amber-400"
                    >
                      Share this page
                    </button>
                  </div>
                </div>

                <div className="rounded-[20px] border border-neutral-800 bg-neutral-950/80 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-400">
                    Nominate for free
                  </p>
                  <h3 className="mt-3 text-xl font-bold text-white">
                    Know someone who deserves the spotlight?
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-400">
                    Send us their details and the reason you are nominating them.
                  </p>
                  <Link
                    to="/nominate/submit"
                    className="mt-4 inline-flex items-center justify-center rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-amber-400"
                  >
                    Nominate someone
                  </Link>
                </div>
              </div>
            </section>

            <section className="mx-auto mt-10 max-w-6xl rounded-[28px] border border-neutral-800 bg-neutral-900/80 p-6 md:p-8">
              <div className="mb-6 text-center">
                <p className="text-sm uppercase tracking-[0.35em] text-amber-400">
                  Award categories
                </p>
                <h2 className="mt-2 text-3xl font-bold text-white">
                  Categories to nominate in
                </h2>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {officialAwardCategories.map((category, index) => (
                  <div
                    key={index}
                    className="rounded-[20px] border border-neutral-800 bg-neutral-950/70 p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                      Category {index + 1}
                    </p>
                    <h3 className="mt-3 text-base font-semibold leading-6 text-neutral-100">
                      {category}
                    </h3>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-center">
                <Link
                  to="/register"
                  className="rounded-full border border-amber-500 px-6 py-3 font-semibold text-amber-400 transition hover:bg-amber-500 hover:text-black"
                >
                  Continue to registration
                </Link>
              </div>
            </section>

            <section className="mx-auto mt-10 grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-[24px] border border-neutral-800 bg-neutral-900 p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-amber-400">
                  Rules
                </p>
                <h2 className="mt-2 text-2xl font-bold text-white">
                  Nomination guidelines
                </h2>
                <ul className="mt-5 space-y-3 text-sm text-neutral-400">
                  {rules.map((rule, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="mt-1 text-amber-400">•</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[24px] border border-neutral-800 bg-neutral-900 p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-amber-400">
                  Timeline
                </p>
                <h2 className="mt-2 text-2xl font-bold text-white">
                  What to expect next
                </h2>
                <div className="mt-5 space-y-4 text-sm text-neutral-300">
                  <div className="rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4">
                    <p className="font-semibold text-white">
                      Nomination window
                    </p>
                    <p className="mt-1 text-neutral-400">
                      To be announced on our official social channels.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4">
                    <p className="font-semibold text-white">
                      Shortlist announcement
                    </p>
                    <p className="mt-1 text-neutral-400">
                      The public will be updated immediately once the shortlist
                      is ready.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4">
                    <p className="font-semibold text-white">Award ceremony</p>
                    <p className="mt-1 text-neutral-400">
                      The grand event will take place in Maiduguri in October
                      2026. Exact date to be announced at our official handles
                      on Social Media.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="how-it-works" className="mx-auto mt-10 max-w-6xl">
              <div className="mb-6 text-center">
                <p className="text-sm uppercase tracking-[0.35em] text-amber-400">
                  Final voting process
                </p>
                <h2 className="mt-2 text-3xl font-bold text-white">
                  Vote for the qualifying nominees
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-neutral-400">
                  Once nominations are reviewed and qualifying nominees are announced, supporters can vote. Each vote costs ₦100.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="rounded-[22px] border border-neutral-800 bg-neutral-900 p-6"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/10 text-lg font-bold text-amber-400">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-neutral-400">
                      {step.text}
                    </p>
                  </div>
                ))}
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
        </div>
      </div>
    </div>
  );
};

export default Nominate;
