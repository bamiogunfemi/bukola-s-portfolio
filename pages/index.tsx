import type { NextPage } from "next";
import { HomeLayout } from "../components/layout";
import { socialData } from "../constants";
import Image from "next/image";
import { useEffect } from "react";
import {
  onHomeLoad,
  onHomeNameEnter,
  onHomeNameLeave,
  onImageEnter,
  onImageLeave,
} from "../styles/gsap/home";

const Home: NextPage = () => {
  useEffect(() => {
    onHomeLoad();
  });

  return (
    <HomeLayout title="Home">
      <div className="home">
        <section className="home-content">
          <p className="home-content-greeting">Heyoo!</p>
          <h2 className="home-content-info">
            I’m{" "}
            <span
              className="home-content-info-underline"
              onMouseEnter={onHomeNameEnter}
              onMouseLeave={onHomeNameLeave}>
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
                    onMouseEnter={onImageEnter}
                    onMouseLeave={onImageLeave}
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
              onMouseEnter={onImageEnter}
              onMouseLeave={onImageLeave}
              alt={`memoji`}
              className="logo"
              src={"/images/emojiCrossed.svg"}
              height={165.7797393798828}
              width={165.7797393798828}
            />
          </div>
          <div className="home-memoji-container second">
            <Image
              onMouseEnter={onImageEnter}
              onMouseLeave={onImageLeave}
              alt={`memoji`}
              height={104}
              className="logo"
              src={"/images/emojiSmile.svg"}
              width={104}
            />
          </div>{" "}
          <div className="home-memoji-container last">
            <Image
              onMouseEnter={onImageEnter}
              onMouseLeave={onImageLeave}
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
