import React from "react";
import "./App.css";
import ChatBot from "./chat.js";

function App() {
  return (
    <div className="App">
      <ChatBot />
      <header className="App-header">
        <h1>Therapy &amp; Tunes</h1>
        <h2>Your musical therapy based mental health chatbot</h2>
        <p>
          According to a USC research, sharing your feelings with others reduces
          stress. But who do you talk to if you want your feelings to be
          confidential? Have you tried journaling your feelings but it seems
          ineffective to you without any interaction? Do you just want someone
          to listen to? In today's day and age, where everyone passes each other
          with their headphones or airpods in, people have found solace in
          music, leading to musical therapy being one of the leading forms of
          therapy. But sometimes when you are in a happy mood or are in the mood
          for a pick-me-up, scrolling through long lists of songs seems mentally
          exhaustive. Have you ever wished that you could easily find songs that
          boost your mood? Are your confidants great listeners but bad singers?
          We invite you to try Therapy &amp; Tunes, a musical therapy based
          mental health chatbot.
        </p>
        {/* <iframe
          width="840"
          height="473"
          src="https://www.youtube.com/embed/pxGTX0nk6RA"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="Demo Video"
        ></iframe> */}
        <img src={"https://i.ytimg.com/vi/7YOJppqH_3c/maxresdefault.jpg"} />
        <p>
          Therapy &amp; Tunes is a mobile application to help you stay calm.
          Everyday Therapy &amp; Tunes asks you about your day and feelings.
          They are always here to listen about your feelings and even suggest
          activities and resources for you. When asked for song recommendations
          based on mood, it also recommends you some songs.
        </p>

        <div className="button-area">
          <button className="button" variant="contained">
            <a
              href="https://play.google.com/store/apps/details?id=come.naturedex.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              Download Android App
            </a>
          </button>
          <button className="button" variant="contained">
            <a
              href="https://assistant.google.com/services/invoke/uid/00000097827472c9?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              Ask Google to Talk To Therapy &amp; Tunes
            </a>
          </button>
        </div>

        <p>
          Made with 💖 by Megan Tran, Reshmi Ranjith, Saloni Shivdasani, and
          Vincent Vu
        </p>

        <div className="button-area">
          <button className="button" variant="contained">
            <a
              href="https://devpost.com/software/naturedex"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              More Info
            </a>
          </button>
          <button className="button" variant="contained">
            <a
              href="https://github.com/SaloniSS/Hackcation"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              Source Code
            </a>
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
