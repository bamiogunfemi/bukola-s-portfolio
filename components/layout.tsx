import Head from "next/head";
import { HomeNavbar } from "../components";
// import { gsap } from "gsap";
// import { getAngle, getScale, EMPTY } from "../../libs";
import { useEffect, useRef, useCallback, ReactNode } from "react";
type HomeLayoutProps = {
  children: ReactNode;
  title?: string;
};

export const HomeLayout = ({ children, title }: HomeLayoutProps) => {
  // Gsap Ticker Function
  // function useTicker(
  //   callback: {
  //     (): void;
  //     (time: number, deltaTime: number, frame: number, elapsed: number):
  //       | void
  //       | null;
  //     (...args: any[]): void | null;
  //   },
  //   paused?: boolean
  // ) {
  //   useEffect(() => {
  //     if (!paused) {
  //       gsap.ticker.add(callback);
  //     }
  //     return () => {
  //       gsap.ticker.remove(callback);
  //     };
  //   }, [callback, paused]);
  // }

  // function useInstance(value = {}) {
  //   const ref = useRef(EMPTY);
  //   if (ref.current === EMPTY) {
  //     ref.current = typeof value === "function" ? value() : value;
  //   }
  //   return ref.current;
  // }

  // const jellyRef = useRef(null);
  // const textRef = useRef(null);

  // // Save pos and velocity Objects
  // const pos: any = useInstance(() => ({ x: 0, y: 0 }));
  // const vel: any = useInstance(() => ({ x: 0, y: 0 }));
  // const set: any = useInstance({});

  // // Set GSAP quick setter Values on useLayoutEffect Update
  // useEffect(() => {
  //   set.x = gsap.quickSetter(jellyRef.current, "x", "px");
  //   set.y = gsap.quickSetter(jellyRef.current, "y", "px");
  //   set.r = gsap.quickSetter(jellyRef.current, "rotate", "deg");
  //   set.sx = gsap.quickSetter(jellyRef.current, "scaleX");
  //   set.sy = gsap.quickSetter(jellyRef.current, "scaleY");
  //   set.width = gsap.quickSetter(jellyRef.current, "width", "px");
  //   set.rt = gsap.quickSetter(textRef.current, "rotate", "deg");
  // }, [set]);

  // // Start Animation loop
  // const loop = useCallback(() => {
  //   // Calculate angle and scale based on velocity
  //   var rotation = getAngle(vel.x, vel.y); // Mouse Move Angle
  //   var scale = getScale(vel.x, vel.y); // Blob Squeeze Amount

  //   // Set GSAP quick setter Values on Loop Function
  //   set.x(pos.x);
  //   set.y(pos.y);
  //   set.width(100 + scale);
  //   set.r(rotation);
  //   set.sx(1 + scale);
  //   set.sy(1 - scale);
  //   set.rt(-rotation);
  // }, [pos.x, pos.y, set, vel.x, vel.y]);

  // // Run on Mouse Move
  // useEffect(() => {
  //   // Caluclate Everything Function
  //   const setFromEvent = (e: { clientX: any; clientY: any }) => {
  //     // Mouse X and Y
  //     const x = e.clientX;
  //     const y = e.clientY;

  //     // Animate Position and calculate Velocity with GSAP
  //     gsap.to(pos, {
  //       x: x,
  //       y: y,
  //       duration: 1.25,
  //       ease: "easeOut",
  //       onUpdate: () => {
  //         vel.x = x - pos.x;
  //         vel.y = y - pos.y;
  //       },
  //     });

  //     loop();
  //   };

  //   window.addEventListener("mousemove", setFromEvent);
  //   return () => {
  //     window.removeEventListener("mousemove", setFromEvent);
  //   };
  // }, [loop, pos, vel]);

  // useTicker(loop);
  return (
    <>
      <Head>
        <title>{`${title} | Bukola Ogunfemi`}</title>
        <meta name="description" content="Grwoth & Content Queen" />
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <main className="main">
        {/* <div ref={jellyRef} id={"jelly-id"} className="jelly-blob">
          <div ref={textRef} id={"text-id"} className="inside-text"></div>
        </div> */}
        <HomeNavbar />
        {children}
      </main>
    </>
  );
};
