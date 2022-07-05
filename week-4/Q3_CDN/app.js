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

ReactDOM.render(<App />, document.getElementById("root"));
