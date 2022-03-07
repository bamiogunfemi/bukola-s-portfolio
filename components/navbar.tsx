import Link from "next/link";
export const HomeNavbar = () => {
  return (
    <header className="header">
      <div className="header-left">
        <Link href="/" passHref>
          <h1 className="header-left-logo">Bo.</h1>
        </Link>
      </div>
      <ul className="header-right">
        <li className="header-right-item">Resume</li>
        <li className="header-right-item">Shelf</li>
        <li className="header-right-item">Contact</li>
      </ul>
    </header>
  );
};
