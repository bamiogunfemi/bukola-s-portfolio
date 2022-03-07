import type { NextPage } from "next";
import { HomeLayout } from "../components/layout";
import { color_primary, socialData } from "../constants/data";
import Image from "next/image";
import gsap from "gsap";
import { MouseEventHandler, useEffect } from "react";

const Home: NextPage = () => {
  useEffect(() => {
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
  });
  const onEnter = ({ currentTarget }: MouseEventHandler | any) => {
    gsap.to(currentTarget, {
      duration: 0.2,
      backgroundSize: "100% 90%",
      color: "white",
    });
  };
  const onLeave = ({ currentTarget }: MouseEventHandler | any) => {
    gsap.to(currentTarget, {
      duration: 0.2,
      backgroundSize: "100% 0.2em",
      color: "black",
    });
  };
  const imageEnter = ({ currentTarget }: MouseEventHandler | any) => {
    gsap
      .timeline()
      .to(currentTarget, { duration: 0.25, x: 1, ease: "easeOut" })
      .to(currentTarget, { duration: 0.25, x: -1, ease: "easeIn" });
  };
  const imageLeave = ({ currentTarget }: MouseEventHandler | any) => {
    gsap
      .timeline()
      .to(currentTarget, { duration: 0.25, x: 0, ease: "easeOut" });
  };

  return (
    <HomeLayout title="Home">
      <div className="home">
        <section className="home-content">
          <p className="home-content-greeting">Heyoo!</p>
          <h2 className="home-content-info">
            I’m{" "}
            <span
              className="home-content-info-underline"
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}>
              Bukola Ogunfemi
            </span>{" "}
            <br /> A Content Strategist and storytelling goddess {""}
            <span className="home-content-info-blue">
              based in Lagos, Nigeria.
            </span>
          </h2>
          <p className="home-content-info-sub">
            I help brands relate their message to their target audience by
            telling stories. I am a storyteller with over two years of
            professional experience acting as an intermediary between brands and
            their target audience. I am passionate about career growth and
            development.{" "}
          </p>
          <div className="home-content-social">
            {socialData.map(({ icon, url, name }) => (
              <div className="home-content-social-box" key={url}>
                <a href={url}>
                  <Image
                    onMouseEnter={imageEnter}
                    onMouseLeave={imageLeave}
                    alt={`bukola's ${name}`}
                    height={23}
                    className="logo"
                    src={icon}
                    width={24}
                  />
                </a>
              </div>
            ))}
          </div>
        </section>
        <section className="home-memoji">
          <div className="home-memoji-container first">
            <Image
              onMouseEnter={imageEnter}
              onMouseLeave={imageLeave}
              alt={`memoji`}
              className="logo"
              src={"/images/emojiCrossed.svg"}
              height={165.7797393798828}
              width={165.7797393798828}
            />
          </div>
          <div className="home-memoji-container second">
            <Image
              onMouseEnter={imageEnter}
              onMouseLeave={imageLeave}
              alt={`memoji`}
              height={104}
              className="logo"
              src={"/images/emojiSmile.svg"}
              width={104}
            />
          </div>{" "}
          <div className="home-memoji-container last">
            <Image
              onMouseEnter={imageEnter}
              onMouseLeave={imageLeave}
              alt={`memoji`}
              height={104}
              width={104}
              src={"/images/emojiOpen.svg"}
              className="logo"
            />
          </div>
        </section>
      </div>
    </HomeLayout>
  );
};

export default Home;
