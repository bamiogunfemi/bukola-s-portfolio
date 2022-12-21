import Head from "next/head";
import { HomeNavbar } from "../components";

import { ReactNode } from "react";
type HomeLayoutProps = {
  children: ReactNode;
  title?: string;
};

export const HomeLayout = ({ children, title }: HomeLayoutProps) => {
  return (
    <>
      <Head>
        <title>{`${title} | Bukola Ogunfemi`}</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Bukola Ogunfemi is a Growth & Content Queen with experience in helping brands relate their message to their target audience by
telling stories."
        />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <main className="main">
        <HomeNavbar />
        {children}
      </main>
    </>
  );
};
