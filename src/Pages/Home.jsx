import React, { useEffect, useRef } from "react";
import Header from "../components/Header";
import Loading from "../components/Loading";
import gsap, { Power3, Power4 } from "gsap";

function Home() {
  let screen = useRef(null);
  let body = useRef(null);

  useEffect(() => {
    var tl = gsap.timeline();
    tl.to(screen, {
      duration: 2.5,
      height: "100%",
      ease: Power3.easeInOut,
    });
    tl.to(screen, {
      duration: 2.5,
      left: "100%",
      ease: Power3.easeInOut,
      delay: 0.3,
    });
    tl.set(screen, { left: "-100%" });
    gsap
      .to(body, {
        duration: 3,
        css: {
          opacity: "0.99",
          pointerEvents: "auto",
          ease: Power4.easeInOut,
        },
      })
      .delay(4.5);
    return () => {
      gsap.to(body, {
        duration: 3,
        css: {
          opacity: "0",
          pointerEvents: "none",
        },
      });
    };
  });

  return (
    <div className="home">
      <div className="home">
        <div className="load-container">
          <div
            className="load-screen1"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            ref={(el) => (screen = el)}
          >
            <h1
              style={{
                backgroundColor: "transparent",
              }}
            >
              WELCOME, PRECIOUS
            </h1>
          </div>
        </div>
        <div className="headd" ref={(el) => (body = el)}>
          <div>
            <Header />
            <Loading />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
