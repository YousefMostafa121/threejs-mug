import React, { Component } from "react";
import "./App.css";
import ThreeJSExample from "./ThreeJSExample";
import Header from "./Header";
import HeroSection from "./HeroSection";

export default class App extends Component {
  render() {
    return (
      <div className="" dir="rtl">
        {/* <ThreeJSExample /> */}
        <Header />
        <HeroSection />
      </div>
    );
  }
}
