import "./landing-styles.scss";
import { TextHero } from "@/app/_components/home/landing/text-hero";
import { ImageHero } from "@/app/_components/home/landing/image-hero";

export const Landing = () => {
  return (
    <div className={"landing-container"}>
      <TextHero />
      <ImageHero />
    </div>
  );
};
