import { Element, animateScroll as scroll, scroller } from "react-scroll";
import BeeBack from "./../../assets/jo.jpg";
import Jar from "./../../assets/honey-jar.jpg";
import Pollen from "./../../assets/pollen.jpg";
import King from "./../../assets/basilikos-poltos.jpg";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Who from "../../widgets/Who/Who";
import Where from "../../widgets/Where/Where";
import Kofini from "../Kofini/Kofini";

export default function Home() {
  const location = useLocation();

  const [showButton, setShowButton] = useState<boolean>(true);

  useEffect(() => {
    if (location.state?.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, {
        smooth: true,
        duration: 800,
      });
    }
  }, [location.state]);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pageShortcuts = [
    {
      title: "Μέλι",
      imgSrc: Jar,
      productDescr:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      url: "/pages/honey",
    },
    {
      title: "Γύρη",
      imgSrc: Pollen,
      productDescr:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      url: "/pages/pollen",
    },
    {
      title: "Βασιλικός Πολτός",
      imgSrc: King,
      productDescr:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      url: "/pages/poltos",
    },
  ];

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="@container relative w-full min-h-screen">
      <div className="relative z-20">
        <div className="flex w-full h-[100vh]">
          <Element
            name="section_1"
            className="element grid grid-cols-2 w-full h-full relative"
          >
            <Kofini />
          </Element>
        </div>
      </div>
      <div className="relative z-20">
        <div className="flex w-full h-[100vh]">
          <Element
            name="section_2"
            className="element grid grid-cols-2 w-full h-full bg-amber-50"
          >
            <Who />
          </Element>
        </div>
        <div
          className="hidabsolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: `url(${BeeBack})`,
            opacity: 0.2,
          }}
        ></div>
        <div className="flex flex-col sm:flex-row items-center w-full h-[100vh] bg-linear-to-t from-yellow-50/1 to-yellow-200/100 relative z-30">
          <Element name="section_3" className="element">
            <section className="mt-25 text-center">
              <div className="flex flex-col sm:flex-row justify-center ml-5 gap-12">
                {pageShortcuts.map((shortcut) => (
                  <div
                    className="text-center ml-30 sm:text-sm"
                    key={shortcut.title}
                  >
                    <div>
                      <Link to={shortcut.url}>
                        <img
                          src={shortcut.imgSrc}
                          alt={shortcut.title}
                          className="hidden sm:block md:object-cover md:h-[450px] md:w-[450px] rounded-full border-amber-300 border-8 transition-shadow duration-300 cursor-pointer hover:shadow-xl hover:shadow-yellow-700"
                        />
                      </Link>
                    </div>
                    <div>
                      <div className="mt-3 md:text-xl sm:text-xs">
                        <h3 className="text-gray-900 mt-15 font-sans font-semibold group-hover:underline group-hover:underline-offset-4">
                          <p>{shortcut.title}</p>
                        </h3>
                        <p className=" sm:text-xs sm:p-4 mt-5 text-pretty md:text-lg font-sans text-gray-900 font-light animate-fade-up p-9">
                          {shortcut.productDescr}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </Element>
        </div>
        <div className="flex w-full h-[100vh] flex-col items-center bg-linear-to-t from-yellow-200/100 to-yellow-50/1">
          <div>
            <Element name="section_4" className="element">
              <Where />
            </Element>
          </div>
          {showButton && (
            <button
              className="
      fixed 
      bottom-5 
      right-5 
      group
      p-5
      cursor-pointer   
      text-xl 
      font-normal  
      flex 
      items-center
      justify-center
      bg-transparent
      text-yellow-900 
      h-auto  
      w-[100px]  
      overflow-hidden   
      transition-all
      duration-100
      border-yellow-900"
              onClick={scrollToTop}
            >
              <span className="group-hover:w-full absolute left-0 h-full w-5 border-y border-l border-yellow-900 transition-all duration-500"></span>
              <p className="group-hover:opacity-0 group-hover:translate-x-[-100%] absolute translate-x-0 transition-all duration-200">
                ↑
              </p>
              <span className="group-hover:translate-x-0 group-hover:opacity-100 absolute translate-x-full opacity-0 transition-all duration-200">
                Πάνω!
              </span>
              <span className="group-hover:w-full absolute right-0 h-full w-5 border-y border-r border-yellow-900 transition-all duration-500"></span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
