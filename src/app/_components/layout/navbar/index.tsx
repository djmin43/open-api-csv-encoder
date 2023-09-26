import "./navbar-styles.scss";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className={"navbar-container"}>
      <div>
        <Link href={"/"}>
          <p className={"subheader1"}>‍🔧 한글깨짐 해결사</p>
        </Link>
      </div>
      <div>
        <Link href={"/about"}>
          <p className={"body2"}>About</p>
        </Link>
      </div>
    </nav>
  );
};
