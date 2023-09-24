import "./landing-styles.scss";
import { TextHero } from "@/app/_components/home/landing/text-hero";
import { ExampleHero } from "@/app/_components/home/landing/example-hero";

export const Landing = () => {
  return (
    <div className={"landing-container"}>
      <TextHero />
      <ExampleHero />
    </div>
  );
};
