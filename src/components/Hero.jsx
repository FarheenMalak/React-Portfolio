import { motion } from "framer-motion";
import heroGif from "../assets/hero.gif";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      
      {/* Background GIF */}
      <img 
        src={heroGif}
        alt="Hero Animation" 
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />

      {/* Text Content (Overlay) */}
      <div className="relative text-center text-white z-10">
        <h1 className={`${styles.heroHeadText} text-white`}>
          Hi, I'm <span className="text-[#915EFF]">Farheen Malak</span>
        </h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I develop front-end of websites, user <br className="sm:block hidden" />
          interfaces and web applications
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>

    </section>
  );
};

export default Hero;


