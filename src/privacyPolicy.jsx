import { useState } from "react";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
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

const PrivacyPolicy = () => {
    const [slide, setSlide] = useState(false);
    const toggleSlide = () => setSlide((current) => !current);

    return (
        <>
            <Helmet>
                <title>Privacy Policy | Merit and Value Awards</title>
                <meta name="description" content="Learn how Merit and Value Awards collects, uses, and protects information submitted through our website and programs." />
            </Helmet>

            <div className="min-h-screen bg-[#080b12] text-slate-100">
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

                <header className="relative overflow-hidden border-b border-amber-400/20 bg-[radial-gradient(ellipse_at_50%_100%,rgba(180,130,35,0.2),transparent_55%),linear-gradient(135deg,#07090d,#15130d_55%,#090a0c)] px-5 pb-12 pt-24 text-center sm:pb-16">
                    <button
                        className="fixed left-2 top-2 z-30 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-neutral-900"
                        onClick={toggleSlide}
                        aria-label="Open navigation"
                        aria-expanded={slide}
                    >
                        <img src={menu} alt="" className="h-6 w-6 object-contain" />
                    </button>
                    <img src={logo} alt="Merit and Value Awards" className="absolute right-4 top-3 h-10 object-contain sm:right-6 sm:top-5 sm:h-12" />
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">Merit and Value Awards</p>
                    <h1 className="mx-auto mt-3 max-w-3xl font-[Poppins-bold] text-3xl leading-tight text-white sm:text-5xl">
                        Privacy Policy
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
                        How we handle information when you visit MVA, register as a nominee, make a nomination, or apply to MVA Rise.
                    </p>
                </header>

                <main className="px-5 py-10 sm:px-8 sm:py-14">
                    <article className="mx-auto max-w-4xl">
                        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-700 pb-6 text-sm text-slate-400">
                            <p className="m-0">This policy applies to the Merit and Value Awards website and its online forms.</p>
                            <p className="m-0">Last updated: <time dateTime="2026-09-30">30 September 2026</time></p>
                        </div>

                        <nav aria-label="Privacy policy sections" className="grid gap-x-6 gap-y-3 border-b border-slate-700 py-7 text-sm sm:grid-cols-2">
                            <a className="text-amber-300 hover:text-amber-200" href="#who-we-are">1. Who we are</a>
                            <a className="text-amber-300 hover:text-amber-200" href="#information">2. Information we collect</a>
                            <a className="text-amber-300 hover:text-amber-200" href="#use">3. How we use information</a>
                            <a className="text-amber-300 hover:text-amber-200" href="#sharing">4. Services and sharing</a>
                            <a className="text-amber-300 hover:text-amber-200" href="#storage">5. Storage and retention</a>
                            <a className="text-amber-300 hover:text-amber-200" href="#rights">6. Your choices and rights</a>
                            <a className="text-amber-300 hover:text-amber-200" href="#children">7. Young people</a>
                            <a className="text-amber-300 hover:text-amber-200" href="#contact">8. Contact and updates</a>
                        </nav>

                        <section id="who-we-are" className="scroll-mt-8 border-b border-slate-700 py-8">
                            <h2 className="font-[Poppins-bold] text-xl text-white sm:text-2xl">1. Who we are</h2>
                            <p className="mt-4 leading-7 text-slate-300">
                                Merit and Value Awards (MVA) operates an awards and talent-development platform based in Maiduguri, Borno State, Nigeria. For information submitted through this website, MVA is the organisation responsible for deciding how and why it is used.
                            </p>
                            <p className="mt-3 leading-7 text-slate-300">
                                This policy is intended to describe our current website features, including nominee registration, public nominations, and MVA Rise cohort applications.
                            </p>
                        </section>

                        <section id="information" className="scroll-mt-8 border-b border-slate-700 py-8">
                            <h2 className="font-[Poppins-bold] text-xl text-white sm:text-2xl">2. Information we collect</h2>
                            <p className="mt-4 leading-7 text-slate-300">The information depends on the feature you choose to use:</p>
                            <ul className="mt-4 list-disc space-y-3 pl-6 leading-7 text-slate-300 marker:text-amber-400">
                                <li><strong className="text-white">Nominee registration:</strong> nominee name, email address, phone number, award category, location, achievements summary, payment confirmation, and the uploaded receipt for the ₦1,000 registration fee.</li>
                                <li><strong className="text-white">Public nomination:</strong> the nominator's name and the nominee's name, category, location, and the reason for the nomination. The form prepares a message to MVA in WhatsApp; it is sent only if you choose to send it in WhatsApp.</li>
                                <li><strong className="text-white">MVA Rise:</strong> when cohort applications are open and you submit the form, we collect your name, email, phone number, age, preferred training track, and motivation statement.</li>
                                <li><strong className="text-white">Contact:</strong> when you contact us by email or WhatsApp, we receive the contact details and message you choose to share with us.</li>
                                <li><strong className="text-white">Technical information:</strong> our hosting and security providers may process IP address, browser and device details, request times, and diagnostic logs to deliver and protect the website.</li>
                            </ul>
                            <p className="mt-4 leading-7 text-slate-300">
                                Payments are made outside the website. We do not ask for card PINs, passwords, one-time passcodes, or online banking credentials. Do not include these in a receipt or message.
                            </p>
                        </section>

                        <section id="use" className="scroll-mt-8 border-b border-slate-700 py-8">
                            <h2 className="font-[Poppins-bold] text-xl text-white sm:text-2xl">3. How we use information</h2>
                            <p className="mt-4 leading-7 text-slate-300">We use submitted information to:</p>
                            <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-300 marker:text-amber-400">
                                <li>administer nominee registrations, confirm receipt of registration evidence, and review eligibility;</li>
                                <li>receive and assess public nominations and communicate about MVA awards;</li>
                                <li>review MVA Rise applications and contact applicants about cohorts;</li>
                                <li>respond to enquiries, maintain the website, prevent misuse, and meet applicable legal obligations.</li>
                            </ul>
                            <p className="mt-4 leading-7 text-slate-300">
                                Depending on the activity, we process information to provide a service you request, with your consent where required, for MVA's legitimate operational interests, or to comply with law. We do not sell personal information.
                            </p>
                        </section>

                        <section id="sharing" className="scroll-mt-8 border-b border-slate-700 py-8">
                            <h2 className="font-[Poppins-bold] text-xl text-white sm:text-2xl">4. Services and sharing</h2>
                            <p className="mt-4 leading-7 text-slate-300">We share information only as needed to operate the website and the services you request:</p>
                            <ul className="mt-4 list-disc space-y-3 pl-6 leading-7 text-slate-300 marker:text-amber-400">
                                <li><strong className="text-white">Supabase:</strong> stores nominee registration details and payment receipts. Registration information is available to authorised MVA personnel for review; receipt files are kept in private storage.</li>
                                <li><strong className="text-white">WhatsApp (Meta):</strong> public nomination details are placed in a message addressed to MVA. The message is not sent until you send it from WhatsApp. WhatsApp's own privacy terms apply to its service.</li>
                                <li><strong className="text-white">Vercel:</strong> provides website hosting and may process technical request logs.</li>
                                <li><strong className="text-white">Google reCAPTCHA:</strong> the website loads Google's reCAPTCHA service. Google may process browser, device, and interaction signals and use cookies or similar technologies under its own privacy and terms.</li>
                                <li><strong className="text-white">External links:</strong> social networks and Canva are external services. If you follow a link, that service's privacy policy governs information you provide there.</li>
                            </ul>
                            <p className="mt-4 leading-7 text-slate-300">
                                Service providers process information under their own terms and infrastructure. Depending on provider configuration, information may be processed outside Nigeria; cross-border processing is subject to applicable data-protection requirements.
                            </p>
                            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                                <a className="text-amber-300 underline decoration-amber-500/40 underline-offset-4" href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google Privacy Policy</a>
                                <a className="text-amber-300 underline decoration-amber-500/40 underline-offset-4" href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noreferrer">WhatsApp Privacy Policy</a>
                                <a className="text-amber-300 underline decoration-amber-500/40 underline-offset-4" href="https://supabase.com/privacy" target="_blank" rel="noreferrer">Supabase Privacy Policy</a>
                            </div>
                        </section>

                        <section id="storage" className="scroll-mt-8 border-b border-slate-700 py-8">
                            <h2 className="font-[Poppins-bold] text-xl text-white sm:text-2xl">5. Storage, security, and retention</h2>
                            <p className="mt-4 leading-7 text-slate-300">
                                We use reasonable administrative and technical measures to protect information. Supabase row-level access rules restrict public registration access to submissions, and uploaded payment receipts are stored in a private bucket. No online system can be guaranteed completely secure.
                            </p>
                            <p className="mt-3 leading-7 text-slate-300">
                                We keep information only for as long as it is reasonably needed to administer registrations, nominations, programs, and awards, respond to enquiries, resolve disputes, and meet applicable record-keeping obligations. Retention can vary by record type and legal requirements. When information is no longer needed, we will take reasonable steps to delete or de-identify it.
                            </p>
                        </section>

                        <section id="rights" className="scroll-mt-8 border-b border-slate-700 py-8">
                            <h2 className="font-[Poppins-bold] text-xl text-white sm:text-2xl">6. Your choices and rights</h2>
                            <p className="mt-4 leading-7 text-slate-300">
                                Subject to applicable law, including the Nigeria Data Protection Act 2023, you may ask to access or correct your information, request deletion or restriction, object to certain processing, or withdraw consent where processing relies on consent. You may also raise a concern with the Nigeria Data Protection Commission.
                            </p>
                            <p className="mt-3 leading-7 text-slate-300">
                                To make a privacy request, email <a className="text-amber-300 underline underline-offset-4" href="mailto:info@mail.meritandvalueawards.com?subject=Privacy%20request">info@mail.meritandvalueawards.com</a> with the subject “Privacy request”. We may ask for information needed to verify your identity and locate the relevant record.
                            </p>
                        </section>

                        <section id="children" className="scroll-mt-8 border-b border-slate-700 py-8">
                            <h2 className="font-[Poppins-bold] text-xl text-white sm:text-2xl">7. Young people</h2>
                            <p className="mt-4 leading-7 text-slate-300">
                                Some MVA Rise programs may be available to applicants under 18. A young applicant should involve a parent or legal guardian when sharing personal information, and MVA will seek any consent required by applicable law. Please contact us if you believe a young person has provided information inappropriately.
                            </p>
                        </section>

                        <section id="contact" className="scroll-mt-8 py-8">
                            <h2 className="font-[Poppins-bold] text-xl text-white sm:text-2xl">8. Contact and policy updates</h2>
                            <p className="mt-4 leading-7 text-slate-300">
                                For questions or privacy requests, contact Merit and Value Awards at <a className="text-amber-300 underline underline-offset-4" href="mailto:info@mail.meritandvalueawards.com">info@mail.meritandvalueawards.com</a>. MVA is based in Maiduguri, Borno State, Nigeria.
                            </p>
                            <p className="mt-3 leading-7 text-slate-300">
                                We may update this policy when our website, programs, or data practices change. The date at the top of this page shows when it was last revised.
                            </p>
                        </section>
                    </article>
                </main>

                <footer className="bg-black px-5 py-10 text-center text-white sm:px-8">
                    <div className="mx-auto grid max-w-5xl justify-items-center gap-10 md:grid-cols-2 md:items-center">
                        <div className="flex flex-col items-center gap-4">
                            <img src={logo} alt="Merit and Value Awards" className="h-9" />
                            <span className="text-sm text-slate-300">Celebrating excellence and inspiring change</span>
                        </div>
                        <div className="flex flex-col items-center gap-5">
                            <ul className="grid gap-2">
                                {list.map((item) => (
                                    <li key={item.path}><Link to={item.path} className="header-button">{item.name}</Link></li>
                                ))}
                            </ul>
                            <div className="flex flex-wrap justify-center gap-5">
                                <a href="https://www.instagram.com/meritandvalueawards?igsh=MXA4NmpwczN0M2c3dA==" target="_blank" rel="noreferrer"><img src={ig} alt="Instagram" className="h-7 w-7" /></a>
                                <a href="https://www.facebook.com/meritandvalueawards" target="_blank" rel="noreferrer"><img src={fb} alt="Facebook" className="h-7 w-7" /></a>
                                <a href="https://x.com/mvaevent" target="_blank" rel="noreferrer"><img src={x} alt="X" className="h-7 w-7" /></a>
                                <a href="https://www.tiktok.com/@_meritandvalueawards_?_r=1&_t=ZS-98KU4UeRLFs" target="_blank" rel="noreferrer"><img src={tiktok} alt="TikTok" className="h-7 w-7" /></a>
                                <a href="https://youtube.com/@meritandvalueawards?si=eawtqPzlaQw77ym3" target="_blank" rel="noreferrer"><img src={youtube} alt="YouTube" className="h-7 w-7" /></a>
                            </div>
                            <Link to="/privacyPolicy" className="text-sm text-amber-300">Privacy Policy</Link>
                        </div>
                    </div>
                    <p className="mt-8 text-sm text-slate-400">&copy; 2026 Merit and Value Awards</p>
                </footer>
            </div>
        </>
    );
};

export default PrivacyPolicy;