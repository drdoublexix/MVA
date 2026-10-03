import { useState } from "react";
import { Link } from "react-router";
import { list } from "./App.jsx";
import "./index.css";
import back from "./assets/back.png";
import menu from "./assets/menu2.jpeg";
import { officialAwardCategories } from "./officialAwardCategories.js";

const PublicNomination = () => {
  const [slide, setSlide] = useState(false);
  const [formData, setFormData] = useState({
    nomineeName: "",
    category: "",
    location: "",
    reason: "",
    nominatorName: "",
    nomineeRegistered: false,
  });

  const toggleSlide = () => {
    setSlide((previous) => !previous);
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = [
      "MVA Awards - Free Public Nomination",
      `Nominee's full name: ${formData.nomineeName.trim()}`,
      `Award category: ${formData.category}`,
      `City / state: ${formData.location.trim()}`,
      `Why they deserve recognition: ${formData.reason.trim()}`,
      `Nominated by: ${formData.nominatorName.trim()}`,
      "Nominee has completed official MVA registration: Yes",
    ].join("\n");

    const whatsappUrl = `https://wa.me/2349071358268?text=${encodeURIComponent(message)}`;
    window.location.assign(whatsappUrl);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="flex">
        <aside
          className={`heading fixed md:static ${slide ? "slide-in" : "slide-out"}`}
        >
          <ul className="list">
            <button className="menu" onClick={toggleSlide} aria-label="Close navigation">
              <img src={back} alt="" />
            </button>
            {list.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="header-button">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        <div className="w-full">
      <header className="relative border-b border-amber-500/20 bg-black px-5 py-10 text-center sm:py-14">
        <button
          className="menu-toggle-button"
          onClick={toggleSlide}
          aria-label="Open navigation"
          aria-expanded={slide}
        >
          <img src={menu} alt="" className="ml-3" />
        </button>
        <Link to="/nominate" className="text-sm text-amber-400 hover:text-amber-300">
          Back to nominations
        </Link>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
          Merit and Value Awards
        </p>
        <h1 className="mx-auto mt-3 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl">
          Nominate someone for free
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-neutral-300 sm:text-base">
          Put a deserving, officially registered nominee forward for recognition.
          Tell us about them and why their work stands out.
        </p>
      </header>

      <main className="px-4 py-10 sm:px-6 sm:py-14">
        <form
          onSubmit={handleSubmit}
          className="mx-auto grid max-w-3xl gap-5 rounded-2xl border border-neutral-800 bg-neutral-900 p-5 shadow-2xl shadow-black/30 sm:grid-cols-2 sm:p-8"
        >
          <label className="grid gap-2 text-sm font-semibold text-neutral-200">
            Nominee's full name
            <input
              name="nomineeName"
              autoComplete="name"
              value={formData.nomineeName}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-3 font-normal text-white outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30"
            />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-neutral-200">
            Award category
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-3 font-normal text-white outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30"
            >
              <option value="">Select a category</option>
              {officialAwardCategories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </label>

          <label className="grid gap-2 text-sm font-semibold text-neutral-200">
            Nominee's city / state
            <input
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-3 font-normal text-white outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30"
            />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-neutral-200">
            Your name
            <input
              name="nominatorName"
              autoComplete="name"
              value={formData.nominatorName}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-3 font-normal text-white outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30"
            />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-neutral-200 sm:col-span-2">
            Why should this nominee receive recognition?
            <textarea
              name="reason"
              rows="5"
              minLength="20"
              maxLength="1500"
              value={formData.reason}
              onChange={handleChange}
              required
              placeholder="Describe their achievements, impact, or contribution."
              className="w-full resize-y rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-3 font-normal text-white outline-none placeholder:text-neutral-500 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30"
            />
          </label>

          <label className="flex items-start gap-3 text-sm leading-6 text-neutral-300 sm:col-span-2">
            <input
              type="checkbox"
              name="nomineeRegistered"
              checked={formData.nomineeRegistered}
              onChange={handleChange}
              required
              className="mt-1 h-4 w-4 shrink-0 accent-amber-400"
            />
            <span>I confirm that this nominee has completed their official MVA nominee registration.</span>
          </label>

          <p className="text-sm leading-6 text-neutral-400 sm:col-span-2">
            Submitting opens WhatsApp with your nomination addressed to MVA. Review the message and tap Send to complete your free nomination.
          </p>

          <button
            type="submit"
            className="rounded-full bg-amber-500 px-6 py-3 font-semibold text-black transition hover:bg-amber-400 sm:col-span-2 sm:justify-self-start"
          >
            Continue to WhatsApp
          </button>
        </form>
      </main>
        </div>
      </div>
    </div>
  );
};

export default PublicNomination;
