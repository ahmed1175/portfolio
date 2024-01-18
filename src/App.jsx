
import { useEffect, useState } from "react";
import Hero from "./component/2-hero/hero";
import Header from "./component/1-Header/header";
import Main from "./component/3-main/main";
import Contact from "./component/4-contact/contact";
import Footer from "./component/5-footer/footer";

function App() {
// the action of site ========================================================================================

useEffect(()=>{
window.addEventListener("scroll",()=>{
if (window.scrollY>150){
setshowbutton(true)
}else{
  setshowbutton(false)
}
})
},[])
const [showbutton,setshowbutton]=useState(false)


//==================================================================================================================
  return <>
  <div className="container">
    <Header />
    
    <Hero />
    <div className="divider"></div>
    <Main />
    <div className="divider"></div>
    <Contact />
    <div className="divider"></div>
    <Footer />
    {showbutton===true&&(<a href="#header">
      <button className="icon-arrow-up"></button>
      </a>)}
  </div>
  </>;
}

export default App;
