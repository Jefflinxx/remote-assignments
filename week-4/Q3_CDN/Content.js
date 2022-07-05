const SectionP1 = ({ contentBox, index }) => {
  return (
    <section>
      <h3>Content Box {contentBox[index]}</h3>
    </section>
  );
};

const SectionP2 = ({ addSection, contentBox, index }) => {
  return (
    <section style={addSection} className="sec2">
      <h3>Content Box {contentBox[index] + 4}</h3>
    </section>
  );
};

const Content = () => {
  const [top, setTop] = useState("Welcome Message");
  const [addSection, setAddSection] = useState({});
  const [contentBox, setContentBox] = useState([1, 2, 3, 4]);

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
        {contentBox.map((i, index) => (
          <SectionP1 contentBox={contentBox} index={index} />
        ))}
        {/* <section>
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
        </section> */}

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
        {contentBox.map((i, index) => (
          <SectionP2
            addSection={addSection}
            contentBox={contentBox}
            index={index}
          />
        ))}
        {/* <section style={addSection} className="sec2">
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
        </section> */}
      </div>
    </main>
  );
};
