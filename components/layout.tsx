import Head from "next/head";
import { HomeNavbar } from "../components";
import { DiscussionEmbed } from "disqus-react";

import { useEffect, useRef, useCallback, ReactNode } from "react";
type HomeLayoutProps = {
  children: ReactNode;
  title?: string;
};

export const HomeLayout = ({ children, title }: HomeLayoutProps) => {
  return (
    <>
      <Head>
        <title>{`${title} | Bukola Ogunfemi`}</title>
        <meta name="description" content="Grwoth & Content Queen" />
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <main className="main">
        <HomeNavbar />
        {children}
      </main>
    </>
  );
};
