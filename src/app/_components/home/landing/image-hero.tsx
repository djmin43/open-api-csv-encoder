import "./landing-styles.scss";
import Fail from "../../../../../public/images/fail.png";
import Success from "../../../../../public/images/success.png";
import Image from "next/image";

export const ImageHero = () => {
  return (
    <div className={"image-hero-container"}>
      <Image src={Fail} alt={"failed image"} width={600} />
      <Image src={Success} alt={"failed image"} width={600} />
    </div>
  );
};
