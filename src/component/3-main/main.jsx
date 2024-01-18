import { useState } from "react";
import "./main.css";
import myprojects from "./myproject";
const Main = () => {
  const [switchs, setswitchs] = useState(myprojects);
  const [current, setcurrent] = useState("active1");
  // turn classname from button to anouther button
  // remove the class name from the element thet not selected
  return (
    <main>
      <section className="left-sec">
        <button
          className={current === "active1" ? "active" : null}
          onClick={() => {
            setcurrent("active1");
            setswitchs(
              myprojects.filter((x) => {
                return x;
              })
            );
          }}
        >
          All project
        </button>
        <button
          className={current === "active2" ? "active" : null}
          onClick={() => {
            setcurrent("active2");
            const NweArr = myprojects.filter((x) => {
              return x.category === "Html&css";
            });
            setswitchs(NweArr);
          }}
        >
          Html&Css
        </button>
        <button
          className={current === "active3" ? "active" : null}
          onClick={() => {
            setcurrent("active3");
            const NweArr = myprojects.filter((x) => {
              return x.category === "Javascript";
            });
            setswitchs(NweArr);
          }}
        >
          Javascript
        </button>
        <button
          className={current === "active4" ? "active" : null}
          onClick={() => {
            setcurrent("active4");
            const NewArr = myprojects.filter((x) => {
              return x.category === "react";
            });
            setswitchs(NewArr);
          }}
        >
          React
        </button>
      </section>
      <section className="right-sec">
        {switchs.map((item) => {
          return (
            <article key={item.imgPath} className="card">
              <a href="">
                {" "}
                <img width={266} src={item.imgPath} alt="" />{" "}
              </a>
              <div style={{ width: "266px" }} className="box">
                <h3>{item.tittle}</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione, fuga at!.
                </p>

                <div className="icon">
                  <div>
                    <span className="icon-attachment" />
                    <span className="icon-github" />
                  </div>
                  <a href="">
                    more
                    <span className="icon-arrow-right" />
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Main;
