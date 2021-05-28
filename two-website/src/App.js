import React from "react";

import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import AppSection from "./AppSection";
import CardSection from "./CardSection";

const App = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <AppSection />
            <CardSection />
            <Footer />
        </div>
    );
};


export default App;