import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";
import Content from "./components/layout/Content";

function App(props) {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Header />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <Sidebar />
            </div>
            <div className="col-sm-9">
              {props.children}
              {/* <Content /> */}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
