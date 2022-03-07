import twitter from "/images/twitter.svg";
import linkedin from "/images/linkedin.svg";
type imageType = {
  [key: string]: string;
};

export const images: imageType = {
  twitter,
  linkedin,
};

export const toArray = () => {
  let keys = Object.keys(images);
  return keys.map((key: string) => images[key]);
};
