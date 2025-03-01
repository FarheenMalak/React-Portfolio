import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
<>
<BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
    <footer className="bg-black text-white text-center py-4 mt-10">
  <span className="text-sm md:text-base font-light">
    Created By <span className="font-semibold">Farheen Malak</span> | © 2025 All rights reserved.
  </span>
</footer>


</>
  );
}

export default App;
