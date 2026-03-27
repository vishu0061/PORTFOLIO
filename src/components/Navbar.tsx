import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

// dummy smoother (so other files don’t break)
export const smoother = {
  scrollTo: (section: string) => {
    const el = document.querySelector(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  },
  paused: (_state?: boolean) => {},
};

const Navbar = () => {
  useEffect(() => {
    const links = Array.from(document.querySelectorAll(".header ul a"));
    const handlers = links.map((elem) => {
      const element = elem as HTMLAnchorElement;
      const handler = (e: Event) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          const target = e.currentTarget as HTMLAnchorElement;
          const section = target.getAttribute("data-href");
          if (section) {
            smoother.scrollTo(section);
          }
        }
      };
      element.addEventListener("click", handler);
      return { element, handler };
    });

    ScrollTrigger.refresh();

    return () => {
      handlers.forEach(({ element, handler }) => {
        element.removeEventListener("click", handler);
      });
    };
  }, []);

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          VK
        </a>

        <a
          href="mailto:vishalchaudhary3202@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          vishalchaudhary3202@gmail.com
        </a>

        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;