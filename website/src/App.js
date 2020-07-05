import React from "react";
import "./App.css";
import ChatBot from "./chat.js";

function App() {
  return (
    <div className="App">
      <ChatBot/>
      <header className="App-header">
        <h1>Name</h1>
        <h2>Tagline</h2>
        <p>
          Inspiration: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Cras in justo et massa facilisis bibendum. Etiam tincidunt lectus sit
          amet neque hendrerit, eget malesuada ante ultrices. Aliquam
          sollicitudin felis sed turpis ultrices, quis convallis ex gravida.
          Fusce dictum nunc at porta rhoncus. Fusce quis vehicula nibh, a tempor
          nibh. Cras mauris nulla, aliquet et tincidunt accumsan, vestibulum eu
          tortor. In ultricies at libero nec tristique. Donec pellentesque
          tortor sit amet tortor congue, non efficitur nisl pharetra. Ut
          pharetra molestie quam in interdum. Phasellus enim velit, scelerisque
          ut orci sed, facilisis volutpat purus. Cras imperdiet, risus ac
          pretium euismod, sem sapien aliquam lectus, in malesuada sem orci ut
          sapien. Duis mollis ornare arcu in bibendum. Suspendisse viverra
          facilisis volutpat. Suspendisse aliquam, elit sit amet pharetra
          blandit, tortor sapien ornare purus, ut elementum velit quam vitae
          enim.
        </p>
        <iframe
          width="840"
          height="473"
          src="https://www.youtube.com/embed/pxGTX0nk6RA"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="Demo Video"
        ></iframe>
        <p>
          What it does: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Cras in justo et massa facilisis bibendum. Etiam tincidunt lectus sit
          amet neque hendrerit, eget malesuada ante ultrices. Aliquam
          sollicitudin felis sed turpis ultrices, quis convallis ex gravida.
          Fusce dictum nunc at porta rhoncus. Fusce quis vehicula nibh, a tempor
          nibh. Cras mauris nulla, aliquet et tincidunt accumsan, vestibulum eu
          tortor. In ultricies at libero nec tristique. Donec pellentesque
          tortor sit amet tortor congue, non efficitur nisl pharetra. Ut
          pharetra molestie quam in interdum. Phasellus enim velit, scelerisque
          ut orci sed, facilisis volutpat purus. Cras imperdiet, risus ac
          pretium euismod, sem sapien aliquam lectus, in malesuada sem orci ut
          sapien. Duis mollis ornare arcu in bibendum. Suspendisse viverra
          facilisis volutpat. Suspendisse aliquam, elit sit amet pharetra
          blandit, tortor sapien ornare purus, ut elementum velit quam vitae
          enim.
        </p>

        <h3>Sample Commands:</h3>
        <p>"Command 1" What it does</p>

        <div className="button-area">
          <button className="button" variant="contained">
            <a
              href="https://play.google.com/store/apps/details?id=come.naturedex.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Android App
            </a>
          </button>
          <button className="button" variant="contained">
            <a
              href="https://assistant.google.com/services/invoke/uid/00000097827472c9?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ask Google to Talk To "name"
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
            >
              More Info
            </a>
          </button>
          <button className="button" variant="contained">
            <a
              href="https://github.com/SaloniSS/Hackcation"
              target="_blank"
              rel="noopener noreferrer"
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
