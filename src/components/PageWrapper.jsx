import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export const PageWrapper = ({ children }) => {
  const location = useLocation();
  const wrapperRef = useRef(null);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useGSAP(
    () => {
      gsap.fromTo(
        wrapperRef.current,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          clearProps: "all",
        }
      );
    },
    { scope: wrapperRef, dependencies: [location.pathname] }
  );

  return (
    <div ref={wrapperRef} className="w-full min-h-screen">
      {children}
    </div>
  );
};

export default PageWrapper;
