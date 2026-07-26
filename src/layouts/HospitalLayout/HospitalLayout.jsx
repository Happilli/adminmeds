import { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import Lenis from "lenis";

import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

function HospitalLayout() {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      duration: 1.1,
      smoothWheel: true,
      smoothTouch: false,
      syncTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <div ref={wrapperRef} className="flex-1 overflow-y-auto">
          <div ref={contentRef}>
            <Navbar />
            <main className="p-8">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HospitalLayout;