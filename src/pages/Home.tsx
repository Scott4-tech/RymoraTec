import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
     <>
            <Helmet>
              <title>Rymora Technologies | ICT & Cybersecurity Solutions</title>
              <link rel="canonical" href="https://rymoratech.co.zw/" />
            </Helmet>
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
    </>
  );
};

export default Home;
