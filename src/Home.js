import React from 'react';
import './Home.css';

function Home() {
  const tips = [
    {
      tip: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. - Martin Golding"
    },
    {
      tip: "Always wear mismatched socks. It's a great conversation starter and shows that you're not afraid to take risks."
    },
    {
      tip: "Don't worry if it doesn't work right. If everything did, you'd be out of a job. - Mosher's Law of Software Engineering"
    },
    {
      tip: "To err is human, but to really foul things up you need a computer. - Paul Ehrlich"
    },
    {
      tip: "If at first you don't succeed, skydiving is not for you."
    },
    {
      tip: "App should have a variety of features, including this and that. However, we need to figure out how to combine everything seamlessly. Any ideas? -Creator of this website"
    },
    {
      tip: "If at first you don’t succeed; call it version 1.0."
    },
    {
      tip: "If you're feeling tired at work, take a nap under your desk. Your colleagues will appreciate your dedication to efficiency."
    },
    {
      tip: "The only way to make a truly secure system is to make it so simple that there are obviously no bugs left in it. - Terry Davis"
    },
    {
      tip: "Debugging is like being a detective in a crime movie where you're also the murderer."
    },
    {
      tip: "The best way to get a project done faster is to start sooner. - Jim Highsmith"
    },
    {
      tip: "If you're ever lost in the wilderness, just follow the nearest squirrel. They always know the way home."
    },
    {
      tip: "There are 10 types of people in the world: those who understand binary, and those who don’t."
    },
    {
      tip: "I think the key to good programming is to have a clear understanding of what you're trying to accomplish. Once you have that, the code will almost write itself. - Terry Davis"
    },
    {
      tip: "The best thing about a boolean is even if you are wrong, you are only off by a bit."
    },
    {
      tip: "Programming is like sex. One mistake and you have to support it for the rest of your life. - Michael Sinz"
    }
  ];

  const randomTipIndex = Math.floor(Math.random() * tips.length);
  const randomTip = tips[randomTipIndex].tip;
  const tipNumber = randomTipIndex + 1;

  return (
    <div className="home">
      <section className="about">
        <section className="welcome">
          <h2>Welcome</h2>
          <p>Thank you for stopping by my website.</p>
        </section>
        <h2>About</h2>
        <p>This is my portfolio/demo website! This page is hosted in (Where?) for demonstration and job application purposes. It showcases some of my skills in web development.
         Please feel free to browse around and contact me if you have any questions. Note: This site does not gather any personal data or store cookies. Location is asked on "Analytics and data displaying"-page for displaying weather data of your area.</p>
      </section>
      <section className="tip">
        <h2>Tip of the Day</h2>
        <p>Tip #{tipNumber}: {randomTip}</p>
      </section>
    </div>
  );
}

export default Home;
