import "./contact.css";
import Lottie from "lottie-react";
import gmailAnimation from "../../assets/Animation - 1702130500956.json"
const Contact = () => {
  return (
    <div className="contact">
      <div className="header">
        <div>
          <span className="icon-mail"></span>
          <h1> Contact Us </h1>
        </div>
        <p>
          {" "}
          contact us for more information and get notified when i publish
          something new{" "}
        </p>
      </div>
      <form className="left-sec">
        <div className="boxs">
          <div className="box1">
            <label htmlFor="email">Email adress:</label>
            <input
              required
              autoComplete="off"
              type="email"
              name=""
              placeholder="Email adress"
              id="email"
            />
          </div>
          <div className="box2">
            <label htmlFor="message">Your Message:</label>
            <textarea required placeholder="Message" id="message"></textarea>
          </div>
          <button className="submit"> submit </button>
        </div>
        <div className="right-sec"><Lottie animationData={gmailAnimation} /></div>
      </form>
    </div>
  );
};

export default Contact;
