import { useState, useEffect } from "react";
import { Navbar } from "../Navbar/navbarStyle";

import Aos from "aos";
import 'aos/dist/aos.css'

const Nav = () => {

  useEffect(() => {
      Aos.init({
        duration: 1000,
      })
    }, [])

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar className={scrolling ? "scrolled" : ""} >
      <div data-aos="fade-down"
    data-aos-easing="ease-in-out"
    data-aos-mirror="false"
    data-aos-once="false">
        <p>K+T</p>
      </div>
    </Navbar>
  );
};

export default Nav;
