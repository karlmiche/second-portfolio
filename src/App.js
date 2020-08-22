import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import { gsap, TimelineLite, Power3, Power4, Power0} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

function App() {

  useEffect(() => {

    gsap.to(".aboutStuff", {
      color: "rgb(248, 235, 191)",
      backgroundColor: "rgb(100, 78, 221)",
      ease: "power4.bounce",
      duration: 5,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".aboutStuff",
        start: "top 15%",
        end: "top 100px",
        scrub: true,
        markers: true
      }
    })

    // this will be a chart with pictures about NLP maybe, or results from the API   
    ScrollTrigger.create({
        trigger: '#chart-wrapper',
        endTrigger: '.step-4',
        start: 'center 40%',
        end: () => {
            const height = window.innerHeight;
            const chartHeight = document.querySelector('#chart-wrapper').offsetHeight;
            return `bottom ${chartHeight + (height - chartHeight) / 2}px`;
        },
        pin: true,
        pinSpacing: false,
      });
          
    // this will be a chart with pictures about NLP maybe, or results from the API   
    ScrollTrigger.create({
        trigger: '#chart-wrapper-two',
        endTrigger: '.step-8',
        start: 'center 40%',
        end: () => {
            const height = window.innerHeight;
            const chartHeight = document.querySelector('#chart-wrapper-two').offsetHeight;
            return `bottom ${chartHeight + (height - chartHeight) / 2}px`;
        },
        pin: true,
        pinSpacing: false
      });

      // toggling for fading 
      // toggle the classes so that they become opaque when in view
       gsap.utils.toArray('.step').forEach(step => {
        ScrollTrigger.create({
            trigger: step,
            toggleClass: 'active',
            start: 'top 80%',
            opacity: 1
        })
    })
  }, [])

  return (
    <div id="scrolling-box">
      <div className="App">
        {/* this is the bio section */}
        <div className="container bioStuff">
        <div className="social-icons-container">
                  <a href="https://github.com/karlmiche"><img className="social-icons" src="./github.png"></img></a>
                  <a href="https://www.linkedin.com/in/karly-smith-232953159/"><img className="social-icons" src="./linkedin.png"></img></a>
                  <a href="https://twitter.com/karlymsdev"><img className="social-icons" src="./twitter.png"></img></a>
              </div>
              <div className="bio-content">
                  <h1 className="hi bio-hi">Hi, I'm Karly 
                  <span className="wave">👋🏻</span>
                  </h1>
                  <br></br>
                  <p className="little-bio">I'm a fullstack engineer learning in Seattle, Washington. I'm interested in machine learning,
                  React.js, and database management. Scroll down to see some recent projects!
                  </p>
                  {/* <img className="circle" src="./circle-cropped.png"></img> */}
                  <a className="email" href="mailto:karlymism@gmail.com">Drop me a line 📓</a>
              </div>

                {/* these are the buttons */}
          <div className="button-container">
                  <button className="navBtn one"><a href="#project-one">Projects</a></button>
                  <button className="navBtn two"><a href="mailto:karlymism@gmail.com">Contact</a></button>
                  <button className="navBtn three"><a href="#about">About Karly</a></button>
              </div>
          </div>

          {/* this is the background section */}
          <div className="container aboutStuff" id="about">
                  <div className="bio-content">
                  <h1 className="hi bio-hi">Background</h1>
                  <br></br>
                      <p className="little-bio">After a brief stint in the legal field, I felt I would be most effective helping clients once I had a hands-on part in solving their problems. I have always been interested in finding creative solutions to tough problems and love that tech has space for these.
                      </p>
                      <br></br><br></br>
                      <p className="little-bio">When I'm not practicing my React skills or whipping up a MongoDB cluster, I'm usually hanging out with my cat, Pickle, teaching myself folk songs, or reconnecting with friends.
                      </p>
                  </div>
              </div>

            {/* this is project one */}
            <div className="container" id="project-one">
                  <div className="bio-content" id="chart-wrapper">
                  <h1 className="hi bio-hi">Origami Pet</h1>
                  <img className="portfolio-image" src="./portfolio.png" />
                  </div>
                  <br></br>
                  <section className="step-1 step">
                    <h1>Hello</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean sed adipiscing diam donec adipiscing tristique risus nec. Massa massa ultricies mi quis hendrerit dolor. Lacus viverra vitae congue eu consequat ac felis. Eget velit aliquet sagittis id consectetur purus. Amet consectetur adipiscing elit duis. Nulla malesuada pellentesque elit eget gravida cum. A diam sollicitudin tempor id. Commodo quis imperdiet massa tincidunt nunc. Ultricies lacus sed turpis tincidunt. Gravida rutrum quisque non tellus orci ac auctor. Euismod quis viverra nibh cras pulvinar. Elit pellentesque habitant morbi tristique senectus et netus et. Sem integer vitae justo eget magna fermentum. Praesent tristique magna sit amet purus gravida quis.</p>
                  </section>
                  <section className="step-2 step">
                    <h1>hello</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean sed adipiscing diam donec adipiscing tristique risus nec. Massa massa ultricies mi quis hendrerit dolor. Lacus viverra vitae congue eu consequat ac felis. Eget velit aliquet sagittis id consectetur purus. Amet consectetur adipiscing elit duis. Nulla malesuada pellentesque elit eget gravida cum. A diam sollicitudin tempor id. Commodo quis imperdiet massa tincidunt nunc. Ultricies lacus sed turpis tincidunt. Gravida rutrum quisque non tellus orci ac auctor. Euismod quis viverra nibh cras pulvinar. Elit pellentesque habitant morbi tristique senectus et netus et. Sem integer vitae justo eget magna fermentum. Praesent tristique magna sit amet purus gravida quis.</p>
                  </section>
                  <section className="step-3 step">
                    <h1>hello</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean sed adipiscing diam donec adipiscing tristique risus nec. Massa massa ultricies mi quis hendrerit dolor. Lacus viverra vitae congue eu consequat ac felis. Eget velit aliquet sagittis id consectetur purus. Amet consectetur adipiscing elit duis. Nulla malesuada pellentesque elit eget gravida cum. A diam sollicitudin tempor id. Commodo quis imperdiet massa tincidunt nunc. Ultricies lacus sed turpis tincidunt. Gravida rutrum quisque non tellus orci ac auctor. Euismod quis viverra nibh cras pulvinar. Elit pellentesque habitant morbi tristique senectus et netus et. Sem integer vitae justo eget magna fermentum. Praesent tristique magna sit amet purus gravida quis.</p>
                  </section>
                  <section className="step-4 step">
                    <h1>hello</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean sed adipiscing diam donec adipiscing tristique risus nec. Massa massa ultricies mi quis hendrerit dolor. Lacus viverra vitae congue eu consequat ac felis. Eget velit aliquet sagittis id consectetur purus. Amet consectetur adipiscing elit duis. Nulla malesuada pellentesque elit eget gravida cum. A diam sollicitudin tempor id. Commodo quis imperdiet massa tincidunt nunc. Ultricies lacus sed turpis tincidunt. Gravida rutrum quisque non tellus orci ac auctor. Euismod quis viverra nibh cras pulvinar. Elit pellentesque habitant morbi tristique senectus et netus et. Sem integer vitae justo eget magna fermentum. Praesent tristique magna sit amet purus gravida quis.</p>
                  </section>
              </div>

              {/* this is for project two */}
              <div className="container">
                  <div className="bio-content" id="chart-wrapper-two">
                  <h1 className="hi bio-hi">glisten</h1>
                  <img className="portfolio-image" src="./glistenportfolio.png" />
                  </div>
                  <br></br>
                  <section className="step-5 step"></section>
                  <section className="step-6 step"></section>
                  <section className="step-7 step"></section>
                  <section className="step-8 step"></section>
              </div>
      </div>
    </div>
  );
}

export default App;
