import IonIcon from "@reacticons/ionicons";
import { useEffect, useRef } from "react";

const ToUp = () => {
  const toUpRef = useRef<HTMLAnchorElement>(null);

  const handleScroll = () => {
    if (toUpRef.current) {
      if (window.scrollY > 500) {
        toUpRef.current.style.transform = 'translateX(0)'
      } else {
        toUpRef.current.style.transform = 'translateX(100px)'
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <a
      ref={toUpRef}
      href="#home"
      className="group/up size-[50px] flex fixed bottom-8 right-5 translate-x-[100px] z-30 cursor-pointer items-center justify-center rounded-full bg-yellow text-xl text-white opacity-100 transition duration-300">
      <IonIcon
        name="arrow-up-outline"
        className="transition group-hover/up:-translate-y-1"></IonIcon>
    </a>
  );
};

export default ToUp;
