import { useState } from "react";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import { list } from "./App.jsx";
import "./index.css";
import back from "./assets/back.png";
import menu from "./assets/menu2.jpeg";
import logo from "./assets/logo.png";
import { supabase } from "./supabaseClient.js";

const MvaRiseRegister = () => {
  const [slide, setSlide] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    track: "",
    motivation: "",
  });

  const toggleSlide = () => setSlide((current) => !current);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmissionStatus("Submitting your application...");

    const { error } = await supabase.from("mva_rise_applications").insert({
      full_name: formData.fullName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      age: Number(formData.age),
      preferred_track: formData.track,
      motivation: formData.motivation.trim(),
    });

    if (error) {
      console.error("MVA Rise application failed:", error);
      setSubmissionStatus("We could not submit your application. Please try again later.");
      return;
    }

    setSubmissionStatus("Your application has been received. Thank you for your interest in MVA Rise.");
  };

  return (
    <>
      <Helmet>
        <title>Apply to MVA Rise | Merit And Value Awards Nigeria</title>
        <meta name="description" content="Apply for an upcoming MVA Rise skills development cohort." />
      </Helmet>

      <div className="rise-register-page">
        <aside className={`heading fixed md:static ${slide ? "slide-in" : "slide-out"}`}>
          <ul className="list">
            <button className="menu" onClick={toggleSlide}>
              <img src={back} alt="Back" />
            </button>
            {list.map((item, index) => (
              <li key={index}>
                <Link to={item.path} className="header-button">{item.name}</Link>
              </li>
            ))}
          </ul>
        </aside>

        <div className="rise-register-shell">
          <header className="rise-register-header">
            <button className="fixed top-0 left-0 z-[20] h-[45px] w-[50px] rounded-[50%] bg-[#999999]" onClick={toggleSlide}>
              <img src={menu} alt="Menu" className="ml-3" />
            </button>
            <img src={logo} alt="Logo" className="absolute right-3 top-3 z-30 h-[35px] md:h-[55px]" />
            <div>
              <p className="rise-kicker">MVA Rise / 2027 cohort</p>
              <h1>MVA Rise returns in 2027.</h1>
              <p>Applications are coming soon. Explore the application preview and get ready for the next cohort.</p>
            </div>
          </header>

          <main className="rise-register-main">
            <div className="rise-register-intro">
              <p className="rise-kicker">Applications opening in 2027 (COMING SOON)</p>
              <h2>Your next step starts here.</h2>
              <p>
                The next MVA Rise cohort is being prepared for 2027. The application form is shown below so you can review the information we will request when applications open.
              </p>
            </div>

            <form className="rise-register-form" onSubmit={handleSubmit}>
              <label>
                Full name
                <input name="fullName" value={formData.fullName} onChange={handleChange} required />
              </label>
              <label>
                Email address
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </label>
              <label>
                Phone number
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
              </label>
              <label>
                Age
                <input type="number" name="age" min="15" max="99" value={formData.age} onChange={handleChange} required />
              </label>
              <label className="rise-register-full-field">
                Preferred training track
                <select name="track" value={formData.track} onChange={handleChange} required>
                  <option value="">Select a track</option>
                  <option>Digital & Emerging Tech</option>
                  <option>Creative Enterprise & Fashion</option>
                  <option>Beauty Enterprise & Lifestyle</option>
                  <option>Digital Media & Creator Economy</option>
                  <option>Venture Incubation & Leadership</option>
                  <option>Green Energy & CleanTech</option>
                </select>
              </label>
              <label className="rise-register-full-field">
                Why do you want to join MVA Rise?
                <textarea name="motivation" rows="5" value={formData.motivation} onChange={handleChange} required />
              </label>
              {submissionStatus && <p className="rise-register-full-field" role="status">{submissionStatus}</p>}
              {/* <button type="submit" className="button-theme bolder rise-register-submit">Submit cohort application</button> */}
            </form>
          </main>
        </div>
      </div>
    </>
  );
};

export default MvaRiseRegister;
