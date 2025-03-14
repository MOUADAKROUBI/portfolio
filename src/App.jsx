import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Footer from "./components/Footer";
import Start from "./components/Start";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <Start />
      ) : (
        <div className='relative z-0 bg-primary pb-5'>
          <StarsCanvas />
          <div className=''>
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          {/* <Feedbacks /> */}
          <div className='relative z-0'>
            <Contact />
            <Footer />
          </div>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
