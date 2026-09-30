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
import { supabase } from "./supabaseClient.js";

const MAX_RECEIPT_SIZE = 10 * 1024 * 1024;
const ALLOWED_RECEIPT_TYPES = ["application/pdf", "image/jpeg", "image/png", "image/webp"];

const Register = () => {
  const [slide, setSlide] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [paymentReceipt, setPaymentReceipt] = useState(null);
  const [formData, setFormData] = useState({
    nomineeName: "",
    email: "",
    phone: "",
    category: "",
    location: "",
    achievements: "",
    paymentConfirmed: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    if (!paymentReceipt) {
      setErrorMessage("Please choose your ₦1,000 payment receipt to continue.");
      return;
    }

    if (!ALLOWED_RECEIPT_TYPES.includes(paymentReceipt.type)) {
      setErrorMessage("Upload a PDF, JPG, PNG, or WebP receipt.");
      return;
    }

    if (paymentReceipt.size > MAX_RECEIPT_SIZE) {
      setErrorMessage("Your receipt must be 10 MB or smaller.");
      return;
    }

    setSubmitting(true);
    const receiptPath = `${crypto.randomUUID()}-${paymentReceipt.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;

    try {
      const { error: uploadError } = await supabase.storage
        .from("nominee-payment-receipts")
        .upload(receiptPath, paymentReceipt, {
          cacheControl: "3600",
          contentType: paymentReceipt.type,
          upsert: false,
        });

      if (uploadError) throw uploadError;

      const { error: insertError } = await supabase.from("nominee_registrations").insert({
        nominee_name: formData.nomineeName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        category: formData.category,
        location: formData.location.trim(),
        achievements_summary: formData.achievements.trim(),
        payment_receipt_path: receiptPath,
        payment_confirmed: formData.paymentConfirmed,
        registration_fee_ngn: 1000,
      });

      if (insertError) throw insertError;
      setSubmitted(true);
    } catch (error) {
      console.error("Nominee registration failed:", error);
      setErrorMessage("We could not submit your registration. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const toggleSlide = () => setSlide((current) => !current);

  return (
    <div className="nominee-register-layout">
      <aside className={`heading fixed ${slide ? "slide-in" : "slide-out"}`}>
        <ul className="list">
          <button className="menu" onClick={toggleSlide} aria-label="Close navigation">
            <img src={back} alt="" />
          </button>
          {list.map((item) => (
            <li key={item.path}>
              <Link to={item.path} className="header-button">{item.name}</Link>
            </li>
          ))}
        </ul>
      </aside>

      <div className="nominee-register-shell">
        <header className="nominee-register-header">
          <button
            className="nominee-menu-button"
            onClick={toggleSlide}
            aria-label="Open navigation"
            aria-expanded={slide}
          >
            <img src={menu} alt="" />
          </button>
          <img src={logo} alt="Merit and Value Awards" className="nominee-register-logo" />
          <div className="nominee-register-header-content">
            <p className="nomination-kicker">Merit and Value Awards</p>
            <h1>Nominee Registration Portal</h1>
            <p>Make your achievements part of the MVA recognition journey.</p>
          </div>
        </header>

        <main className="nomination-register-page">
          <div className="nomination-register-card">
            {submitted ? (
              <div className="nomination-success" role="status">
                <p className="nomination-kicker">Registration received</p>
                <h2>Thank you for registering.</h2>
                <p>Your details and payment receipt have been securely submitted to the MVA team for review.</p>
                <p>
                  Now create your nominee campaign flyer. Add your photo, name, award category, and any other details to your design, then share it on your status and social media to invite friends and supporters to nominate you.
                </p>
                <a
                  href="https://www.canva.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nomination-canva-link"
                >
                  Create your campaign flyer on Canva
                </a>
              </div>
            ) : (
              <>
                <div className="nomination-register-intro">
                  <p className="nomination-kicker">Official nominee registration</p>
                  <h2>Tell us about your work.</h2>
                  <p>
                    This portal is for prospective nominees registering to participate in the MVA awards.
                    Share your details, select an award category, and include a summary of your achievements.
                  </p>
                </div>

                <div className="nomination-payment-notice">
                  <strong>Registration fee: ₦1,000</strong>
                  <span>Upload your payment receipt as a PDF or image. Your receipt is stored privately for the MVA team.</span>
                </div>

                <form onSubmit={handleSubmit} className="nomination-form">
                  <label>
                    Full name
                    <input name="nomineeName" autoComplete="name" value={formData.nomineeName} onChange={handleChange} required />
                  </label>
                  <label>
                    Email address
                    <input type="email" name="email" autoComplete="email" value={formData.email} onChange={handleChange} required />
                  </label>
                  <label>
                    Phone number
                    <input type="tel" name="phone" autoComplete="tel" value={formData.phone} onChange={handleChange} required />
                  </label>
                  <label>
                    Award category
                    <select name="category" value={formData.category} onChange={handleChange} required>
                      <option value="">Select an official category</option>
                      {officialAwardCategories.map((category) => <option key={category} value={category}>{category}</option>)}
                    </select>
                  </label>
                  <label>
                    City / state
                    <input name="location" autoComplete="address-level2" value={formData.location} onChange={handleChange} required />
                  </label>
                  <label className="nomination-form-full">
                    Why do you think you deserve this recognition? Share a summary of your achievements.
                    <textarea name="achievements" rows="5" value={formData.achievements} onChange={handleChange} required />
                  </label>
                  <label className="nomination-form-full">
                    Payment receipt (₦1,000 registration fee)
                    <input
                      type="file"
                      name="paymentReceipt"
                      accept="image/jpeg,image/png,image/webp,application/pdf"
                      onChange={(event) => setPaymentReceipt(event.target.files?.[0] ?? null)}
                      required
                    />
                    <span className="nomination-helper">PDF, JPG, PNG, or WebP. Maximum file size: 10 MB.</span>
                  </label>
                  <label className="nomination-payment-check nomination-form-full">
                    <input
                      type="checkbox"
                      name="paymentConfirmed"
                      checked={formData.paymentConfirmed}
                      onChange={(event) => setFormData((previous) => ({ ...previous, paymentConfirmed: event.target.checked }))}
                      required
                    />
                    <span>I understand the terms and conditions associated with the ₦1,000 registration fee and have uploaded my payment receipt.</span>
                  </label>
                  {errorMessage && <p className="nomination-error nomination-form-full" role="alert">{errorMessage}</p>}
                  <button type="submit" className="button-theme bolder nomination-submit" disabled={submitting}>
                    {submitting ? "Submitting registration..." : "Submit nominee registration"}
                  </button>
                </form>
              </>
            )}
          </div>
        </main>

        <footer className="nomination-register-footer">
          <div className="nomination-footer-content">
            <div className="nomination-footer-brand">
              <img src={logo} alt="Merit and Value Awards" />
              <span>Celebrating excellence and inspiring change</span>
            </div>
            <div className="nomination-footer-links">
              <ul>
                {list.map((item) => (
                  <li key={item.path}><Link to={item.path} className="header-button">{item.name}</Link></li>
                ))}
              </ul>
              <div className="nomination-footer-socials">
                <a href="https://www.instagram.com/meritandvalueawards?igsh=MXA4NmpwczN0M2c3dA==" target="_blank" rel="noreferrer"><img src={ig} alt="Instagram" /></a>
                <a href="https://www.facebook.com/meritandvalueawards" target="_blank" rel="noreferrer"><img src={fb} alt="Facebook" /></a>
                <a href="https://x.com/mvaevent" target="_blank" rel="noreferrer"><img src={x} alt="X" /></a>
                <a href="https://www.tiktok.com/@_meritandvalueawards_?_r=1&_t=ZS-98KU4UeRLFs" target="_blank" rel="noreferrer"><img src={tiktok} alt="TikTok" /></a>
                <a href="https://youtube.com/@meritandvalueawards?si=eawtqPzlaQw77ym3" target="_blank" rel="noreferrer"><img src={youtube} alt="YouTube" /></a>
              </div>
              <Link to="/privacyPolicy">Privacy Policy</Link>
            </div>
          </div>
          <p className="nomination-footer-copyright">&copy; 2026 Merit and Value Awards</p>
        </footer>
      </div>
    </div>
  );
};

export default Register;
