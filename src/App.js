import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import {BuyerReview, SellerReview} from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Projects />

      <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3">

      <Tab eventKey="home" title="Buyer Review">
        <BuyerReview />
      </Tab>
      <Tab eventKey="profile" title="Seller Review">
        <SellerReview />
      </Tab>
    </Tabs>

      <reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;