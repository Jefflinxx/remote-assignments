const Item = ({ item, index }) => {
  return <a>Item {item[index]}</a>;
};

const Header = () => {
  const [navClass, setNavClass] = useState("n-u");
  const [item, setItem] = useState([1, 2, 3, 4]);

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
        {item.map((i, index) => (
          <Item item={item} index={index} />
        ))}
        {/* <a>Item 1</a>
        <a>Item 2</a>
        <a>Item 3</a>
        <a>Item 4</a> */}
        <p onClick={toggle}>X</p>
      </div>
      <a className="icon" onClick={toggle}>
        <i className="fa fa-bars"></i>
      </a>
    </nav>
  );
};
