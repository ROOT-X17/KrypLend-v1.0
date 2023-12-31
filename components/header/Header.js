import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="container header">
        <div className="logo">
          <Link href="/">
            <h2>
              Kryp<span className="--color-danger">Lend</span>
            </h2>
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>

            <li className="--btn --btn-primary">
              <Link href={"/signup"}>Get Started</Link>
            </li>
          
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
