import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AppointmentForm from './components/AppointmentForm/AppointmentForm';
import About from './components/About/About';
import Services from './components/Services/Services';
import Statistics from './components/Statistics/Statistics';
import Gallery from './components/Gallery/Gallery';
import Testimonials from './components/Testimonials/Testimonials';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AppointmentForm />
      <About />
      <Services />
      <Statistics />
      <Gallery />
      <Testimonials />
      <Blog />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;