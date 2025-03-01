import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const SocialLinkCard = ({ index, name, icon, link }) => (
  <motion.a
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full flex items-center gap-4 hover:scale-105 transition-transform"
  >
    <div className="text-white text-4xl">{icon}</div>
    <p className="text-white text-[18px] font-medium">{name}</p>
  </motion.a>
);

const SocialLinks = () => {
  const socialMedia = [
    { name: "GitHub", icon: <FaGithub />, link: "https://github.com/FarheenMalak" },
    { name: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/farheen-malak-626b29295/" },
    { name: "Twitter", icon: <FaTwitter />, link: "https://twitter.com/" },
  ];

  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Connect with me</p>
          <h2 className={styles.sectionHeadText}>Social Links.</h2>
        </motion.div>
      </div>

      <div className="-mt-20 pb-14 flex flex-wrap gap-7 justify-center">
        {socialMedia.map((item, index) => (
          <SocialLinkCard key={item.name} index={index} {...item} />
        ))}
      </div>
    </div>
  );
};

// Agar SectionWrapper ka issue hai to ise remove kar dein
export default SocialLinks;


