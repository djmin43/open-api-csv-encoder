import "./landing-styles.scss";
import { Encoder } from "@/app/_components/encoder";
export const Landing = () => {
  return (
    <div className={"landing-container"}>
      <div className={"text-hero-container"}>
        <h1 className="header1">
          답답한 한글 깨짐 현상,{" "}
          <span className={"highlight"}>{"\n"}쉽고 빠르게</span> 해결
          해드릴게요.
        </h1>
        <p className={"subheader2"}>
          거래처에서 보내준 엑셀 파일 한글이 깨져 보일 때, 공공기관에서 받은 csv
          파일 한글이 깨져 보일 때, 박주임이 보낸 pdf 파일이 깨져 보일 때, 모두
          저희가 해결해드려요.
        </p>
        <Encoder />
      </div>
    </div>
  );
};
