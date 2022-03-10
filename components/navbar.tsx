import Link from "next/link";
import { useRouter } from "next/router";
export const HomeNavbar = () => {
  const router = useRouter();
  return (
    <header className="header">
      <div className="header-left">
        <Link href="/" passHref>
          <h1 className="header-left-logo">Bo.</h1>
        </Link>
      </div>
      <ul className="header-right">
        <a
          target={"_blank"}
          href="https://docs.google.com/document/d/1tl8RR8186iQVuPMLiTSDpwrg2TAn2x7Rh4d_g5RhHX8"
          rel="noreferrer">
          <li className="header-right-item">Resume</li>
        </a>

        <Link href="/shelf" passHref as={`/shelf`}>
          <a
            className={
              router.pathname == "/shelf"
                ? "active"
                : "" || router.pathname == "/shelf/[slug]"
                ? "active"
                : ""
            }>
            <li className="header-right-item"> Shelf</li>
          </a>
        </Link>
        <a
          href="mailto:khadijatogunfemi@gmail.com?subject=Contacting Bukola&body=Hello storytelling goddess,"
          target={"_blank"}>
          <li className="header-right-item">Contact</li>
        </a>
      </ul>
    </header>
  );
};
