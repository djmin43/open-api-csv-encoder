import "./landing-styles.scss";

export const ExampleHero = () => {
  return (
    <div className={"example-hero-container"}>
      <div className="example-container">
        <p className="header2">BEFORE 🤥</p>
        <p className="subheader2">°æ±âµµ Æ÷Ãµ½Ã È­Çö¸é È­µ¿·Î 432¹ø±æ 25</p>
      </div>
      <p className="header1 highlight">↓↓↓</p>
      <div className="example-container">
        <p className="header2">AFTER 🥰</p>
        <p className="subheader2">경기도 포천시 화현면 화동로 432번길 25</p>
      </div>
    </div>
  );
};
