import "./App.css";
import { useRef } from "react";
import Navbar from "./navbar";
import Cover from "./cover";
import Active from "./active-auctions";

function App() {
  const activeRef = useRef(null);

  const scrollToActive = () => {
    activeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <Cover onExploreClick={scrollToActive} />
      <div ref={activeRef}>
        <Active />
      </div>
    </>
  );
}

export default App;