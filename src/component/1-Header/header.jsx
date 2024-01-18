import { useEffect, useState } from "react";
import "./header.css";

const Header = () => {
  const [showmodule, setshowmodule] = useState(false);
  const [light, setlight] = useState(false);
  const [theme,settheme]=useState(localStorage.getItem("currentValue") ?? "dark")
  useEffect(()=>{
if(theme==="light"){
document.body.classList.remove("dark")
document.body.classList.add("light")
}else{
  document.body.classList.remove("light")
  document.body.classList.add("dark")
}
  },[theme])
  return (
    <header className="header" id="header">
      <div />
      <button
        className="menu"
        onClick={() => {
          setshowmodule(true);
        }}
      >
        {" "}
        <span className="icon-menu" />{" "}
      </button>
      <nav className="nav">
        <ul className="nav-text">
          <li className="nav-item">
            <a href="">about</a>
          </li>
          <li className="nav-item">
            <a href="">articals</a>
          </li>
          <li className="nav-item">
            <a href="">projects</a>
          </li>
          <li className="nav-item">
            <a href="">speaking</a>
          </li>
          <li className="nav-item">
            <a href="">contact</a>
          </li>
        </ul>
      </nav>
      <button
        className="light-button"
        onClick={() => {
          setlight(!light)
          localStorage.setItem("currentValue",theme ==="dark" ?"light":"dark");
          settheme(localStorage.getItem("currentValue"))

        }}
      >
        {" "}
        {light ? (
          <span className="icon-icomoon"></span>
        ) : (
          <span className="icon-sun"></span>
        )}{" "}
      </button>
      
      {showmodule && (
        <div className="module-fixed">
          <ul className="module">
            <li>
              <button
                onClick={() => {
                  setshowmodule(false);
                }}
              >
                <span className="icon-cancle" />{"X"}
              </button>
            </li>
            <li className="">
              <a href="">about</a>
            </li>
            <li className="">
              <a href="">articals</a>
            </li>
            <li className="">
              <a href="">projects</a>
            </li>
            <li className="">
              <a href="">speaking</a>
            </li>
            <li className="">
              <a href="">contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
