import Link from "next/link";
import groq from "groq";
import client from "../../client";
import { HomeLayout } from "../../components/layout";
import gsap from "gsap";
import { useEffect } from "react";
import NewsletterSubscribe from "../../components/newsletterSubscribe";
import { useRouter } from "next/router";

const Index = ({ posts }: any) => {
  const router = useRouter();
  useEffect(() => {
    gsap.to(".shelf-title", {
      cursor: "pointer",
      duration: 0.5,
      display: "inline",
      transition: "background-size 0.25s ease-in",
      borderRadius: "1em 0px",
      backgroundImage: ` linear-gradient(
        -100deg
        , rgba(0, 117, 255, 0.15), rgba(0, 117, 255, 0.8) 100%, rgba(0, 117, 255, 0.25))`,
    });
  });
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <HomeLayout title="Shelf">
      <section className="shelf">
        <h1 className="shelf-name">Shelf</h1>
        {posts.length > 0 &&
          posts.map(
            ({
              _id = "",
              title = "",
              slug = { current: "", _type: "" },
              publishedAt = "",
              body = "",
              estimatedReadingTime = 0,
            }) => {
              let except: any = body?.[0];
              return (
                slug && (
                  <div key={_id} className="shelf-container">
                    <Link
                      href="/shelf/[slug]"
                      passHref
                      as={`/shelf/${slug?.current}`}>
                      <h3 className="shelf-title">{title}</h3>
                    </Link>{" "}
                    <p className="shelf-date">
                      {new Date(publishedAt).toDateString() ?? "Today"} -{" "}
                      <span className="shelf-time">
                        {estimatedReadingTime} mins
                      </span>
                    </p>
                    <p className="shelf-except">
                      {except?.children[0].text.substring(0, 150) + "..."}
                    </p>
                  </div>
                )
              );
            }
          )}
        <NewsletterSubscribe />
      </section>
    </HomeLayout>
  );
};

export async function getStaticProps() {
  const posts = await client.fetch(groq`
  *[
    _type == "post"
  ]{
    _id,
    title,
    slug,
    publishedAt,
    body,
    'estimatedReadingTime' : round(length(pt::text(body)) / 5 / 180 )
  }

   `);
  return {
    props: {
      posts,
    },
  };
}

export default Index;
