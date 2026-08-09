import React, { useState } from "react";
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

const PrivacyPolicy = () => {
    const [slide, setSlide] = useState(false);

    const toggleSlide = () => {
        setSlide(!slide);
    };


    return (<>

        <div className="flex">
            {/* Aside section */}
            <aside className={`heading fixed md:static ${slide ? "slide-in" : "slide-out"}`}>
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
            <section className="h-[200px] bg-black md:bg-cover w-[100vw] h-[150px]">
                <button
                    className="fixed top-0 left-0 bg-[#999999] rounded-[50%] z-[20] md:cursor-pointer fixed h-[45px] w-[50px] "
                    onClick={toggleSlide}
                >
                    <img src={menu} alt="Menu" className="ml-3" />
                </button>

                <img src={logo} alt="Logo" className="absolute top-0 right-0 h-[35px] md:h-[55px] p-2 z-[50]" />
                <header className="text-center mt-[50px] text-2xl bolder text-white sm: mt-">
                    <h1 className="text-3xl "> Privacy policy</h1>
                    <br />
                    {/* <h2 className="light text-[17px]">
                        Our Story, Our Mission, Our Vision
                    </h2> */}
                </header>
            </section>
        </div>
        {/* About Section */}
        <section className="bg-gradient-to-b from-[#F3F4F6] to-[#E5E7EB] py-[60px] px-[30px]">
            <div className="max-w-3xl mx-auto">
                <h2 className="bolder text-2xl md:text-3xl text-[#1F2937] mb-[30px] text-center">Who We Are</h2>
                <p className="light2 text-[#374151] text-[25px] leading-8 tracking-wide text-justify md:text-xl">
                    Merit and Value Awards is a reputable platform based in Maiduguri,
                    Nigeria, committed to celebrating excellence, creativity, culture, and
                    innovation. We recognize individuals and organizations that are making
                    meaningful impact across the entertainment and creative industries, in
                    entrepreneurship, and in community development. Our annual awards
                    ceremony brings together artists, industry stakeholders, and community
                    members to honour exceptional achievements, promote creative
                    expression and diversity, and inspire the next generation of talents.
                    <br /><br />
                    Maiduguri has seen a growing wave of young and seasoned talents in
                    recent years — musicians, artists, and content creators making notable
                    strides. Yet many lack the visibility and recognition they deserve.
                    Merit and Value Awards was founded to bridge that gap: to provide a
                    platform where talent is celebrated, acknowledged, and elevated.
                </p>
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
                        <a href="https://www.instagram.com/meritandvalueawards?igsh=MXA4NmpwczN0M2c3dA=="
                            target="_blank"
                        >
                            <img src={ig} alt="Instagram" className="h-[30px] md:h-[30px]" />
                        </a>
                        <a href="https://www.facebook.com/meritandvalueawards"
                            target="_blank"
                        >
                            <img src={fb} alt="Facebook" className="h-[30px] md:h-[30px]" />
                        </a>
                        <a href="https://x.com/mvaevent"
                            target="_blank"
                        >
                            <img src={x} alt="X" className="h-[30px] md:h-[30px]" />
                        </a>
                        <a href="https://www.tiktok.com/@_meritandvalueawards_?_r=1&_t=ZS-98KU4UeRLFs"
                            target="_blank"
                        >
                            <img src={tiktok} alt="tiktok" className="h-[30px] md:h-[30px]" />
                        </a>
                        <a href="https://youtube.com/@meritandvalueawards?si=eawtqPzlaQw77ym3"
                            target="_blank"
                        >
                            <img
                                src={youtube}
                                alt="youtube"
                                className="h-[30px] md:h-[30px]"
                            />
                        </a>

                    </div>
                    {/* <div><Link to="/privacyPolicy">Privacy Policy</Link></div> */}
                </div>
            </div>
            <span>&copy; 2026 Merit and value awards</span>
        </footer>
    </>)

}

export default PrivacyPolicy;