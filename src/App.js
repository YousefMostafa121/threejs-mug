import React, { Component } from "react";
import "./App.css";
import ThreeJSExample from "./ThreeJSExample";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import CupOrderForm from "./CupOrderForm";
import ShowForm from "./ShowForm";

export default class App extends Component {
  render() {
    return (
      <div className="" dir="rtl">
        {/* <ThreeJSExample /> */}
        <Header />
        <HeroSection />
        <section className=" container py-20">
          <p className="text-[28px] xl:text-[30px] 2xl:text-[32px] text-black font-[700] text-center mb-10 relative z-30">
            طباعة علي الكوب
          </p>
          <ShowForm />
        </section>

        <Footer />
      </div>
    );
  }
}
