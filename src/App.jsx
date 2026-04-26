import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UpdatedFlavor from './components/UpdatedFlavor';
import Products from './components/Products';
import './index.css';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const appRef = useRef(null);
  const twoRef = useRef(null);
  const threeRef = useRef(null);
  
  const fantaRef = useRef(null);
  const orangeCutRef = useRef(null);
  const orangeRef = useRef(null);
  const leafRef = useRef(null);
  const leaf2Ref = useRef(null);
  const leaf3Ref = useRef(null);
  
  const lemon1Ref = useRef(null);
  const cocacolaRef = useRef(null);
  const lemon2Ref = useRef(null);
  const pepsiRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: twoRef.current,
          start: "0% 95%",
          end: "70% 50%",
          scrub: true
        }
      });

      tl.to(fantaRef.current, {
        top: "120%",
        left: "0%"
      }, 'orange')
      .to(orangeCutRef.current, {
        top: "160%",
        left: "23%"
      }, 'orange')
      .to(orangeRef.current, {
        width: "15%",
        top: "160%",
        right: "10%"
      }, 'orange')
      .to(leafRef.current, {
        top: "110%",
        rotate: "130deg",
        left: "70%"
      }, 'orange')
      .to(leaf2Ref.current, {
        top: "110%",
        rotate: "130deg",
        left: "0%"
      }, 'orange');

      var tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: threeRef.current,
          start: "0% 95%",
          end: "20% 50%",
          scrub: true
        }
      });

      tl2.from(lemon1Ref.current, {
        rotate: "-90deg",
        left: "-100%",
        top: "110%"
      }, 'ca')
      .from(cocacolaRef.current, {
        rotate: "-90deg",
        top: "110%",
        left: "-100%"
      }, 'ca')
      .from(lemon2Ref.current, {
        rotate: "90deg",
        left: "100%",
        top: "110%"
      }, 'ca')
      .from(pepsiRef.current, {
        rotate: "90deg",
        top: "110%",
        left: "100%",
        bottom: "120%",
        duration: 2
      })
      .to(orangeCutRef.current, {
        width: "18%",
        left: "42%",
        top: "204%"
      }, 'ca')
      .to(fantaRef.current, {
        width: "35%",
        top: "210%",
        left: "33%"
      }, 'ca');

    }, appRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="main" ref={appRef}>
      <Navbar />
      <Hero
        fantaRef={fantaRef}
        orangeCutRef={orangeCutRef}
        orangeRef={orangeRef}
        leafRef={leafRef}
        leaf2Ref={leaf2Ref}
        leaf3Ref={leaf3Ref}
      />
      <UpdatedFlavor twoRef={twoRef} />
      <Products
        threeRef={threeRef}
        lemon1Ref={lemon1Ref}
        cocacolaRef={cocacolaRef}
        lemon2Ref={lemon2Ref}
        pepsiRef={pepsiRef}
      />
    </div>
  );
}