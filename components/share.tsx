import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import Image from "next/image";

export const Share = ({
  title,
  url,
  twitterHandle,
}: {
  title: string;
  url: string;
  twitterHandle: string;
}) => (
  <div className="post-social">
    <span className="text">Share on</span>
    <FacebookShareButton
      url={url}
      className="button is-outlined is-rounded facebook">
      <span className="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-facebook">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      </span>
    </FacebookShareButton>
    <TwitterShareButton
      url={url}
      title={title}
      via={twitterHandle}
      className="button is-outlined is-rounded twitter">
      <span className="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-twitter">
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
        </svg>
      </span>
    </TwitterShareButton>
    <WhatsappShareButton
      url={url}
      title={title}
      className="button is-outlined is-rounded whatsapp">
      <span className="icon">
        <Image
          alt="whatsapp"
          height={30}
          className="logo"
          src={"https://img.icons8.com/windows/30/000000/whatsapp.png"}
          width={30}
          loading="lazy"
        />
      </span>
    </WhatsappShareButton>
  </div>
);
