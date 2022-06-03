import React from 'react';
import './MyPortfolio.css'

const MyPortfolio = () => {
   return (
    <div className="about">
    <header class="masthead">
      <p class="masthead-intro">Hi I'm</p>
      <h1 class="masthead-heading">Amit !</h1>
    </header>
    <section class="introduction-section">
      <h1>Introduction</h1>
      <p>
        I am a Front-end web developer, part time Freelancer, and soon to be
        mern stack developer.
      </p>
      <p>I love the internet, technology, and building beautiful things.</p>
    </section>
    <section class="location-section">
      <h1>Where I'm From</h1>
      <p>I'm originally from Bangladesh, Sylhet. </p>
    </section>
    <section class="location-section">
      <h1>Skills</h1>
      <li>Html,css</li>
      <li>Javascript</li>
      <li>Bootstrap,Tailwind</li>
      <li>React</li>
      <li>Node Js,Express Js</li>
      <li>MongoDb</li>
      <li>Git</li>
    </section>
    <section class="location-section">
      <h1>My Goal</h1>
      <p>
        My current goal is to become a fullstack engineer.And for that i five
        to six hour daily to learn things realated to back-end technology and
        always try to stay up-to-date with trends.I am also learning data
        structures and algorithm.And i beleive learning by doing. So every
        weak i try to do at least 1 project for practice and push code to my
        GitHub.In short,these are some of my key steps to achive my goal.
      </p>
    </section>
    <section class="questions-section">
      <h1>More About Me</h1>
      <h2>What are your favorite hobbies?</h2>
      <p>
        My favorite hobby is building things on the internet like ecommerce
        sites and email marketing campaigns.
      </p>
      <h2>What's your dream job?</h2>
      <p>
        My dream job is similar to my current job except I would like to be
        building software instead of buildings.
      </p>
      <h2>Where do you live?</h2>
      <p>I live on a rural acreage, but I'm close to main city.</p>
      <h2>Why do you want to be a web developer?</h2>
      <p>
        Because programming is awesome and programming for the internet is
        even more awesome.
      </p>
    </section>
  </div>
   );
};

export default MyPortfolio;