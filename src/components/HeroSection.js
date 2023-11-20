import React from 'react'
import Profile from '../assets/images/pf.png' 
const HeroSection = () => {
    return(
        <>
        <div className='container hero-sections'>
          <div className='row'>
              <div className='col col-sm-12 col-md-6 col-lg-6' style={{ textAlign: 'center', paddingTop: '70px' }}>
               <h1 className='title-section'>Hi, Faizan Ahmed !</h1>
                <h3 className='subheading'>Web Developer</h3>
              </div>
              <div className='col col-sm-12 col-md-6 col-lg-6' style={{ textAlign: 'center' }}>
                <img src={Profile} alt="profile" width={250} height={250} style={{ borderRadius: '60%' }}/>

              </div>
          </div>
        </div>
    </>
    );
}

export default HeroSection;