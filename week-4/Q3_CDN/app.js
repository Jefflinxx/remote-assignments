// import Header from "./Header";
// import Content from "./Content";
// import "./style.css";

// class App extends React.Component {
//   render() {
//     return <h1>Hello, I'm here</h1>;
//   }
// }

//<Header />
//<Content />

const { useState } = React;

function App() {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
}

const Header = () => {
  const [navClass, setNavClass] = useState("n-u");
  const toggle = () => {
    if (navClass === "n-u") {
      setNavClass("n-u responsive");
    } else {
      setNavClass("n-u");
    }
  };

  return (
    <nav className="navbar">
      <a className="n-title">Website Title / Logo</a>
      <div className={navClass} id="n-u">
        <a>Item 1</a>
        <a>Item 2</a>
        <a>Item 3</a>
        <a>Item 4</a>
        <p onClick={toggle}>X</p>
      </div>
      <a className="icon" onClick={toggle}>
        <i className="fa fa-bars"></i>
      </a>
    </nav>
  );
};

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

ReactDOM.render(<App />, document.getElementById("root"));
