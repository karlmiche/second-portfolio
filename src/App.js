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
        // markers: true
      }
    })

    // this will be a chart with pictures about NLP maybe, or results from the API   
    ScrollTrigger.create({
        trigger: '#chart-wrapper',
        endTrigger: '.step-4',
        start: 'center top',
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
        start: 'center 10%',
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
                  <button className="navBtn two"><a href="./KarlySmithResume.pdf">Resume</a></button>
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
                  <img src="./me2.png" className="circle"></img>
              </div>

            {/* this is project one */}
            <div className="container" id="project-one">
                  <div className="bio-content" id="chart-wrapper">
                  <h1 className="hi bio-hi">Origami Pet</h1>
                  <img className="portfolio-image" src="./portfolio.png" />
                  </div>
                  <br></br>
                  <section className="step-1 step">
                    <h1>About Origami Pet</h1>
                    <p>A “Tamagotchi”-style pet game built with HTML5, CSS, and vanilla Javascript. Origami Pet utilizes conditional logic taken from the JavaScript Date Object - “needs” decrement based on seconds passed since a locally-stored timestamp, and increment (seconds are “added” to the locally stored timestamp) based on user click events. Each Pet created can be locally stored in a user’s browser - the result is a calm, sweet, and unique game-play.</p>
                  </section>
                  <section className="step-4 step">
                    <button className="navBtn"><a href="https://karlmiche.github.io/origami_pet/">Live link</a></button>
                    <button className="navBtn"><a href="https://github.com/karlmiche/origami_pet">Github Repo</a></button>
                  </section>
              </div>

              {/* this is for project two */}
              <div className="container">
                  <div className="bio-content" id="chart-wrapper-two">
                  <h1 className="hi bio-hi">glisten</h1>
                  <img className="portfolio-image" src="./glistenportfolio.png" />
                  </div>
                  <br></br>
                  <section className="step-5 step">
                    <h1>About glisten</h1>
                    <p>An app built with those who process orally in mind, glisten is an audio transcription app built with Node.js, Google Cloud Speech to Text, Google Cloud Storage, Sequelize, Express, EJS layouts, and the Web Speech API.</p>
                    <p>My intended user is a busy academic who records many audio interviews while capturing data for social research. glisten is also good for people to play around with, to take voice notes with, and to transcribe long-winded clips of Gilmore Girls with (you don't want to miss all those jokes).</p>
                  </section>
                  <section className="step-8 step">
                  <button className="navBtn"><a href="https://karlmiche.github.io/origami_pet/">Live link</a></button>
                    <button className="navBtn"><a href="https://p2-glisten.herokuapp.com/home">Github Repo</a></button>
                  </section>
              </div>
      </div>
    </div>
  );
}

export default App;
