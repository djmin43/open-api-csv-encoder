import "./landing-styles.scss";
import { Encoder } from "@/app/_components/encoder";

export const TextHero = () => {
  return (
    <div className={"text-hero-container"}>
      <h1 className="header1">
        답답한 한글 깨짐 현상,{" "}
        <span className={"highlight"}>{"\n"}쉽고 빠르게</span> 해결 해드릴게요.
      </h1>
      <p className={"subheader2"}>
        거래처, 공공기관, 그리고 김주임에게서 받은 csv 파일 한글이 깨져 보일 때,
        {"\n"}
        업무에 집중할 수 있도록 모두 해결해드릴게요.
      </p>
      <Encoder />
    </div>
  );
};
