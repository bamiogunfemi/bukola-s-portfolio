import { MouseEventHandler } from "react";
import gsap from "gsap";
import { color_primary } from "../../constants";

export const onHomeLoad = () => {
  gsap.to(".home-content-info-underline", {
    duration: 0.5,
    backgroundRepeat: "no-repeat",
    backgroundSize: "120% 0.2em",
    backgroundPosition: " 0 88%",
    transition: "background-size 0.25s ease-in",
    backgroundImage: `linear-gradient(120deg, ${color_primary} 0%, ${color_primary})`,
  });
  gsap.to(".first", {
    duration: 1.2,
    xPercent: 54,
    ease: "back",
  });
  gsap.to(".second", {
    duration: 1.2,
    xPercent: 220,
    ease: "back",
  });
  gsap.to(".last", {
    duration: 1.2,
    xPercent: 25,
    yPercent: -50,
    ease: "back",
  });
  gsap.from(".home-content-info-sub", {
    duration: 0.7,
    autoAlpha: 0,
    y: -50,
    ease: "elastic.in(1, 1)",
    stagger: {
      each: 0.75,
      amount: 0.5,
    },
  });
  gsap.from(".home-content-greeting", {
    duration: 0.7,
    autoAlpha: 0,
    y: -50,
    ease: "elastic",
    stagger: {
      each: 0.75,
      amount: 0.5,
    },
  });
};

export const onHomeNameEnter = ({ currentTarget }: MouseEventHandler | any) => {
  gsap.to(currentTarget, {
    duration: 0.2,
    backgroundSize: "100% 90%",
    color: "white",
  });
};
export const onHomeNameLeave = ({ currentTarget }: MouseEventHandler | any) => {
  gsap.to(currentTarget, {
    duration: 0.2,
    backgroundSize: "100% 0.2em",
    color: "black",
  });
};
export const onImageEnter = ({ currentTarget }: MouseEventHandler | any) => {
  gsap
    .timeline()
    .to(currentTarget, { duration: 0.25, x: 1, ease: "easeOut" })
    .to(currentTarget, { duration: 0.25, x: -1, ease: "easeIn" });
};
export const onImageLeave = ({ currentTarget }: MouseEventHandler | any) => {
  gsap.timeline().to(currentTarget, { duration: 0.25, x: 0, ease: "easeOut" });
};
