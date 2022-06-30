import { useState } from "react";

const Content = () => {
  const [top, setTop] = useState("Welcome Message");
  const [addSection, setAddSection] = useState({});

  const goodTime = () => {
    setTop("Have a Good Time!");
  };

  return (
    <main>
      <div className="m-1">
        <h1 onClick={goodTime}>{top}</h1>
      </div>
      <div className="m-2">
        <h2>Section Title</h2>
        <section>
          <h3>Content Box 1</h3>
        </section>
        <section>
          <h3>Content Box 2</h3>
        </section>
        <section>
          <h3>Content Box 3</h3>
        </section>
        <section>
          <h3>Content Box 4</h3>
        </section>

        <div className="button-wrapper">
          <button
            onClick={() => {
              setAddSection({ display: "flex" });
            }}
            className="m-b"
          >
            Call to Action
          </button>
        </div>

        <section style={addSection} className="sec2">
          <h3>Content Box 5</h3>
        </section>
        <section style={addSection} className="sec2">
          <h3>Content Box 6</h3>
        </section>
        <section style={addSection} className="sec2">
          <h3>Content Box 7</h3>
        </section>
        <section style={addSection} className="sec2">
          <h3>Content Box 8</h3>
        </section>
      </div>
    </main>
  );
};

export default Content;
