import { Encoder } from "@/app/_components/encoder";
import "./main-styles.scss";
export default function Home() {
  return (
    <main className="main-page">
      <div className="header-wrapper">
        <h1 className="header1">👩‍🔧 한글깨짐 해결사</h1>
        <p className="body1">한글이 깨져보이는 파일을 빠르게 해결해드려요.</p>
        <p className="caption">
          (현재 csv 파일만 가능해요. 엑셀 파일은 csv 파일로 변환해서
          업로드해주세요.)
        </p>
      </div>
      <div className="main-container">
        <p className="subheader1">
          파일첨부하기 버튼을 눌러 "csv" 포맷의 파일을 첨부해주세요.
        </p>
        <Encoder />
      </div>
    </main>
  );
}
