// [slug].js
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import client from "../../client";
import Image from "next/image";
import { HomeLayout } from "../../components/layout";
import { useEffect } from "react";
import gsap from "gsap";
import { Share } from "../../components/share";
import ReactDisqusComments from "react-disqus-comments";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import {
  shortName,
  titleName,
  url,
  twitterHandle,
} from "../../constants/constants";

import NewsletterSubscribe from "../../components/newsletterSubscribe";
import { useRouter } from "next/router";
function urlFor(source: SanityImageSource) {
  return imageUrlBuilder(client).image(source);
}

const ptComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      let imageSrc: any = urlFor(value)
        .width(320)
        .height(240)
        .fit("max")
        .auto("format");

      return (
        <Image
          alt={value.alt || " "}
          height={23}
          className="logo"
          src={imageSrc}
          width={24}
          loading="lazy"
        />
      );
    },
  },
};

const Post = ({ post }: any) => {
  const router = useRouter();
  const { body = [], title, publishedAt } = post;
  useEffect(() => {
    gsap.to(".shelf-title", {
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
      <article className="post-container">
        <h1 className="shelf-title">{title}</h1>
        <p className="shelf-date">
          {new Date(publishedAt).toDateString() ?? "Today"} -{" "}
          <span className="shelf-time">5 mins</span>
        </p>
        <PortableText value={body} components={ptComponents} />
        <Share
          title={`You should read ${title}`}
          url={url}
          twitterHandle={twitterHandle}
        />
        <NewsletterSubscribe />
        <ReactDisqusComments
          shortname={shortName}
          identifier={titleName}
          title={titleName}
          url={url}
          onNewComment={() => alert("new comment available!")}
        />
      </article>
    </HomeLayout>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "categories": categories[]->title,
   body, publishedAt
}`;
export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug: any) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps(context: {
  params: { slug?: "" | undefined };
}) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const post = await client.fetch(query, { slug });
  return {
    props: {
      post,
    },
  };
}
export default Post;
